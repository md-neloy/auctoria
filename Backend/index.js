require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

// Allowed Origins for CORS
const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  socket.on("disconnect", (reason) => console.warn("User disconnected:", reason));
});

// MongoDB Connection
const uri = `mongodb+srv://auctoria:${process.env.DB_PASS}@cluster0.t199j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

async function run() {
  try {
    const db = client.db("Auctoria");
    const productsCollection = db.collection("addProducts");
    const usersCollection = db.collection("users");

    
    app.post("/addProducts", async (req, res) => {
      const productData = req.body;

      try {
        if (productData.auctionStartDate) {
          const startTime = new Date(productData.auctionStartDate);
          const auctionEndTime = new Date(startTime);
          auctionEndTime.setDate(auctionEndTime.getDate() + 7);
          productData.auctionEndTime = auctionEndTime.toISOString();
        }

        const result = await productsCollection.insertOne(productData);
        res.status(201).json({ message: "Product added successfully", result });
      } catch (err) {
        res.status(500).json({ message: "Error adding product", error: err });
      }
    });

   
    app.get("/addProducts", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.json(result);
    });

   
    app.get("/addProducts/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const product = await productsCollection.findOne({ _id: new ObjectId(id) });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
      } catch (error) {
        res.status(500).json({ error: "Invalid product ID" });
      }
    });

    
    app.get("/featuredProducts", async (req, res) => {
      try {
        const result = await productsCollection.find({ status: "Active" }).sort({ startingBid: -1 }).toArray();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch featured products" });
      }
    });

    
    app.get("/addProducts/:email", async (req, res) => {
      const { email } = req.params;
      const result = await productsCollection.find({ email }).toArray();
      res.json(result);
    });

    // 👤 Fetch All Users
    app.get("/users", async (req, res) => {
      try {
        const users = await usersCollection.find().toArray();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
      }
    });

    
    app.get("/wishlist/:userId", async (req, res) => {
      const { userId } = req.params;
      try {
        const user = await usersCollection.findOne({ uid: userId });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (!user.wishlist || user.wishlist.length === 0) {
          return res.json({ message: "Wishlist is empty", wishlist: [] });
        }

        const wishListedProducts = await productsCollection.find({ _id: { $in: user.wishlist.map(id => new ObjectId(id)) } }).toArray();
        res.json({ wishlist: wishListedProducts });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });

   
    app.post("/addToWishlist", async (req, res) => {
      const { productId, userId } = req.body;
      try {
        const user = await usersCollection.findOne({ uid: userId });
        if (!user) return res.status(404).json({ message: "User not found" });

        const result = await usersCollection.updateOne({ uid: userId }, { $addToSet: { wishlist: productId } });
        if (result.modifiedCount > 0) {
          res.json({ message: "Product added to wishlist" });
        } else {
          res.status(400).json({ message: "Failed to add to wishlist" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });

    // 💰 Place a Bid on a Product
    app.post("/bid/:id", async (req, res) => {
      const { id } = req.params;
      const { amount, user } = req.body;
      try {
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid product ID format" });

        const result = await productsCollection.updateOne({ _id: new ObjectId(id) }, { $push: { bids: { amount, user, time: new Date() } } });
        io.emit("newBid", { id, amount, user });
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: "Failed to place bid" });
      }
    });

  } catch (error) {
    console.error("❌ Database Connection Error:", error);
  }
}

run().catch(console.dir);

server.listen(port, () => {
  console.log(` Server running on port: ${port}`);
});
