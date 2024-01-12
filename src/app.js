import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"})); // this josn used for form data
app.use(express.urlencoded({extended: true, limit: "16kb"})); // this used for URL data
app.use(express.static("public")); // this used for serve static things such as favicon icon & images
app.use(cookieParser()); // parse cookies used for CRUD on user data

export { app };