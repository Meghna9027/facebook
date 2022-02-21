const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
      min: 3,
      max: 30,
    },
    lastname: {
      type: String,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      requires: true,
      enum: [1,2,3],
      default: "",
    },
    age: {
      type:Integer,
      required: true,
      min: 1,
      max:150,
    },
  },
  { timestamps: true } 
);
module.exports = mongoose.model('User', UserSchema);