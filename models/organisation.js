var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganisationModel = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    totalMembers: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

var Organisation = mongoose.model("OrganisationModel", OrganisationModel);
module.exports = Organisation;
