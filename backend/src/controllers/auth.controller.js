import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../lib/utils.js'

export const signup = async (req, res) => {
    const { email, fullname, password } = req.body
    try {
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 characters" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Not a valid email format" })
        }

        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        })

        if (newUser) {
            await newUser.save()
            generateToken(newUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
    } catch (err) {
        console.log("error in signup controller:", err)
        res.status(500).json({ message: "Internal server error" })
    }
}