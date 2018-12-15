

//封装控制台输出方法
function log(msg){
    console.log(msg);
}


//封装网页输出
function d(msg){
    document.write(msg);
}


/*
    addEvent : 注册事件
    obj ： 事件源(元素对象)
    type ：不带on的事件类型
    fn : 事件处理函数
* */
function addEvent(obj,type,fn){

    //判断
    if(obj.addEventListener){
        //标准浏览器
        obj.addEventListener(type,fn)
    }else{
        //IE浏览器
        obj.attachEvent("on"+type,fn);
    }

}


/*
    getCss ： 获取内联和外联样式,还可以获取行间样式
    obj : 获取的对象
    css : 获取对象上属性
* */
function getCss(obj,css){
    return obj.currentStyle ? obj.currentStyle[css] : getComputedStyle(obj, null)[css]
}



/*

    startMove : 缓冲运动框架
    obj : 要运动的对象
    attr : 要运动的属性
    endFn : 回调函数： 运动结束后再执行的函数

* */

//定义运动函数
function startMove(obj,attr,target,endFn){

    //关闭计时器
    clearInterval(obj.timer);

    //开启计时器
    obj.timer = setInterval(function () {

        //定义起始点
        let cssVal = 0;

        //判断属性值
        if(attr === "opacity"){
            //获取改变的属性
            cssVal = parseFloat(getCss(obj,attr)) * 100;
        }else{
            //获取改变的属性
            cssVal = parseInt(getCss(obj,attr));//起始值
        }


        //定义速度
        let speed = (target - cssVal)/7;

        //判断速度方向
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        //判断是否到达终点
        if(cssVal === target){
            //关闭计时器
            clearInterval(obj.timer);

            //运动结束后调用回调函数
            if(endFn){//如果传入了回调函数,才执行回调函数
                endFn();
            }

        }else{

            if(attr === "opacity"){
                //运动
                obj.style.opacity = (cssVal + speed)/100;
            }else{
                //运动
                obj.style[attr] = cssVal + speed + "px";
            }
        }
    },30)
}
