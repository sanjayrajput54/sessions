const express =require('express');
const router=express.Router();
const {singIn} =require('./../Controller/Auth');
const {config} =require('./../Controller/Config');

router.post('/signin',singIn);
router.get('/config',config);

module.exports=router;
