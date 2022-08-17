const router = require('express').Router();
const {autocomplete,getDataApi} =require('./handler');

router.post('/searchData', getDataApi) ;
router.post('/inputSreach' ,autocomplete);

module.exports=router;

