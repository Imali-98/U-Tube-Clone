import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uniqe: true,
    },
    email: {
      type: String,
      required: true,
      uniqe: true,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: Array,
    },
    fromGoogle:{
      type:Boolean,
      default:false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
