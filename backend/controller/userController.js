const error=require("../utils/error")


const login=(req,res)=>{
    const {name,password}=req.body
    res.send("okkk")

}

const register=(req,res,next)=>{
    const  {name,email,password}=req.body
    if (name ||!email||password){
        return next(error("add requiered details",500))
    }
    
}

module.exports={login,register}