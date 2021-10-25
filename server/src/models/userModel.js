const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [2, "First name needs to have at least 2 characters"],
      maxLength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate: {
        validator: (value) => isEmail[value],
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    firebase_id: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
