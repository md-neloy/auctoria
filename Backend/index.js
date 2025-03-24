require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const allowedOrigins = ["http://localhost:5173"];
//middileware
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

  socket.on("disconnect", (reason) => {
    console.warn("User disconnected:", reason);
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Connection Error:", error);
  });
});

// MongoDB Connection
const uri = `mongodb+srv://auctoria:${process.env.DB_PASS}@cluster0.t199j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");

    const db = client.db("Auctoria");
    const productsCollection = db.collection("addProducts");
    const usersCollection = db.collection("users");
    const bidHistoryCollection = db.collection("bids");

    // JWT Token Generation
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, {
        expiresIn: "5h",
      });
      res.send({ token });
    });

    // Middleware to Verify JWT
    const verifyToken = (req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "Forbidden Access" });
      }
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Forbidden Access" });
        }
        req.decoded = decoded;
        next();
      });
    };

    // Fetch All Products
    app.get("/addProducts", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    // Fetch a Single Product
    app.get("/addProducts/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const product = await productsCollection.findOne({
          _id: new ObjectId(id),
        });
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
      } catch (error) {
        res.status(500).json({ error: "Invalid product ID" });
      }
    });

    // Fetch Recent Products (Last 4)
    app.get("/recentProducts", async (req, res) => {
      try {
        const result = await productsCollection.find().sort({ _id: -1 }).limit(4).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch recent products" });
      }
    });

    // Fetch Featured Products (Sorted by Starting Bid)
    app.get("/featuredProducts", async (req, res) => {
      try {
        const cursor = productsCollection.aggregate([
          { $match: { status: "Active" } },
          { $addFields: { startingBidNum: { $toDouble: "$startingBid" } } },
          { $sort: { startingBidNum: -1 } },
        ]);
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch featured products" });
      }
    });

    // Add a Product
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
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json({ message: "Error adding product", error: err });
      }
    });
    //show specific seller products
    app.get("/addProducts/:email",async(req,res)=>{
      const {email}=req.params;
      const query={email:email};
      const result=await productsCollection.find(query); 
      res.send(result);
    })
    

    // Fetch Users
    app.get("/users", async (req, res) => {
      try {
        const users = await usersCollection.find().toArray();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
      }
    });

      app.get("/featuredProducts", async (req, res) => {
        try {
          const cursor = productsCollection.aggregate([
            { $match: { status: "Active" } },
            { $addFields: { startingBidNum: { $toDouble: "$startingBid" } } },
            { $sort: { startingBidNum: -1 } },
          ]);

          const result = await cursor.toArray();
          res.send(result);
        } catch (error) {
          console.error(error);
          res.status(500).send({ error: "Failed to fetch featured products" });
        }
      });

            app.get("/users", async (req, res) => {
              try {
                const users = await usersCollection.find().toArray();
                res.status(200).json(users);
              } catch (error) {
                res
                  .status(500)
                  .json({ message: "Error fetching users", error });
              }
        });

      app.get("/wishlist/:userId", async (req, res) => {
              const { userId } = req.params;
            
              try {
                // Find the user by uid
                const user = await usersCollection.findOne({ uid: userId });
            
                if (!user) {
                  return res.status(404).json({ message: "User not found" });
                }
            
                if (!user.wishlist || user.wishlist.length === 0) {
                  return res.status(200).json({ message: "Wishlist is empty", wishlist: [] });
                }
            
                // Fetch the full product details from productsCollection using wishlist product IDs
                const wishlistedProducts = await productsCollection
                  .find({ _id: { $in: user.wishlist.map(id => new ObjectId(id)) } })
                  .toArray();
            
                res.status(200).json({ wishlist: wishlistedProducts });
              } catch (error) {
                console.error("Error fetching wishlist:", error);
                res.status(500).json({ message: "Server error" });
              }
            });
            
            

      

      app.post("/addProducts", async (req, res) => {
        const productData = req.body;
        try {
          if (productData.auctionStartDate) {
            const startTime = new Date(productData.auctionStartDate);
            // Add 7 days (or your desired duration) to startTime for endTime
            const auctionEndTime = new Date(startTime);
            auctionEndTime.setDate(auctionEndTime.getDate() + 7); // Adding 7 days
            // Update productData with calculated endTime
            productData.auctionEndTime = auctionEndTime.toISOString(); // Convert to string format
          }
          // Insert the updated product data into MongoDB
          const result = await productsCollection.insertOne(productData);
          res.status(200).json(result);
        } catch (err) {
          res.status(500).json({ message: "Error adding product", error: err });
        }
      });
  
    app.post("/users", async (req, res) => {
      try {
        const { name, email, photoURL, uid } = req.body;
        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }

        const newUser = { name, email, photoURL, uid, createdAt: new Date() };
        const result = await usersCollection.insertOne(newUser);
        res.status(201).json({ message: "User registered successfully", user: result });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    app.post("/addToWishlist", async (req, res) => {
      const { productId, userId } = req.body;
    
      try {
        // Find the user in the database (or create a wishlist if not exists)
        const user = await usersCollection.findOne({ uid: userId });
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Add the product to the user's wishlist
        const result = await usersCollection.updateOne(
          { uid: userId },
          { $addToSet: { wishlist: productId } } // Using $addToSet ensures no duplicates
        );
    
        if (result.modifiedCount > 0) {
          res.status(200).json({ message: "Product added to wishlist" });
        } else {
          res.status(400).json({ message: "Failed to add to wishlist" });
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ message: "Server error" });
      }
    });
    
    

    app.get("/bidProduct/:id", async (req, res) => {
      const { id } = req.params;
      try {
        if (!ObjectId.isValid(id)) {
          return res.status(400).send("Invalid ObjectId format");
        }
        const product = await productsCollection.findOne({ _id: new ObjectId(id) });
        res.send(product);
      } catch (error) {
        res.status(500).send({ error: "Invalid product ID" });
      }
    });

    // Place a Bid on a Product
    app.post("/bid/:id", async (req, res) => {
      const { id } = req.params;
      const { amount, user } = req.body;

      try {
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ error: "Invalid product ID format" });
        }

        const objectId = new ObjectId(id);
        const result = await productsCollection.updateOne(
          { _id: objectId },
          { $push: { bids: { amount, user, time: new Date() } } }
        );

        io.emit("newBid", { id, amount, user });
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to place bid" });
      }
    });

  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Auctoria is waiting for an exclusive bid");
});

server.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
