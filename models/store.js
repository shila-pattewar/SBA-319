// DEPENDENCIES!
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    // comma above is just in case I add another... key value pair
});

const store = mongoose.model("users", storeSchema) // create our model!

module.exports = store;