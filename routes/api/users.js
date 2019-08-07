var express = require("express");
var router = express.Router();
var Task = require("../../models/task");
var User = require("../../models/user");

//

//GET ALL TASKS OF PARTICULAR USER
router.get("/tasks/:id", (req, res, next) => {
  var id = req.params.id;
  Task.find({ user: id }, (err, filteredTasks) => {
    if (err) {
      res.json({
        status: 400,
        success: false,
        message: "User or Tasks not found"
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

// requires following data for POST
// title - STRING
// content - STRING
// deadline - DATE
// User - AUTOMATIC USER ASSIGNMENT FROM USER ID in URL

//CREATE NEW TASKS FOR A PARTICULAR USER
router.post("/tasks/create/:id", (req, res, next) => {
  var id = req.params.id;
  console.log(req.body);
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

module.exports = router;
