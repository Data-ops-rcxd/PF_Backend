import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Creating app
const app = express();
//Connecting to the database
mongoose
  .connect("mongodb+srv://clusterpfbackend.zpps5bs.mongodb.net", {
    dbName: "db_Cachanflas",
    user: "tached",
    pass: "MbjGNVVRA06StpS6",
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });
//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
import usersRouter from "./Database/Users/users.router.js";
app.use("/Users", usersRouter);
import productsRouter from "./Database/products/products.router.js";
app.use("/Products", productsRouter);
import ordersRouter from "./Database/orders/orders.router.js";
app.use("/Orders", ordersRouter);

//Ya instalé los paquetes de jest y supertest, npi de como usarlos
//
export default app;
