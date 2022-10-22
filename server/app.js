import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
//import Routes
import userRoute from "./routes/user.js";

const app = express();

dotenv.config({
  path: "./config/config.env",
});
//middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport();

//userRoute
app.use("/api/v1", userRoute);

export default app;
