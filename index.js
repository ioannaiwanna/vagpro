const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./database");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.delete("/comments/:id", function (req, res) {
  const id = req.params.id;
  database.remove(id);
  res.sendStatus(200);
});

app.put("/comments/:id", function (req, res) {
  const comment = req.body.comment;
  const id = req.params.id;
  res.json(database.update(id, comment));
});

app.get("/comments", function (req, res) {
  res.json(database.list());
});

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log("Comments server listening on port 3000!");
});
