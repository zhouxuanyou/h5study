let getajax = (url) => new Promise((resolve, reject) => {
    let ajax = new XMLHttpRequest();
    ajax.open('get',url);
    ajax.send();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4){
            if (ajax.status === 200){
                resolve(JSON.parse(ajax.responseText))
            }else {
                let err = {'error':ajax.readyState,'msg':ajax.status};
                reject(err);
            }
        }
    };
});

//调用
getajax('./sever/package.json');