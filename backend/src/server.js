import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import authroutes from './routes/auth.route.js'
import messageroutes from './routes/message.route.js'
const app=express()
const port=process.env.Port||3000

app.get("/api/auth/signup",(req,res)=>{
    res.send("signup end point")
})

app.use("/api/auth",authroutes)
app.use('/api/message',messageroutes)
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})