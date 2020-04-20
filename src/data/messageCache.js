let messages = [];

function add(message){
  messages.push(message);
}

function getAll(){
  return messages;
}


module.exports = {
  add,
  getAll,
};