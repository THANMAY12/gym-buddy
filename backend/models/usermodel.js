const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const validator=require('validator')

const Schema=mongoose.Schema;
 const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
 })

// login method

userSchema.statics.login=async function(email,password){
    if(!email||!password){
        throw Error("All feilds are mandatory")
    }
    const user=await this.findOne({email})
    if(!user){
        throw Error("incorect Email")
    }

    const match=await bcrypt.compare(password,user.password);
    if(!match){
        throw Error("incorect Password")
    }
    return user;
}
 // static signup method
userSchema.statics.signup=async function(email,password){
    const exists=await this.findOne({email})
    if(!email||!password){
        throw Error("All feilds are mandatory")
    }

    if(!validator.isEmail(email)){
        throw Error("Email not valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("password is npt strong")
    }

    if(exists){
        throw Error("Email already exists!")
    }
    const salt=await bcrypt.genSalt(5)
    const hash=await bcrypt.hash(password,salt)
    const user=await this.create({email,password:hash})
    return user
}

 module.exports=mongoose.model('User',userSchema)