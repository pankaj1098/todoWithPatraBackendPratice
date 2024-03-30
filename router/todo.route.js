const { Router } = require("express");
const Todo = require("../model/todo.model");

const router = Router();

router.post("/", async (req, res) => {
  const data = req.body;
  const createTodo = await Todo.create({ ...data });
  if (createTodo) {
    res.status(201).json(createTodo);
  } else {
    res.status(500).json({ msg: "internal server error" });
  }
});

module.exports = router;
