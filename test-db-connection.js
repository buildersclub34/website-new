const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://buildersclub34:builders123@cluster0.lzxtutd.mongodb.net/builders-club?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
    
    // Test Prisma connection
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    try {
      const users = await prisma.user.findMany();
      console.log(`✅ Successfully connected to Prisma. Found ${users.length} users.`);
    } catch (prismaError) {
      console.error('❌ Prisma error:', prismaError.message);
    } finally {
      await prisma.$disconnect();
    }
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    process.exit(0);
  }
}

run().catch(console.dir);
