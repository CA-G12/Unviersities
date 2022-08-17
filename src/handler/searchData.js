const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch');

const searchdata = require('./searchD');

const getDataApi=(req,res)=>{
        const getData= req.body.data;
        const api=`https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?country=${getData}`;
       return fetch(api)
        .then(inputdata =>inputdata.json())
        .then(parseData =>{res.json(parseData.slice(0,20))})
        .catch(err=>console.log(err))
 
}

const  autocomplete  = (req,res)=>{
    const filePath = path.join(__dirname, "..","./uni.json");
    let inputData = req.body.data;
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.json({});
      } else {
        const cleanData = JSON.parse(data);
        const clearArray = searchdata(cleanData, inputData);
        res.send(clearArray);
      }
    });
}

module.exports = {autocomplete,getDataApi};
