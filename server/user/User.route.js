import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "./User.controller.js"
import { verifyToken } from "../../verifyToken.js";

const router = express.Router();

// update user
router.put('/:id', update,verifyToken)

//delete user
router.delete('/:id', deleteUser,verifyToken)

//get a user
router.get('find/:id', getUser)
 
//subscribe a user
router.put('sub/:id', subscribe,verifyToken)

//unsubscribe a user
router.put('unsub/:id', unsubscribe,verifyToken)

//like a video
router.put('like/:videoId', like, verifyToken)

//dislike a video
router.put('dislike/:videoId', dislike,verifyToken)

export default router 