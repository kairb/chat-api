const db = require('../../data/db')


async function login(req, res){ 
  return res.json(await db.checkLoginCredentials(req.query.username, req.query.password));
}

module.exports = login;