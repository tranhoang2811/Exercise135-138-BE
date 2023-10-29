import express, { Router } from "express";
import cors from "cors";
import {
  clearCookie,
  createCookie,
  getCookie,
  login,
  visitPage,
  getLoginInformation,
} from "../controllers/auth.controller";

const router: Router = express.Router();

router.get("/auth/create-cookie", cors(), createCookie);
router.get("/auth/get-cookie", cors(), getCookie);
router.get("/auth/clear-cookie", cors(), clearCookie);
router.get("/auth/visit-page", cors(), visitPage);

router.post("/auth/login", cors(), login);
router.get("/auth/login", cors(), getLoginInformation);

export default router;
