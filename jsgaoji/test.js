// 载入http模块
var http = require("http");
// 创建服务器
http.createServer(function(request, response){
    //发送HTTP头部
    //HTTP状态：200:OK
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type': 'text/plain'});
    //发送响应数据
    response.end("Hello World!");
}).listen(8000); //服务器在8000端口监听
//终端打印信息
console.log("Server running at http://127.0.0.1:8000/");
