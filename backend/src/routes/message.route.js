import express from "express";

const router = express.Router();

console.log("MESSAGE ROUTE FILE LOADED");

router.get("/send", (req, res) => {
    console.log("SEND ROUTE HIT");
    res.send("sendmessage page");
});

export default router;