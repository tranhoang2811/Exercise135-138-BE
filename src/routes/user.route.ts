import express, { Router } from "express";
import cors from "cors";
import { create, update } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/users", cors(), create);
router.patch("/users/:id", cors(), update);

export default router;
