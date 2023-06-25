import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        uniqe: true
    },
    email: {
        type: String,
        required: true,
        uniqe: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscriberUsers: {
        type: Array,

    },
})

export default mongoose.model("User", VideoSchema)