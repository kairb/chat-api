const express = require('express');
const routeStatus = require('./src/routes/status/get');
const routeGetAll = require('./src/routes/messages/get');
const routeCreateMessage = require("./src/routes/messages/post");
const routeReset = require("./src/routes/reset/post");

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.get("/status", routeStatus);
app.get("/messages", routeGetAll);
app.post("/messages", routeCreateMessage);
app.post("/reset", routeReset);

app.get("*", function(req, res){
  res.status(404).send("Invalid route")
})
app.listen(port, () => {
  console.log('Chat api started on: ' + port);
});