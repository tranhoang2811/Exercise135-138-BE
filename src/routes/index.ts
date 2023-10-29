import express, { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";

const router: Router = express.Router();

router.use(authRouter);
router.use(userRouter);

export default router;
