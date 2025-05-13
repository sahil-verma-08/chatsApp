import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getUsersForSiderbar,getMessages,sendMessage } from "../controllers/message.control.js";

const router = express.Router();
const validateIdParam = (req, res, next) => {
    const { id } = req.params;
    if (!id || id.trim() === "" || id === "undefined") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }
    next();
  };

router.get("/users",protectRoute,getUsersForSiderbar);
router.get("/chat/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)

export default router;