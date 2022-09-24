const User = require("../models/User");
const bcrypt  = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body
    //not checking for the other fields because mongoose validation will do it.
    //doing or password because i need to hash it now i its available
    if(!password){
        return res.status(400).json({message: "Password must be provided"})
    }
    const hashPassword = await bcrypt.hash(password, 12)
    try {
        user = await User.create({
            username,
            email,
            password: hashPassword
        })

        return res.status(200).json({user})
    } catch (error) {
        if(error.name === "ValidationError"){
            let errors = {}
            Object.keys(error.errors).forEach((key)=>{
                errors[key] = error.errors[key].message
            })

            return res.status(400).json(errors)
        }else if(error.code == 11000){
            return res.status(400).json({message:"Email provided alread exist"})
        }else{
            console.log(error.code)
            return res.status(500).json({"message": "There was an error registering user"})
        }   
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body 
    if(!email || !password){
        return res.status(400).json({message: "Both email and password must be provided"})
    }
    
    try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({message: "Invalid email of password"})
        }

        const isValid = await bcrypt.compare(password,user.password)
        if(isValid){
            token = await jwt.sign({userId: user._id},JWT_SECRET,{expiresIn: "1h"})
            return res.status(200).json({token:token, message: "Login successfull"})
        }else{
            return res.status(404).json({message: "Invalid email of password"})
        }
    } catch (error) {
        
    }
}