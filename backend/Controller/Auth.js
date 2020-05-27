 
 const jwt =require('jsonwebtoken');

 const login=async (req,res)=>{
    const body=req.body;
    delete body['password'];
    const token=await jwt.sign({
        data: body
      }, 'testsecret', { expiresIn: '5m' });
    res.send({
        success:true,
        ...body,
        token:token
    })

}
module.exports={
    singIn:login
}