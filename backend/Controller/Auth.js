 const login=(req,res)=>{
    const body=req.body;
    delete body['password'];
    console.log("body",JSON.stringify(body));
    res.send({
        success:true,
        ...body
    })

}
module.exports={
    singIn:login
}