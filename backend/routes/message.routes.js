import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js"
import { getMessage, sendMessage } from "../controller/message.controller.js"

const router = express.Router()

router.get("/:id", isAuthenticate, getMessage)
router.post("/send/:id", isAuthenticate, sendMessage)

export default router
