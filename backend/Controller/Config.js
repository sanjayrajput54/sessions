const config=(req,res)=>{
    res.json({
        success:true,
        data:{
            screens:['Home','Create','List']
        }
    })

}

module.exports={
    config:config
}