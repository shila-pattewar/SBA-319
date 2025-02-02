// DEPENDENCIES!
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    password: String
    // comma above is just in case I add another... key value pair
}, { versionKey: false });

const store = mongoose.model("users", storeSchema) // create our model!

module.exports = store;