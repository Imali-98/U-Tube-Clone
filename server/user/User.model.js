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
      required: true,
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
  },
  { Timestamps: true }
);

export default mongoose.model("User", UserSchema);
