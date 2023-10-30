import express, { Router } from "express";
import cors from "cors";

import {
  addToCart,
  create,
  getCart,
  list,
  updateCart,
} from "../controllers/product.controller";

const router: Router = express.Router();

router.get("/products", cors(), list);
router.post("/products", cors(), create);
router.post("/products/add-to-cart", cors(), addToCart);
router.get("/products/cart", cors(), getCart);
router.put("/products/cart", cors(), updateCart);

export default router;
