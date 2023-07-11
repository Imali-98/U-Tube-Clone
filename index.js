import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()
const app = express()

const connectdb = () =>  {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to mongo db");
    })
    .catch((error)=>{
        throw error
    })
}

app.listen(8000, () => {
    connectdb()
})  