import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "../api/server/user/User.route.js"
import videoRoutes from "../api/server/video/Video.route.js"
import commentRoutes from "../api/server/comment/Comments.route.js"
import authRoutes from "../api/server/auth/auth.route.js"


dotenv.config()
const app = express()

const connectdb = () =>  {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to mongo db");
    })
    .catch((error)=>{
        throw error
    })
};
app.use("/api/auths", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.listen(8000, () => {
    connectdb()
})   