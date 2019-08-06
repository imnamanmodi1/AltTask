var express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var router = express.Router();
const secret = "pochiisourdog";

var UserModel = require("../models/user");

/* Function to verify token */
let verifyToken = (req, res, next) => {};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* POST - /user/register - register new user. */
router.post("/register", function(req, res, next) {
  //destructured req.body
  var { email, firstName, lastName, password } = req.body;
  UserModel.create(
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    },
    (err, result) => {
      if (err) next(err);
      if (result)
        res.json({
          status: 200,
          success: true,
          message: "USER REGISTERED"
        });
    }
  );
});

/* POST - /user/login - handle user login */
router.post("/login", (req, res, next) => {
  //destructured req.body
  var { email, password } = req.body;
  UserModel.findOne({ email: email }, (err, userInfo) => {
    if (err) next(err);
    //if userInfo fetched generate & sign JWT Token
    if (userInfo) {
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
          userData: userInfo
        });
      }
      //handled error if incase something goes wrong
      else {
        //handling error, when LOGIN UNSUCCESSFUL
        res.json({
          status: 400,
          success: false,
          message: "USER LOGIN UNSUCCESSFUL",
          description: "Email Id or Password is invalid, please check."
        });
      }
    }
  });
});

module.exports = router;
