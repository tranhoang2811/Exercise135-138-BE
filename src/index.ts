import express, { Express } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes";
import { DB_CONNECT_STRING, PORT } from "./config";
import { IProductInCart } from "./interfaces/product";

declare module "express-session" {
  interface SessionData {
    cart: IProductInCart[];
    visited: number;
  }
}

const app: Express = express();

app.use(morgan("short"));
app.listen(PORT ?? 3000, () => console.log(`Listening on port ${PORT}`));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(session({ secret: "secret" }));
app.use(router);

mongoose
  .connect(DB_CONNECT_STRING)
  .then(() => console.log("Connected to DB"))
  .catch((error) => {
    console.log("Error connecting to DB");
    console.log(error);
  });
