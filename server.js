const express = require ("express");
const mongoose = require('mongoose')

const app = express();
const port = 3000;



app.get("/", (req, res) => {
    res.send ("welcome to SBA 319")
})

app.listen (port, ()=>{
    console.log("Server is listing on port 3000")
})