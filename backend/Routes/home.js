
const expres =require('express');
const router=expres.Router();
const {details} =require('./../Controller/Home');

router.get('/detail',details);

module.exports=router;
