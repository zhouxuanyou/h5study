let fs = require('fs');

let wirtestream = fs.createWriteStream('./nihao.text');

console.time('1');
for (let i=0;i<1000000;i++){
    wirtestream.write('我爱你。我的老婆大人');

}
wirtestream.end();

wirtestream.on('finish',()=>{
   console.log('写入完成');
   console.timeEnd('1');
});
wirtestream.on('error',(err)=>{
    console.log('错误信息:'+err)
});