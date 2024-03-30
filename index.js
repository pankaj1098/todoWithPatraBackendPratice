const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const TodoRouter = require("./router/todo.route");

app.use("/todo", TodoRouter);

app.get("/", (req, res) => {
  res.send("getting...");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(PORT);
});
