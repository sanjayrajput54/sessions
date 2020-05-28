
 const jwt =require('jsonwebtoken');

const authCheck=async (req,res,next)=>{

const token=req.headers['token'];
console.log("token",token)
const decoded = await jwt.verify(token, 'testsecret');
console.log("decoded",JSON.stringify(decoded))
if(decoded){
    next();
}
return res.status(403).json({
    success:false,
    message:"Authentication failed"
})
}

module.exports=authCheck;