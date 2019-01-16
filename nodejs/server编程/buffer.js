let bufred = new Buffer(20);

//创建指定缓存区
let bufblue = new Buffer([97,66,67,68,69,122]);

let bufs = new Buffer('nihaowoshinibab','utf-8');

// console.log(bufred);
//
// console.log(bufblue.toString());
//
// console.log(bufs.toString());

//写入方法
bufred.write('uiiiowohao','utf-8');

// console.log(bufred.toString());

//拷贝
bufred.copy(bufblue);

console.log(bufblue.toString());