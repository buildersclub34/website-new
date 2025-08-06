const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URL;

async function testConnection() {
  console.log('Attempting to connect with URI:', 
    uri.replace(/:([^:]*?)@/, ':***@')); // Hide password in logs

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    // List all databases to verify connection
    const adminDb = client.db().admin();
    const dbList = await adminDb.listDatabases();
    console.log('📊 Available databases:');
    dbList.databases.forEach(db => console.log(` - ${db.name}`));
    
    // Check if our database exists
    const targetDb = 'builders-club';
    const dbExists = dbList.databases.some(db => db.name === targetDb);
    console.log(`\n🔍 Database '${targetDb}' exists:`, dbExists ? '✅ Yes' : '❌ No');
    
    if (dbExists) {
      // Try to list collections in our database
      try {
        const db = client.db(targetDb);
        const collections = await db.listCollections().toArray();
        console.log(`\n📂 Collections in '${targetDb}':`);
        collections.forEach(col => console.log(` - ${col.name}`));
      } catch (colError) {
        console.error('Error listing collections:', colError.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    if (error.name === 'MongoServerError') {
      console.error('Error code:', error.code);
      console.error('Error code name:', error.codeName);
    }
    
    if (error.syscall === 'getaddrinfo') {
      console.log('\n🔧 Troubleshooting:');
      console.log('1. Check your internet connection');
      console.log('2. Verify the MongoDB hostname is correct');
      console.log('3. Make sure your IP is whitelisted in MongoDB Atlas');
    }
  } finally {
    // Close the connection
    if (client) {
      await client.close();
      console.log('\n🔌 MongoDB connection closed.');
    }
  }
}

// Run the test
testConnection()
  .catch(console.error)
  .finally(() => process.exit(0));
