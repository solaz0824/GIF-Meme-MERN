const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
      trim: true,
      minLength: [2, "The title needs to have at least 2 characters"],
      maxLength: [80, "The title cannot exceed 80 characters"],
    },
    owner: {
      type: String,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: [true, "Please select a category for this meme"],
      enum: {
        values: ["Sticker", "Emoji", "GIF", "Image"],
      },
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = {
  Item,
};
