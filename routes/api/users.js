var express = require("express");
var router = express.Router();
var Task = require("../../models/task");
var User = require("../../models/user");
var Organisation = require("../../models/organisation");
var Team = require("../../models/team");

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

/* GET ALL USERS */
router.get("/", (req, res, next) => {
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
router.get("/:id", (req, res, next) => {
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
router.get("/tasks/:id", (req, res, next) => {
  var id = req.params.id;
  Task.find({ user: id }, (err, filteredTasks) => {
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
router.post("/tasks/create/:id", (req, res, next) => {
  var id = req.params.id;
  var { title, content, deadline } = req.body;
  Task.create(
    {
      title: title,
      content: content,
      deadline: deadline,
      user: id
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
router.get("/organisations/:id", (req, res, next) => {
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
router.post("/organisations/create/:id", (req, res, next) => {
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
router.get("/teams/:id", (req, res, next) => {
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
router.post("/teams/create/:id", (req, res, next) => {
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

module.exports = router;
