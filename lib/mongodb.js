import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/bcv'; 
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);  
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;