import mongoose from "mongoose";
import User from "../user/User.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../../error.js";
import jwt from "jsonwebtoken"

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

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne ({name:req.body.name})
    if (!user) return next(createError(404,"User not found"))

    const isCorrect = bcrypt.compare(req.password, user.password)
    if (!isCorrect)  return next(createError(400,"Wrong Credentials!"))

    const token = jwt.sign({id:user._id}, process.env.JWT)

    res.cokkkie("access_token", token,{
      httpOnly: true
    }).status(200)
    .json(user)

  } catch (error) {
    next(error)
  }
};
