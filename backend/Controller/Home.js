const details=(req,res)=>{
    res.json({
        success:true,
        data:[{
            name:"SBI",
            mobile:"98979797796"
        },{
            name:"HDFC",
            mobile:"98979797796"
        }]
    })

}

module.exports={
    details:details
}