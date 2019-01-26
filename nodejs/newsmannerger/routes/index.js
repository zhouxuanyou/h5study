var express = require('express');
var router = express.Router();

let mongo = require('mongoose');
//连接数据库
// mongo.Promise = global.Promise;
mongo.connect('mongodb://localhost/news',{useMongoClient: true},(err)=>{
  if (err) throw err;
  console.log('数据库连接成功');
});

//创建骨架
let newsschema = new mongo.Schema({
    title: String,
    author: String,
    source: String,
    content: String,
    ctime: String,
});



//发布模型
let newsmodel = mongo.model('article',newsschema,'article');


//设置首页
router.get('/',(req,res)=>{
  res.render('index.ejs');
});

//设置首页跳转
router.get('/newsadd',(req,res)=>{
  res.render('newsadd.ejs');
});
router.get('/newslist',(req,res)=>{
    newsmodel.find({}).exec((err, data) => {
        if (err) throw err;
        // 数据和模板合并渲染拼接生成html 响应给前端浏览器
        res.render('newslist.ejs', {"newsData": data})
    })

});

//设置新闻发布请求
router.post('/fabunews',(req,res)=>{

    let {title ,author,source,content} = req.body;

    //把值存入数据库
    let news = new newsmodel();
    news.title = title;
    news.author = author;
    news.source = source;
    news.content = content;
    news.ctime = new Date().toLocaleString();
    // console.log(news);
    //保存到数据库
    news.save((err)=>{
        if (err) res.send(`<script>alert("发布失败");location.href ="/newslist"</script>`);
        res.send(`<script>alert("成功");location.href ="/newslist" </script>`);

    })

});

//设置删除新闻
router.get('/delnews',(req,res)=>{
    //获取当前数据的id
    let id = req.query.id;

    //根据当前id查询找到数据
    newsmodel.findById(id).exec((err,data)=>{
        if(err) throw err;
        if (data){
            data.remove((err)=>{
                if (err) res.send(`'<script>alert("删除失败");</script>`) ;
                res.send(`<script>alert("删除成功");location.href="/newslist"</script>`);
            });

        }

    })
});

//设置修改
router.get('/editnews',(req,res)=>{
    let id = req.query.id;
    newsmodel.findById(id).exec((err,data)=>{
        if (err) throw err;
        res.render('newsedit.ejs',data);
    });
});
router.post('/saveedit',(req,res)=>{
    let {title ,author,source,content,id} = req.body;
    newsmodel.findById(id).exec((err,data)=>{
        if (err) throw err;
        data.title = title;
        data.author = author;
        data.source = source;
        data.content = content;

        data.save((err)=>{
            if (err) res.send(`<script>alert("修改失败")</script>>`);
            res.send(`<script>alert("修改成功");location.href="/newslist"</script>>`)
        })
    })
});



//设置新闻详情
router.get('/viewnews',(req,res)=>{
    let id = req.query.id;
    newsmodel.findById(id).exec((err,data)=>{
        if (err) throw err;
        res.render('newsview.ejs',data);
    });
});



module.exports = router;
