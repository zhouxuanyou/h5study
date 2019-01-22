let mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1:27017/itsource',(err)=>{
    if (err) throw err;
    console.log("数据库连接成功")
});

//定义骨架
let userschema = new mongo.Schema({
    name:String,
    age:Number,
    hobby:[],

});
//使用骨架发布模型
let userModel = mongo.model('',userschema,'user');//第一个是模型别名，可以不写，用来占位，第二个为骨架，第三个为创建的集合名；

//使用模型创建实体

let users = new userModel();

// //crud
// users.name = '邓力华';
// users.age = 23;
// users.hobby = ['王者荣耀','貂蝉','打野输出位','癖好：打飞机'];
// users.save((err)=>{
//    if (err) throw err;
//    console.log('保存数据成功');
// });
// //删除
// let id = '5c4683a817c1598676d58a49';
//
// userModel.findById(id,(err,data)=>{
//     if (err) throw err;
//     // console.log('删除成功:',data);
//     data.remove((err)=>{
//         if (err) throw err;
//         console.log('删除数据成功')
//     })
// });

//改
// let id = '5c4683a817c1598676d58a49';
// userModel.findById(id,(err,data)=>{
//     if (err) throw err;
//     console.log('修改前的数据',data);
//     data.name = '华仔';
//     data.age = 18;
//     data.save((err)=>{
//         if(err) throw err;
//         console.log('修改后的数据',data)
//     });
// });
//查
let id = '5c4683a817c1598676d58a49';
// userModel.findById(id,(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// userModel.findById(id).exec((err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// userModel.find({},(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// userModel.find({}).exec((err,data)=>{
//    if (err) throw err;
//    console.log(data);
// // });
// userModel.find({}).sort({'_id':-1}).exec((err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
//删除所有数据
// userModel.find({}).exec((err,data)=>{
//     if (err) throw err;
//     data.forEach(v=>{v.remove()});
//     console.log('删除数据成功')
// });
