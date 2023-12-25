const jwt = require('jsonwebtoken')

const jwtMiddleware = async(req,res,next)=>{
    try {
       const token = req.headers["authorization"].split(" ")[1] 
       console.log(token);
       const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_CODE)
       req.payload =jwtResponse.userId
       next()
    } catch (err) {
        res.status(401).json("Authorization failed!!! please login")
    }
}

module.exports = jwtMiddleware