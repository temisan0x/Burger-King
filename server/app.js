import express from "express";
import dotenv from "dotenv";
//import Routes
import userRoute from "./routes/user.js";

const app = express();

dotenv.config({
    path: "./config/config.env"
});

//userRoute
app.use("/api/v1", userRoute)

export default app;
