const { MongoClient } = require('mongodb');
require('dotenv').config();

// Get the connection string from environment variables
const uri = process.env.DATABASE_URL;

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
});

async function testConnection() {
  console.log('🔍 Testing MongoDB connection...');
  console.log('Connection string:', uri.replace(/:([^:]*?)@/, ':***@'));

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');

    // List all databases
    const adminDb = client.db().admin();
    const dbList = await adminDb.listDatabases();
    
    console.log('\n📊 Available databases:');
    dbList.databases.forEach(db => console.log(`- ${db.name}`));

    // Try to access the builders-club database
    const targetDb = 'builders-club';
    const dbExists = dbList.databases.some(db => db.name === targetDb);
    
    if (dbExists) {
      console.log(`\n🔍 Found database: ${targetDb}`);
      const db = client.db(targetDb);
      const collections = await db.listCollections().toArray();
      console.log(`\n📂 Collections in ${targetDb}:`);
      collections.forEach(col => console.log(`- ${col.name}`));
    } else {
      console.log(`\n❌ Database '${targetDb}' not found. Creating it...`);
      const db = client.db(targetDb);
      await db.collection('test').insertOne({ message: 'Test connection' });
      console.log(`✅ Created database '${targetDb}' with a test collection`);
    }

  } catch (error) {
    console.error('\n❌ Error connecting to MongoDB:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    if (error.name === 'MongoServerError') {
      console.error('Error code:', error.code);
      console.error('Error code name:', error.codeName);
    }

    if (error.message.includes('bad auth')) {
      console.log('\n🔧 Authentication failed. Please check:');
      console.log('1. Username and password in the connection string');
      console.log('2. Database user permissions in MongoDB Atlas');
    }

    if (error.message.includes('getaddrinfo')) {
      console.log('\n🔧 Network error. Please check:');
      console.log('1. Your internet connection');
      console.log('2. IP whitelist in MongoDB Atlas');
    }
  } finally {
    // Close the connection
    if (client) {
      await client.close();
      console.log('\n🔌 MongoDB connection closed.');
    }
    process.exit(0);
  }
}

// Run the test
testConnection();
