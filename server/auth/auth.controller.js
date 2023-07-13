import mongoose from "mongoose";
import User from "../user/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User(...req.body, password);

    await newUser.save();
    res.status(200).send("User has been created!")
  } catch (error) {}
};
