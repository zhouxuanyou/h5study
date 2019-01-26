var express = require('express');
var router = express.Router();

let mongo = require('mongoose');
//链接数据库
mongo.Promise = global.Promise;
mongo.connect('mongodb://127.0.0.1:27017/hujiinfo',{useMongoClient: true},(err)=>{
    if (err) throw err;
    console.log('数据库链接成功');
});
let mongoschema = new mongo.Schema({
    name:String,
    age:Number,
    sex:String,
    tel:Number
});

let hujimodel = mongo.model('users',mongoschema,'users');

router.get('/',(req,res)=>{
    hujimodel.find({}).exec((err,data)=>{
        res.render('index.ejs',{"users":data})
    });
});

router.post('/infoadd',(req,res)=>{
    let {name,age,sex,tel} = req.body;
    let huji = hujimodel();
    huji.name=name;
    huji.age = age;
    huji.sex = sex;
    huji.tel = tel;
    huji.save(err=>{
            if (err) return res.send(`<script>alert("提交失败");location.href ="/"</script>`);
            return res.send(`<script>alert("成功");location.href ="/" </script>`);

    });
});

router.get('/delinfo',(req,res)=>{
    let id = req.query.id;
    hujimodel.findById(id).exec((err,data)=>{
      if (err) throw err;
      if (data){
        data.remove((err)=>{
            if (err) res.send(`'<script>alert("删除失败");</script>`) ;
            res.send(`<script>alert("删除成功");location.href="/"</script>`);
        })
      }
    })
});

module.exports = router;
