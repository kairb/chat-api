const {MongoClient} = require('mongodb');
require('dotenv').config()
let uri = `mongodb+srv://${process.env.MONGOU}:${process.env.MONGOP}@cluster0-2lmuy.mongodb.net/test?retryWrites=true&w=majority`

async function connect(){
  const client = MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  try {
    await client.connect();
    return client;
  } catch (e) {
    console.error(e);
  }
}

async function disconnect(client){
  try{
    await client.close()
  }catch(e){
    console.error(e)
  }
}

async function newMessage(message){
  try{
    const client = await connect();
    const collection = await client.db('chat_api').collection('messages');
    await collection.insertOne(message)
    await disconnect(client)
  }catch(e){
    console.error(e)
  }
}

async function getMessages(){
  try{
    const client = await connect();
    const collection = await client.db('chat_api').collection('messages');
    const messages = await collection.find().toArray()
    await disconnect(client)
    return messages;
  }catch(e){
    console.error(e)
  }
}

async function deleteMessages(){
  try{
    const client = await connect();
    const collection = await client.db('chat_api').collection('messages');
    const messages = await collection.deleteMany({});
    await disconnect(client)
    return messages;
  }catch(e){
    console.error(e);
  }
}

async function checkLoginCredentials(username, password){
  try{
    const client = await connect();
    const collection = await client.db('chat_api').collection('users');
    const users = await collection.find().toArray()
    valid = false;
    for(var i = 0; i < users.length; i++){
      if (users[i].username == username){
        if(users[i].password == password){
          valid = true;
          break;
        }
      }
    }
    await disconnect(client)
    return valid;
  }catch(e){
    console.error(e)
  }
}


module.exports = {
  newMessage,
  getMessages,
  deleteMessages,
  checkLoginCredentials
};

//https://flaviocopes.com/node-mongodb/