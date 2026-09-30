import express from 'express'
import { signup } from '../controllers/auth.controller.js'
const router=express.Router()

console.log("AUTH ROUTE FILE LOADED");
router.post('/signup',signup)

router.post('/signup', (req, res) => {
    console.log("SIGNUP ROUTE HIT");

    res.json({
        message: "Signup route is working"
    });
});



export default router