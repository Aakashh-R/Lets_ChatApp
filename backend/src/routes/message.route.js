import express from "express";
import {getAllContacts,getmessagesByUserId,sendMessage} from '../controllers/message.controller.js'
import protectRoute from '../middleware/auth.middleware.js'
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// the middlewares execute in order -so requests get rate-limited first,then authenticated.
// this is acutally more efficient since unauthenticated requets get blocked by rate limiting
// before hitting the auth middleware 

router.use(arcjetProtection,protectRoute)

router.get("/contacts",protectRoute,getAllContacts)
// router.get("/chats",getChatPartners)
router.get("/:id",protectRoute,getmessagesByUserId)
router.post("/send/:id",protectRoute,sendMessage)
export default router;