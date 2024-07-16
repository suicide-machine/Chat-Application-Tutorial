import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js"
import { sendMessage } from "../controller/message.controller.js"

const router = express.Router()

router.post("/send/:id", isAuthenticate, sendMessage)

export default router
