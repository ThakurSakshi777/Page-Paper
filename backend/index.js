import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js";

const app = express();

dotenv.config();

const PORT = process.env.Port || 4000 ;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI ,{
   
  }) ;
  console.log("Connection to mongoDB")
  
} catch (error) {
  console.log("Error :" , error)
}

// defining routes
app.use("/book" , bookRoute)

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
})
