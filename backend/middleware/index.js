
 const jwt =require('jsonwebtoken');

const authCheck=async (req,res,next)=>{

const token=req.headers['token'];
const decoded = await jwt.verify(token, 'testsecret');
if(decoded){
    next();
}
res.status(403).json({
    success:false,
    message:"Authentication failed"
})
}

module.exports=authCheck;