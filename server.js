const express = require ("express");
const mongoose = require('mongoose')

const app = express();
// require('dotenv').config();
 const port = 3000;
const MONGODB_URI = "mongodb+srv://shilapattewar16:Arnav2012@cluster0.wugen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const store = require("./models/store.js"); // Import the Book Model

// //MIDDLEWARE
// // connect mongodb using connection string in the .env file
mongoose.connect(MONGODB_URI)
mongoose.connection.on("connected", ()=>{
    console.log(`connected to MongoDB !`)
})


app.get("/users", async (req, res) => {
    const allstores = await store.find();

    res.send (allstores)

})

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