import express from "express"
import { signup } from "./auth.controller.js"

const router = express.Router();

router.post("/signup", signup);

router.post("/signin",);

router.post("/google",);

export default router 