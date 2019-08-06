var express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var router = express.Router();
const secret = "pochiisourdog";

var UserModel = require("../models/user");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* POST - /user/register - register new user. */
router.post("/register", function(req, res, next) {
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
          message: "user registered successfully"
        });
    }
  );
});

/* POST - /user/login - handle user login */
router.post("/login", (req, res, next) => {
  var { email, password } = req.body;
  UserModel.findOne({ email: email }, (err, userInfo) => {
    if (err) next(err);
    if (userInfo) {
      if (bcrypt.compareSync(password, userInfo.password)) {
        const token = jwt.sign({ id: userInfo._id }, secret, {
          expiresIn: "1h"
        });
        res.json({ status: 200, success: true, key: token });
      }
    }
  });
});

module.exports = router;
