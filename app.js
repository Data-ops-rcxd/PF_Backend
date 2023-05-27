import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//Creating app
const app = express();
//Connecting to the database
mongoose
  .connect("----link al cluster de la base de datos aquí----", {
    dbName: "--nombre de la base de datos--",
    user: process.env.Mongo_user,
    pass: process.env.Mongo_pass,
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });
//Middlewares
app.use(cors());

//Routes
import usersRouter from "./Database/---";
app.use("/---", usersRouter);

//connection port
const port = 3000;
const ipAddress = '0.0.0.0'
//Trying connection
try {
  app.listen(port, ipAddress,() => {
    console.log('Server started in port: ' + port + ' with address: ' + ipAddress);
  });
} catch (error) {
  console.log(error);
}

