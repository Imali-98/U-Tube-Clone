import mongoose from "mongoose";
import User from "../user/User.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../../error.js";

export const signup = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({...req.body, password: hash});

    await newUser.save();
    res.status(200).send("User has been created!")
  } catch (error) {
    next(createError(404, "not found sorry!"))
  }
};
