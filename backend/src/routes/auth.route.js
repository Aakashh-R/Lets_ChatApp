import express from 'express'
import { signup ,login,logout} from '../controllers/auth.controller.js'
const router=express.Router()

console.log("AUTH ROUTE FILE LOADED");
router.post('/signup',signup)

router.post('/login',login)
router.post('/logout',logout)


export default router