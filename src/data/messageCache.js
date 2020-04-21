let messages = [{name: "kai", message: "Nailed it!"}];

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
