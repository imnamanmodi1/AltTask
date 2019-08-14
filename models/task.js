var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskModel = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    deadline: {
      type: Date
    },
    user: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  },
  { timestamps: true }
);

var Task = mongoose.model("TaskModel", TaskModel);
module.exports = Task;
