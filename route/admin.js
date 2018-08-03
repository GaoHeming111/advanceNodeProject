const express = require('express')
const common = require('./../libs/common')
const mysql = require('mysql')

var db = mysql.createPool({host:"localhost",user:"root",password:"123456",database:"learn"})
module.exports=function(){
    var router = express.Router()
    // 检查登陆状态
    router.use((req,res,next)=>{
        if(!req.session['admin_id'] && req.url!='/login'){  //没有登陆
            res.redirect('/admin/login')
        }else{
            next()
        }
    })
    router.get('/login',(req,res)=>{
        res.render('admin/login.ejs',{})
    })
    router.post('/login',(req,res,)=>{
        var username = req.body.username;
        var password = common.md5(req.body.password + common.MD5_SUFFIX);
        db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database error').end()
            }else{
                
                if(data.length==0){
                    
                    res.status(400).send('no this admin').end()
                }else{
                    if(data[0].password==password){
                        // 成功
                        req.session['admin_id']=data[0].ID
                        res.redirect('/admin/')
                    }else{
                        res.status(400).send('this password is false').end()
                    }
                }
            }
        })
    })
    router.get('/',(req,res)=>{
        res.render('admin/index.ejs',{})
    })
    router.get('/banners',(req,res)=>{
        switch(req.query.act){
            case 'mod':
                break;
            case 'del':
                db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
                    if(err){
                        console.error(err)
                        res.status(500).send('database error').end()
                    }else{
                        res.redirect('/admin/banners')
                    }
                })
                break;
            default:
            db.query('SELECT * FROM banner_table',(err,banners)=>{
                if(err){
                    console.error(err)
                    res.status(500).send('database error').end()
                }else{
                    res.render('admin/banners.ejs',{banners})
                }
            })
            break;
        }
    })
    router.post('/banners',(req,res)=>{
        var title = req.body.title
        var description = req.body.description
        var href = req.body.href
        if(!title || !description || !href){
            res.status(400).send('参数有错').end()
        }else{
            db.query(`INSERT INTO banner_table (title,description,href) VALUE('${title}','${description}','${href}')`,(err,data)=>{
                if(err){
                    console.error(err)
                    res.status(500).send('database error').end()
                }else{
                    res.redirect('/admin/banners')
                }
            })
        }
    })
    return router
}