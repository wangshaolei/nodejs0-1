const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');
const url = require('url');

router.get('/', function(req, res){
    var urlObj = url.parse(req.url, true);
    fs.readFile(path.join(__dirname, '../data', 'data.json'), 'utf8', function(err, data){
        if(err && err.code !== 'ENOENT'){
            throw err;
        }
        var list = JSON.parse(data || '[]');
        list.push(urlObj.query);
        
        fs.writeFile(path.join(__dirname, '../data', 'data.json'), JSON.stringify(list), function(err){
            if(err){
                throw err;
            }
            console.log('write sucess');
        });
    });
    
    res.send('add success');
});

module.exports = router;