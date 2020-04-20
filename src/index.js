const express = require('express');
const routeStatus = require('./routes/status/get')

const app = express();
const port = process.env.PORT || 5000;



app.get("/status", routeStatus);

app.listen(port, () => {
  console.log('Chat api started on: ' + port);
});