import {
  getProduct,
  patchProduct,
  getProductbyUTandorC,
  getCategoriesbyUser,
  createProduct,
  deleteProduct,
} from "./products.controller.js";
import { Router } from "express";
const router = Router();

// Endpoint GET
router.get("/ProductbyID/:id", getProduct);
router.get("/searchproducts/", getProductbyUTandorC);
router.get("/categoriesbyuser/:userid", getCategoriesbyUser);

// Endpoint POST
router.post("/createproduct", createProduct);

// Endpoint PATCH
router.patch("/updateproduct/:id", patchProduct);

// Endpoint DELETE
router.delete("/deleteproduct/:id", deleteProduct);

export default router;
