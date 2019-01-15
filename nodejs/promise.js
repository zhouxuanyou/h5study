let promi = new Promise(function (resolve,reject) {
    if (true){
        resolve('nihao');
    } else {
        reject('buhao');
    }
});

promi.then(function (data) {
    console.log(data)
},function (err) {
    console.log(err);
});