var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

var Task = require("../../models/task");
var User = require("../../models/user");
var Organisation = require("../../models/organisation");
var Team = require("../../models/team");

var msg = {
  from: "modi.naman14@gmail.com",
  subject: "Email Verified Successfully",
  text: "Your account with AltTask is now verified, keep enjoying AltTask"
};

/* USER: */
/* /api/v1/users - GET ALL USERS */
/* /api/v1/users/:id - GET A PARTICULAR USER DETAILS */

/* TASKS: */
/* /api/v1/users/tasks/:id - GET ALL TASKS OF PARTICULAR USER */
/* /api/v1/users/tasks/create/:id - CREATE NEW TASKS FOR A PARTICULAR USER */

/* ORGANISATION: */
/* /api/v1/users/organisations/:id - GET ALL ORGANISATIONS OF PARTICULAR USER */
/* /api/v1/users/organisations/create/:id - POST, CREATE NEW ORGANISATION FOR A PARTICULAR USER */

/* TEAMS: */
/* /api/v1/users/teams/:id - GET ALL TEAMS OF PARTICULAR USER */
/* /api/v1/users/teams/create/:id - POST, CREATE NEW TEAM FOR A PARTICULAR USER */

/* VERIFY TOKEN */
/* /api/v1/users/verify-token - GET -> VERIFIES TOKEN & RETURNS THE CURRENT USER FROM TOKEN */

/* VERIFY USER EMAIL */
/* /api/v1/users/email-verification/:randomHash - VERIFY USER EMAIL FIRST TIME ON SIGNUP */

/* FUNCTION TO VERIFY TOKEN */
/* This function requires following in request headers -> authorization: Bearer ${token}  */
const verifyToken = (req, res, next) => {
  if (typeof req.headers.authorization !== "undefined") {
    const secret = "pochiisourdog";
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secret, (err, userData) => {
      if (err) {
        res.json({ status: 400, success: false, message: "INVALID TOKEN" });
      }
      if (userData) {
        User.findOne({ _id: userData.id }, (err, user) => {
          if (err) {
            res.json({
              status: 400,
              success: false,
              message: "UNAUTHORIZED/INVALID TOKEN"
            });
          }
          if (user) {
            req.body.user = user;
            next();
          }
        }).select("-password");
      }
    });
  }
};

/* SERVER TEST ROUTE */
router.get("/verifyServer", (req, res, next) => {
  res.json({
    status: 200,
    success: true,
    message: "SERVER & APIs are running fine"
  });
});

/* VERIFY TOKEN ROUTE TO RETURN USER DETAILS WITH TOKEN VERIFICATION */
router.get("/verify-token", verifyToken, (req, res, next) => {
  let { user } = req.body;
  res.json({
    status: 200,
    success: true,
    message: "TOKEN IS VALID",
    user: user
  });
});

/* GET ALL USERS */
router.get("/", verifyToken, (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      res.json({
        status: 404,
        success: false,
        message: "SOMETHING WRONG HAPPENED"
      });
    }
    if (users) {
      res.json({ status: 200, success: true, allUser: users });
    }
  }).select("-password");
});

/* GET A PARTICULAR USER DETAILS */
router.get("/:id", verifyToken, (req, res, next) => {
  var id = req.params.id;
  console.log(id, "this is id");
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      res.json({
        status: 400,
        success: false,
        message: "USER ID INVALID, PLEASE CHECK USER ID"
      });
    }
    if (user) {
      res
        .json({
          status: 200,
          success: true,
          message: "USER FOUND",
          userData: user
        })
        .select("-password");
    }
  });
});

/* GET ALL TASKS OF PARTICULAR USER */
router.get("/tasks/", verifyToken, (req, res, next) => {
  var userId = req.body.user._id;
  console.log(user, "this is user");
  Task.find({ user: userId }, (err, filteredTasks) => {
    if (err) {
      res.json({
        status: 400,
        success: false,
        message: "USER OR TASK INVALID"
      });
    }
    if (filteredTasks) {
      console.log(filteredTasks);
      res.json({
        status: 200,
        success: true,
        tasks: filteredTasks
      });
    }
  });
});

