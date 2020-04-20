const messages = require('../../data/messageCache');
const date = require('../../utils/date');

function createNewMessage(req, res){
  var reqName = req.query.name;
  var reqMessage = req.query.message;
  var time = date();

  messages.add({
    name : reqName,
    message : reqMessage,
    time : time,
  })

  res.sendStatus(201);
}

module.exports = createNewMessage;