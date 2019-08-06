var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskModel = new Schema({
  task: {
    type: String,
    required: true
  },
  deadline: {
    type: Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

var Task = mongoose.model("TaskModel", TaskModel);
module.exports = Task;