/* Following POST requires */
/* title - STRING */
/* content - STRING */
/* deadline - DATE */
/* user - AUTOMATIC USER ASSIGNMENT FROM /:id in URL */
/* POST, CREATE NEW TASKS FOR A PARTICULAR USER */
router.post("/tasks/create/", verifyToken, (req, res, next) => {
  var userId = req.body.user._id;
  var { title, content, deadline } = req.body;
  Task.create(
    {
      title: title,
      content: content,
      deadline: deadline,
      user: userId
    },
    (err, taskData) => {
      if (err) return next(err);
      if (taskData)
        res.json({
          status: 200,
          success: true,
          message: "NEW TASK CREATED"
        });
    }
  );
});

/* GET ALL ORGANISATIONS OF PARTICULAR USER */
router.get("/organisations/:id", verifyToken, (req, res, next) => {
  var id = req.params.id;
  Organisation.find({ user: id }, (err, filteredOrganisations) => {
    if (err) {
      res.json({
        status: 400,
        success: false,
        message: "USER OR ORGANISATIONS NOT FOUND"
      });
    }
    if (filteredOrganisations) {
      console.log(filteredOrganisations);
      res.json({
        status: 200,
        success: true,
        tasks: filteredOrganisations
      });
    }
  });
});

/* Following POST requires */
/* title - STRING */
/* user - AUTOMATIC USER ASSIGNMENT FROM /:id in URL */
/* POST, CREATE NEW ORGANISATIONS FOR A PARTICULAR USER */
router.post("/organisations/create/:id", verifyToken, (req, res, next) => {
  var id = req.params.id;
  var { title } = req.body;
  Organisation.create(
    {
      title: title,
      user: id
    },
    (err, organisationData) => {
      if (err) return next(err);
      if (organisationData)
        res.json({
          status: 200,
          success: true,
          message: "NEW ORGANISATION CREATED"
        });
    }
  );
});

/* GET ALL TEAMS OF PARTICULAR USER */
router.get("/teams/:id", verifyToken, (req, res, next) => {
  var id = req.params.id;
  Team.find({ userCreated: id }, (err, filteredTeams) => {
    if (err) {
      res.json({
        status: 400,
        success: false,
        message: "USER OR TASK INVALID"
      });
    }
    if (filteredTeams) {
      console.log(filteredTeams);
      res.json({
        status: 200,
        success: true,
        teams: filteredTeams
      });
    }
  });
});

/* Following POST requires */
/* title - STRING */
/* user - AUTOMATIC USER ASSIGNMENT FROM /:id in URL */
/* POST, CREATE NEW TEAM FOR A PARTICULAR USER */
router.post("/teams/create/:id", verifyToken, (req, res, next) => {
  var id = req.params.id;
  var { title } = req.body;
  Team.create(
    {
      title: title,
      userCreated: id
    },
    (err, organisationData) => {
      if (err) return next(err);
      if (organisationData)
        res.json({
          status: 200,
          success: true,
          message: "NEW TEAM CREATED"
        });
    }
  );
});

/* GET - VERIFY USER EMAIL FIRST TIME ON SIGNUP */
router.get("/email-verification/:verificationToken", (req, res, next) => {
  var verificationToken = req.params.verificationToken;
  User.findOneAndUpdate(
    { verification: verificationToken },
    { active: true },
    (err, user) => {
      if (err) return next(err);
      if (user.active == false) {
        msg.to = user.email;
        sgMail.send(msg);
        res.json({
          status: 200,
          success: true,
          message: "USER VERIFIED"
        });
      }
      if (user.active == true) {
        res.json({
          status: 400,
          success: false,
          message: "USER ALREADY VERIFIED"
        });
      }
    }
  );
});

module.exports = router;
