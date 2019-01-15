const express = require("express");
const bodyParser = require("body-parser");
const execute = require("./execute");
const { randomFromRange } = require("./util");

const app = express();

app.use(
  bodyParser.json({
    strict: true
  })
);

app.post("/api/data", (req, res) => {
  res.send({
    ...req.body,
    a: randomFromRange(1, 5)
  });

  if (req.body.command !== undefined) {
    execute(req.body.command);
  }
});

module.exports = app;
