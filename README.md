// This is an Express.js application that provides an API for managing customer and product information. 
//  It uses MongoDB for data storage and mongoose for data modeling. 
// The application includes the ability to perform CRUD operations (Create, Read, Update, Delete) on customer and product records.

// DEPENDENCIES
// npm install express nodemon dotenv ejs mongoose

//Set up your MongoDB URI:
// Create a .env file in the root of the project and add the following:
// MONGODB_URI=<> (The connection string for your MongoDB instance.)
//PORT=3000 ( The port number on which the server will run.)

//BASE URI
// http://localhost:3000/

//Get/custome -  Fetch all customers.
// GET /products -Fetch all products.
//POST /customers- Create a new customer.
//PATCH /customers/:id - Update customer information by ID.
//DELETE /customers/:id- Delete a customer by ID.