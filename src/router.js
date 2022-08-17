const router = require('express').Router();

const {pubic} =require('./handler');

router.get('/universities', );
router.post('/searchData',(req, res)=>{
        console.log("ddd" , req.body );
        res.end(res);
    });
router.post('/inputSreach',);
 
module.exports=router;
