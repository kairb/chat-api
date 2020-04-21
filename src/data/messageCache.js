let messages = [{name: "kai", message: "Nailed i!t"}];

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