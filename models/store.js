// DEPENDENCIES!
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    users: String,
    posts: String,
    comments: Boolean,
    // comma above is just in case I add another... key value pair
});

const store = mongoose.model("store", storeSchema) // create our model!
module.exports = store;