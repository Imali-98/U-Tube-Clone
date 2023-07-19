import express from "express"
import {  } from "./Video.controller.js"

const router = express.Router();

router.post("/", addVideo)
router.put("/:id", updateVideo)
router.delete("/:id", deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", getVideo)
router.get("trend", getVideo)
router.get("random", getVideo)
router.get("sub", getVideo)

export default router 