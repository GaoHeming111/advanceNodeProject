const express = require('express')
const common = require('./../../libs/common')
const mysql = require('mysql')
const pathLib = require('path')
const fs = require('fs')

var db = mysql.createPool({host:"localhost",user:"root",password:"123456",database:"learn"})
module.exports=function(){
    var router = express.Router()
    router.get('/',(req,res)=>{
        db.query(`SELECT * FROM custom_evaluation_table`,(err,evaluations)=>{
            if(err){
                console.error(err)
                res.status(500).send('database error').end()
            }else{
                res.render('admin/custom.ejs',{evaluations})
            }
        })
    })
    router.post('/',(req,res)=>{
        var title = req.body.title;
        var description = req.body.description
        var ext = pathLib.parse(req.files[0].originalname).ext
        var oldPath = req.files[0].path
        var newPath = oldPath+ext
        var newFileName = req.files[0].filename+ext
        fs.rename(oldPath,newPath,(err)=>{
            if(err){
                res.status(500).send('file opration error').end()
            }else{
                if(req.body.mod_id){  //修改

                }else{  //添加
                    db.query(`INSERT INTO custom_evaluation_table (title,description,src) VALUES('${title}','${description}','${newFileName}')`,(err,data)=>{
                        if(err){
                            console.error(err)
                            res.status(500).send('database error').end()
                        }else{
                            res.redirect('/admin/custom')
                        }
                    })
                }
            }
        })
    })
    return router
}