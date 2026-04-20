const User=require('../models/usermodel')
const jwt=require('jsonwebtoken')
// login user


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.JWTSECRET,{expiresIn:'3d'})
}



exports.loginUser=async (req,res)=>{
    const{email,password}=req.body; 
    try{
        const user=await User.login(email,password)

        // create token
        const token=createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


exports.signupUser=async (req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.signup(email,password)

        // create token
        const token=createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
