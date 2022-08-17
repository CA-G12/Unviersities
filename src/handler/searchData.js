const searchdata = require('./searchD');
const fs = require('fs')
const path = require('path')


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

module.exports = {autocomplete};