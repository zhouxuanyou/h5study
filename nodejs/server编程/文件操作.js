let fs = require('fs');
// import {stat} from 'fs';
// //文件读取
// fs.readFile('nihao.text',function (err,data) {
//     if (err){
//         return console.log(err);
//     }
//     //异步读取
//     console.log(data.toString());
// });

// //方法2
// fs.readFile('./nihao.text',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
//
// //同步读取
// let data = fs.readFileSync('nihao.text');
// console.log(data.toString());


// //读取文件信息
// // fs.stat('./nihao.text',function (err,stats) {
// //     if (err) throw err;
// //     console.log(stats);
// // });
//写入文件
// fs.writeFile('./nihao.text','我是你爸爸打死你都会死的',function (err) {
//     if (err) throw err;
// });
// //删除文件
// fs.unlink('./nihaoo.text',err=>{
//     if (err) throw err;
//     console.log('删除成功');
// });
//获取目录文件
// fs.readdir('../../nodejs',(err,flies)=>{
//     if (err) throw err;
//     console.log(flies);
// });
//创建目录
// fs.mkdir('./周宣佑7',function (err) {
//     if (err) throw err;
//     console.log('succes');
//     fs.writeFile('./周宣佑7/nihao.text','我们都是一家人',err=>{
//         if (err) throw err;
//         console.log('sucess');
//         fs.readFile('./周宣佑7/nihao.text',(err,data)=>{
//             if (err) throw err;
//             console.log(data)
//         })
//     })
// });

//删除空文件夹
// fs.rmdir('./周宣佑',err=>{
//     if (err) throw err;
//     console.log('sucess');
// });
//删除文件夹
fs.unlink('./周宣佑6/nihao.text',err=>{
    if (err) throw err;
    console.log('sucess');
    fs.rmdir('./周宣佑6',err=>{
        if (err)throw err;
        console.log('删除飞空文件夹成功');
        }
    )
});