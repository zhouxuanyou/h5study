let http = require('http');

let server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('我是你爸爸\n');

    res.end('<h1>hello world</h1>');
});

server.listen(8080,function () {
    console.log('服务启动成功，服务器地址是：http://127.0.0.1:8080');
});