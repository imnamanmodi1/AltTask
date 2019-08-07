var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var TeamModel = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    teamCreatedBy: {
      type: String
    },
    members: [
      {
        type: Schema.Types.ObjectID,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

var Team = mongoose.model("TeamModel", TeamModel);
module.exports = Team;
