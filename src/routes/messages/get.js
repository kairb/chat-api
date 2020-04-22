const db = require('../../data/db')

async function getAllMessages(req, res){
  return res.json(await db.getMessages());
}

module.exports = getAllMessages;