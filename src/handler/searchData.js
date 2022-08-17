const fetch = require('node-fetch');

const getDataApi=(req,res)=>{
        const getData= req.body.data;
        const api=`https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?country=${getData}`;
       return fetch(api)
        .then(inputdata =>inputdata.json())
        .then(parseData =>{res.json(parseData.slice(0,20))})
        .catch(err=>console.log(err))
 
}
module.exports=getDataApi;