const db = require('../../data/db')
const date = require('../../utils/date');

function createNewMessage(req, res){
  var reqName = req.query.name;
  var reqMessage = req.query.message;
  var time = date();

  db.newMessage({
    name : reqName,
    message : reqMessage,
    time : time,
  });

  res.sendStatus(201);
}

module.exports = createNewMessage;