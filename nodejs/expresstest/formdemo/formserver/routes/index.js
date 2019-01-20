var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login.html');
});

//创建登录
router.post('/login',(req,res)=>{
    let{username,pwd} = req.body;
    //设置一个数据来校验前端传入的值的合法性
    console.log(username,pwd);
    if (username==='zxy'&&parseInt(pwd)===123){
        res.send({"islogin":true,"msg":"登录成功"});
    } else {
        res.send({"islogin":false,"msg":"登录失败"});
    }
});

//创建注册
router.post('/register',(req,res)=>{
    let {userinfo} = req.body;

    let userarry = [
        '周宣佑',
        '唐洋',
        '娇妹',
        '啸天'
    ];

    let flag = true;
    for (let i = 0;i<userarry.length;i++){
        if (userinfo === userarry[i]){
            flag = false;
            break;
        }
    }

    if (flag){
        res.send({'isexist':true,'msg':'用户名可以使用'});
    }else {
        res.send({'isexist':false,'msg':'已经存在，请更换名字'});
    }
});
module.exports = router;
