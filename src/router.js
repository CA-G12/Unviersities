const router = require('express').Router();

const {getDataApi} =require('./handler');

router.post('/searchData', getDataApi) ;
// router.post('/inputSreach',);
 
module.exports=router;
