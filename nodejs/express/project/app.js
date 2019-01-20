//导包
let express = require('express');

//实例化
let app = express();

//处理请求响应
app.get('/',(req,res)=>{
    res.send('你好世界hsad撒h我爱你');
});

//监听对象
app.listen(8080,()=>{
    console.log('服务器启动成功：http://127.0.0.1:8080');
});