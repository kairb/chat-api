const db = require('../../data/db');
async function reset(req, res){
  await db.deleteMessages();
  res.sendStatus(201);
}
module.exports = reset;