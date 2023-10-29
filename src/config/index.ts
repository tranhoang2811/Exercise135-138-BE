import dotenv from "dotenv";

dotenv.config();

export const DB_CONNECT_STRING = process.env.DB_CONNECT_STRING || "";
export const PORT = process.env.PORT || 3002;