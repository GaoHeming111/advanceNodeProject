const express = require('express')
const mysql=require('mysql');
var db = mysql.createPool({host:"localhost",user:"root",password:"123456",database:"learn"})
module.exports=function(){
    var router = express.Router()
    router.get('/get_banners',(req,res)=>{
        db.query('SELECT * FROM banner_table',(err,data)=>{
            if(err){
                
            }
        })
    })
    return router
}