const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/config")
const isLogin = (req, res, next)=>{
    token = req.headers.token 
    if(!token){
        return res.status(400).json({message:"Auth token must be provided"})
    }

    try {
        const decodedToken = jwt.verify(token,JWT_SECRET)
        req.userId = decodedToken.userId
        next()
    } catch (error) {
        return res.status(400).json({message:"Invalid token"})
    }
}

module.exports = isLogin