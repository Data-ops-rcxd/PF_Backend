import {
  getOrder,
  getOrderbyUandorD,
  createOrder,
  patchOrder,
} from "./orders.controller.js";
import { Router } from "express";
const router = Router();

// Endpoint GET
router.get("/findorder/:id", getOrder);
router.get("/findorderby", getOrderbyUandorD); //mano, aqui hay que poner los datos de entrada no?

// Endpoint POST
router.post("/createorder", createOrder);

// Endpoint PATCH
router.patch("/updateorder/:id", patchOrder);

export default router;
