import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getUsersForSiderbar,getMessages,sendMessage } from "../controllers/message.control.js";

const router = express.Router();



router.get("/users",protectRoute,getUsersForSiderbar);
router.get("/chat/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)

export default router;