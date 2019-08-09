var express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var UserModel = require("../models/user");
var sgMail = require("@sendgrid/mail");
var router = express.Router();

const secret = "pochiisourdog";
var msg = {
  from: "modi.naman14@gmail.com",
  subject: "Your User SignUp Verification link"
};
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* Function to generate Random Hash */
function generateHash(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* POST - /user/register - register new user. */
router.post("/register", function(req, res, next) {
  //destructured req.body
  var { email, firstName, lastName, password } = req.body;
  //generate a unique random HASH & store in variable
  var randomStr = generateHash(10);
  //assigning sender's email
  msg.to = email;
  //email text
  msg.text = `Hello User, here's your unique verification link, http://localhost:3000/api/v1/users/email-verification/${randomStr}`;

  //creating user
  UserModel.create(
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      verification: randomStr,
      active: false
    },
    (err, result) => {
      if (err) next(err);
      if (result) {
        sgMail.send(msg);
        res.json({
          status: 200,
          success: true,
          message: "USER REGISTERED",
          verificationMail: "SENT"
        });
      }
    }
  );
});

/* POST - /user/login - handle user login */
router.post("/login", (req, res, next) => {
  //destructured req.body
  var { email, password } = req.body;
  UserModel.findOne({ email: email }, function(err, userInfo) {
    //if user email not found in db
    if (err) {
      res.json({ status: 400, success: false, message: "User not found" });
    }
    //if userInfo fetched generate & sign JWT Token
    if (userInfo.active == true) {
      //matching password
      if (bcrypt.compareSync(password, userInfo.password)) {
        //generating & signing JWT Token
        const token = jwt.sign({ id: userInfo._id }, secret, {
          expiresIn: "1h"
        });
        //sending JWT Token in response, when LOGIN SUCCESSFUL
        res.json({
          status: 200,
          success: true,
          message: "USER LOGIN SUCCESSFUL",
          key: token,
          userData: {
            _id: userInfo._id,
            email: userInfo.email,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName
          }
        });
      }
      //handled error if incase something goes wrong
      else {
        //handling error, when LOGIN UNSUCCESSFUL
        res.json({
          status: 400,
          success: false,
          message: "USER LOGIN UNSUCCESSFUL",
          description: "Email ID or Password is invalid, please check."
        });
      }
    }
    if (userInfo.active == false) {
      res.json({
        status: 400,
        success: false,
        message: "USER LOGIN UNSUCCESSFUL",
        description: "Please verify user's email first"
      });
    }
  });
});

module.exports = router;
