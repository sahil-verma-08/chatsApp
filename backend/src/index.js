// const express = require("express")
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import { connectDb } from "./lib/db.js";6
import messageRoutes from "./routes/message.route.js"
import cors from "cors";


dotenv.config();
const PORT=process.env.PORT
const app= express();


app.use(cookieParser());

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb', extended: true }));
  

app.use ("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)




app.listen(PORT,()=>{
    console.log("server is running on port :",PORT)
    connectDb()
});