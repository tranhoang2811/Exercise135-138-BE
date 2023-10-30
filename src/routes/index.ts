import express, { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import productRouter from "./product.route";

const router: Router = express.Router();

router.use(authRouter);
router.use(userRouter);
router.use(productRouter);

export default router;
