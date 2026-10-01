
import mongoose from 'mongoose'


export const connectDB=async()=>{
    try{
        const {MONGODB_URI}=process.env
        if(!MONGODB_URI) throw new Error("MONGODB_URI is not set")
    const conn=await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected successfully:",conn.connection.host)
    }catch(error){
        console.error("mongodb connection error:",error)
        process.exit(1)
    }
    
}