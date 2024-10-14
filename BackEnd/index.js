import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js"
const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT=process.env.PORT ||4000;
const URI=process.env.MONGO_DB_URI;
// connect to mongoDB
try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
} catch (err) {
  console.log("error",err);
}


//define Route 

app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port${PORT}`)
})