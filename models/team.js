var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TeamModel = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    userCreated: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

var Team = mongoose.model("TeamModel", TeamModel);
module.exports = Team;
