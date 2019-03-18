// var 你好 = '你好';
//
// console.log(你好);

// for (let i = 0; i <5 ; i++) {
// //     setTimeout(function () {
// //         console.log(i);
// //     },0)
// // }


//深拷贝
// var a = {name:'xx',age:18};
// var c = JSON.parse(JSON.stringify(a));
// var b = {};
// for (key in a){
//
//     b[key] = a[key];
// }
//
// console.log(c);

//闭包
// function f1() {
// //     var a = 1;
// //     var b = 2;
// //     return function f2() {
// //         console.log(a);
// //     }
// // }
// //
// // var f3 = f1;
// // f3()();

function f() {
    console.log(a);
    var a = 10;
}

f();