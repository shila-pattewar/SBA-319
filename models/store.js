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







// // DEPENDENCIES!
// const mongoose = require('mongoose');

// const storeSchema = new mongoose.Schema({
//   userId: { type: Number, required: true },
//   name: { type: String, required: true },
//   email: { 
//     type: String, 
//     required: true, 
//     unique: true,
//     validate: {
//       validator: function(v) {
//         return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); // Basic email regex
//       },
//       message: props => `${props.value} is not a valid email!` // Fixed interpolation with backticks
//     }
//   },
//   password: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         // Regular expression to enforce password validation:
//         // - At least 8 characters
//         // - At least 1 lowercase, 1 uppercase, 1 number, and 1 special character
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
//       },
//       message: props => 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character!'
//     }
//   }
// }, { versionKey: false });

// const store = mongoose.model("users", storeSchema); // Create the model!

// module.exports = store;