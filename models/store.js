// DEPENDENCIES!
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // comma above is just in case I add another... key value pair
}, { versionKey: false });

const store = mongoose.model("users", storeSchema) // create our model!

module.exports = store;