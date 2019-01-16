let fs = require('fs');

function deldir(dir) {
    //获取目录文件
    let file = fs.readdirSync(dir);
    //循环
    for (let i = 0;i<file.length;i++){
        //拼接路径
        let path = dir+'/'+file[i];
        //获取文件信息
        let stats = fs.statSync(path);
        //判断条件
        if (stats.isFile()){
            //删除
            fs.unlinkSync(path);
        }else if (stats.isDirectory() ){
            //递归
            deldir(path);
        }
        
    }
    //删除目录
    fs.rmdirSync(dir);
    console.log('删除成功');
}

deldir('./python');