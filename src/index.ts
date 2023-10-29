import express, { Express } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes";
import { DB_CONNECT_STRING, PORT } from "./config";

const app: Express = express();

app.use(morgan("short"));
app.listen(PORT ?? 3000, () => console.log(`Listening on port ${PORT}`));
app.use(express.json());
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
