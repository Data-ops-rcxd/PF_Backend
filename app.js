import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import request from "supertest";

//Creating app
const app = express();
//Connecting to the database
mongoose
  .connect("mongodb+srv://clusterpfbackend.zpps5bs.mongodb.net", {
    dbName: "db_Cachanflas",
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
app.use(bodyParser.json())

//Routes
import usersRouter from "./Database/Users/users.router.js";
app.use("/User", usersRouter);


test('supertest', async () => {
  const response = await request(app)
  .get('/User/finduserJWT')
  .send()
  expect(response.status).toBe(200)
  })
  


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

