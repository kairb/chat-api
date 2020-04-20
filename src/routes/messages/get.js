const messages = require('../../data/messageCache')

function getAllMessages(req, res){
  return res.json(messages.getAll());
}

module.exports = getAllMessages;