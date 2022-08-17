const router = require('express').Router();

const {autocomplete} =require('./handler');


router.post('/inputSreach' ,autocomplete);

module.exports=router;

