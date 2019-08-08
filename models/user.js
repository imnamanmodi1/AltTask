var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
const saltRounds = 10;

var UserModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    verification: {
      type: String
    },
    organisation: {
      type: Schema.Types.ObjectId,
      ref: "Organisation"
    },
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: "Team"
      }
    ],
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task"
      }
    ]
  },
  { timestamps: true }
);

UserModel.pre("save", function(next) {
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

var User = mongoose.model("UserModel", UserModel);
module.exports = User;
