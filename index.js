import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/user_routes.js";
import dotenv from "dotenv"

dotenv.config();

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use("/api/v1", router)

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

app.listen(process.env.PORT)