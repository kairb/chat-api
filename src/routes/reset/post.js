const db = require('../../data/db');
async function reset(req, res){
  await db.deleteMessages();
  res.sendStatus(200);
}
module.exports = reset;