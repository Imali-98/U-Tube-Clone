import express from "express"
import { addComment, deleteComment, getComment } from "./Comment.controller.js"
import { verifyToken } from "../../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment)
router.delete("/:id", verifyToken, deleteComment)
router.get("/:videoId", getComment)

export default router 