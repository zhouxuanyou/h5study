var express = require('express');
var router = express.Router();
let mongo = require('mongoose');
mongo.Promise = global.Promise;
mongo.connect('mongodb://127.0.0.1:27017/liuyan',{useMongoClient: true},(err)=>{
    if (err) throw err;
    console.log('数据库连接成功');
});

let mongoschema = new mongo.Schema({
    name:String,
    tel:Number,
    content:String,
    ctime:String
});

let liuyanmodel = mongo.model('users',mongoschema,'users');

//设置get请求
router.get('/',(req,res)=>{
    liuyanmodel.find({}).exec((err,data)=>{
        res.render('guestbook.ejs',{"liuyans":data})
    });

});

router.post('/liuyanadd',(req,res)=>{
    let {username,tel,cnt} = req.body;
    let liuyan = new liuyanmodel();
    liuyan.name = username;
    liuyan.tel = tel;
    liuyan.content = cnt;
    liuyan.ctime = new Date().toLocaleString();
    // console.log(liuyan);
    liuyan.save((err)=>{
        if (err) res.send(`<script>alert("发布失败")</script>`);
        res.send(`<script>alert("成功");location.href ="/" </script>`);

    })
});

module.exports = router;
