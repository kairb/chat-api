const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://kai:VLsIIwEvscJVlg8q@cluster0-2lmuy.mongodb.net/test?retryWrites=true&w=majority"

async function testConnection(){
  const client = MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  try {
    await client.connect();
    await listDatabases(client);
  
  } catch (e) {
    console.error(e);
  
  }finally{
    await client.close();
  
  }
}


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function getMessages(){
  
}

testConnection().catch(console.error);

