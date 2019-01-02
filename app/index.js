const express = require("express");
const bodyParser = require("body-parser");
const execute = require("./execute");

const app = express();

app.use(
  bodyParser.json({
    strict: true
  })
);

app.post("/api/data", (req, res) => {
  req.body.a = Math.random() * (5 - 1) + 1;

  res.send(req.body);

  if (req.body.command !== undefined) {
    execute(req.body.command);
  }
});

module.exports = app;
