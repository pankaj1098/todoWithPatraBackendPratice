const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pankajyadavce:pankajyadavce@mongodb12345.caa1jts.mongodb.net/"
);

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    contactNumber: Number,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
