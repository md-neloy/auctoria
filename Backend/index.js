require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
//agro1234
//tkWMj4u0as7kNvYI

const { MongoClient, ServerApiVersion } = require("mongodb");



// console.log("DB_PASS:", process.env.DB_PASS); 
const uri = `mongodb+srv://auctoria:${process.env.DB_PASS}@cluster0.t199j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to new MongoDB!"
    );

    const productsCollection = client.db('Auctoria').collection('addProducts');

    app.get('/addProducts', async (req, res) => {
      const cursor = productsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
  });

  app.get('/recentProducts', async (req, res) => {
    try {
     
      const cursor = productsCollection.find().sort({ _id: -1 }).limit(4); 
      const result = await cursor.toArray();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to fetch recent blogs" });
    }
  });

  app.get('/featuredProducts', async (req, res) => {
    try {
        const cursor = productsCollection.find({ status: "Active" }) 
            .sort({ startingBid: -1 })  
           

        const result = await cursor.toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to fetch featured products" });
    }
});

  
  app.post('/addProducts', async (req, res) => {
      const productData = req.body;  // Get the product data from the request body
  
      try {
          // Convert startTime to a Date object
          if (productData.auctionStartDate) {
              const startTime = new Date(productData.auctionStartDate);
  
              
              const auctionEndTime = new Date(startTime);
              auctionEndTime.setDate(auctionEndTime.getDate() + 7); 
  
             
              productData.auctionEndTime = auctionEndTime.toISOString(); 
          }
  
          
          const result = await productsCollection.insertOne(productData);
          res.status(200).json(result);
      } catch (err) {
          res.status(500).json({ message: "Error adding product", error: err });
      }
  });
  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", async (req, res) => {
  res.send("Auctoria is Waiting for an exclusive bid");
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});