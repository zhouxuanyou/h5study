let fs = require('fs');

let stream = fs.createReadStream('./buffer.js');

stream.on('data',(data)=>{
    console.log(data);
    console.time('1')
});

stream.on('end',()=>{
    console.log('读取结束');
    console.timeEnd('1');
});

stream.on('error',(err)=>{
    console.log(err)
});