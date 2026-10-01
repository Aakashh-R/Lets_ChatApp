

import jwt from 'jsonwebtoken'


export const generateToken=async(userId,res)=>{
      const {JWT_SECRET_CODE}=process.env
      if(!JWT_SECRET_CODE) throw new Error("JWT_SECRET_CODE is not configured")
    const token=jwt.sign({userId},process.env.JWT_SECRET_CODE,{expiresIn:"7d"})

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //Milli seconds
        httpOnly:true, //prevent xss attacks:cross-site scripting
        sameSite:"strict",  //csrf attacks
        secure:process.env.NODE_ENV==="development"?false:true
         // for the above secure option
         //if it is in http://localhost -development it is false
         //if it is in https://production it is in secure mode
    })

    return token
}