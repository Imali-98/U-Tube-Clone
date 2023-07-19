import express from "express"
import {  } from "./Video.controller.js"

const router = express.Router();

router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", getVideo)
router.get("trend", getVideo)
router.get("random", getVideo)
router.get("sub", getVideo)

export default router 