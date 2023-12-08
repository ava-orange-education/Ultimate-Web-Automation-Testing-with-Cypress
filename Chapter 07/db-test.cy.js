// dbMongo.js

const { MongoClient } = require('mongodb');

async function getMongoDbData(collectionName, query) {
  const uri = 'your_mongodb_uri';
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection(collectionName);
    return await collection.find(query).toArray();
  } finally {
    await client.close();
  }
}

module.exports = { getMongoDbData };
