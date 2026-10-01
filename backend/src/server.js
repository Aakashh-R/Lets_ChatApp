import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import authroutes from './routes/auth.route.js'
import messageroutes from './routes/message.route.js'
import path from 'path'
import {connectDB}from './lib/db.js'
const app=express()
const _dirname=path.resolve()

const port=process.env.Port||5000
app.use(express.json())



app.use("/api/auth",authroutes)
app.use('/api/message',messageroutes)
if(process.env.NODE_ENV=="production"){
   
    app.use(express.static(path.join(_dirname,"../frontend/dist")))
    app.get("/{*splat}",(req,res)=>{
        res.sendFile(path.join(_dirname,"../frontend","dist","index.html"))
    })
}
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
    connectDB()
})