const express = require ("express");
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
// require('dotenv').config();
 const port = 3000;
const MONGODB_URI = "mongodb+srv://shilapattewar16:Arnav2012@cluster0.wugen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const store = require("./models/store"); // Import the Book Model
//const users = require("./models/users.js");

// //MIDDLEWARE
// // connect mongodb using connection string in the .env file
mongoose.connect(MONGODB_URI)
mongoose.connection.on("connected", ()=>{
    console.log(`connected to MongoDB !`)
})


app.get("/users", async (req, res) => {
    const allstores = await store.find();
    res.send (allstores);
});

app.get("/users/:userId", async (req, res) => {
    const founduser = await store.find({"userId":parseInt(req.params.userId)});
    //res.render(founduser);
    res.send (founduser)
});

app.get("/posts", async (req, res) => {
    const allstores = await store.find();
    
    res.send (allstores)
})

app.get("/comments", async (req, res) => {
    const allstores = await store.find();
    
    res.send (allstores)
})

// POST request add the user by object

app.post("/users", async (req, res) => {
  try {
    // Destructure the incoming body to create a new user
    const { userId, name, email, password } = req.body;

    // Create new user instance
    const newUser = new store({
    userId,
      name,
      email,
      password
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the saved user (optionally without __v)
    const userResponse = savedUser.toObject();
    delete userResponse.__v; // Remove the __v field

    res.status(201).send(userResponse); // Send back the new user as a response
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error creating new user" });
  }
});


// PUT route to update user by ID
app.put("/users/:userId", async (req, res) => {
    try {
      const userId = req.params.userId
      const updatedData = req.body;
  
      // Update the user by ID
      const updatedUser = await store.findByIdAndUpdate(userId, updatedData, { new: true });
      //const updatedUser = await store.findOneAndUpdate(userId, updatedData, { new: true });

      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" });
      }
      const userResponse = updatedUser.toObject();
      delete userResponse.__v;
  
      res.status(200).send(userResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Error updating user" });
    }
  });

// DELETE Request

app.delete("/users/:userId", async (req, res) => {
    const deleteuser = await store.findOneAndDelete({"userId":parseInt(req.params.userId)});
    res.send (deleteuser)
});


app.listen (port, ()=>{
    console.log("Server is listing on port 3000")
})








// const  mongoose  = require("mongoose");
// // const { default: router } = require("../../mongoDB/sandbox-319/routes/grades.mjs");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://shilapattewar16:Arnav2012@cluster0.wugen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Connect to your Atlas cluster
// //const client = new MongoClient(url);

// async function run() {
//     try {
//          conn = await mongoose.connect(url);//client.connect();
//          const Book = mongoose.model("Book", bookSchema) // create our model
         
//          console.log(conn.db);
//         //  app.get("/", async (req, res) => {
//         let collection = await db.collection("users");
//         let query = {_id:1};
//         let result = await collection.findOne(query);
//             console.log(result);

//         // } )
//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     // finally {
//     //     await client.close();
//     // }
// }

// run().catch(console.dir);