const jwt = require("jsonwebtoken")

const AuthMiddleware=(req,res,next)=>{
  const token = req.headers.authorization
  if(token){
    try {
        const decoded = jwt.verify(token.split(" ")[1],"WellFit")
        if(decoded){
            // console.log(decoded)
            req.body.userId=decoded.userId
            req.body.username=decoded.username
            console.log(req.body)
            next()
        }else{
            res.status(400).send({"msg":"Please login to access this function!!!"})
        }
    } catch (error) {
        res.send({"msg":"Please login to access this function!!!"})
    }
  }else{
    res.status(400).send({"msg":"Please login to access this function!!!"})
  }
}

module.exports={AuthMiddleware}