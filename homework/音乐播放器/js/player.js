/*
* 播放功能分析
*    首先获取元素对象，确认事件源，事件类型，通过修改class类名，切换样式,d
*
* 切换歌曲分析
*   首先获取元素对象，确认事件源，事件类型，需要点击下一曲的时候切换音乐，把音乐路径保存在一个数组上，通过事件得到路径赋值给src
*
* 停止播放分析
*   首先获取元素对象，确认事件源，事件类型，当点击停止按钮时，歌曲应该结束播放，且播放进度清0；
*
* 切换歌曲切换图片分析
*   首先获取元素对象，确认事件源，事件类型，保存一个图片路径的数组，通过索引赋值给路径
*
* 播放列表切换分析
*   首席获取元素对象，确认事件源，事件类型，通过更改播放列表的类名而切换，方法和切换歌曲啊图片类似，但是需要首先清除正规li的类名再赋值
*
* 进度条功能分析
*   首先获取元素对象，确认事件源，事件类型，首先进度条长度为550，设置一个计时器，获取当前歌曲的总时间和当前歌曲进度时间
*
*
*
*
*
*
* */

//注册加载
window.onload = function () {
    //获取元素对象
    //获取播放暂停对象
    let play = document.querySelector('#play');
    let audio = document.querySelector('#audio');
    let next = document.querySelector('.next');
    let pre = document.querySelector('.prev');
    let stop = document.querySelector('.stop');
    let musicimg = document.querySelector('#musicimg');
    let musiclist = document.querySelectorAll('#playerList li');
    let curProgrees = document.querySelector('#curProgrees');
    let presentTime = document.querySelector('#presentTime');
    let totalTime = document.querySelector('#totalTime');



    // console.log(curProgrees);


    //设置一个数组
    let musicPath = ['./video/1.mp3','./video/2.mp3','./video/3.mp3'];
    let musicImgPath = ['./images/musicimg/1.jpg','./images/musicimg/2.jpg','./images/musicimg/3.jpg'];
    //设置一个索引
    let num = 0;

    //设置一个标杆
    flag = true;
    
    //注册事件
    play.addEventListener('click',thePlay);
    next.addEventListener('click',theNext);
    pre.addEventListener('click',thePre);
    stop.addEventListener('click',theStop);



    //播放暂停功能
    function thePlay() {

        //判断当前状态
        if (flag){
            audio.play();
            play.className = 'play2';//修改类名
            play.title = '暂停';
            thecurPro();
            theMusictime();
        } else {
            audio.pause();
            flag = false;
            play.className = 'play1';
            play.title = '播放';
        }

        //取反
         flag = !flag;

    }
    
    //下一曲
    function theNext() {

        num++;

        //判断当前索引
        if (num === musicPath.length){
            num = 0;
        }

        //将音乐路径赋值给路径
        audio.src = musicPath[num];
        //将图片路径赋值给路径
        musicimg.src = musicImgPath[num];

        //调用播放功能
        flag = true;
        thePlay();
        theChanlist();
    }

    //上一曲
    function thePre() {

        num--;

        //判断当前索引
        if (num < 0){
            num = musicPath.length-1;
        }

        //将音乐路径赋值给路径
        audio.src = musicPath[num];
        //将图片路径赋值给路径
        musicimg.src = musicImgPath[num];

        //调用播放功能
        flag = true;
        thePlay();
        theChanlist();
    }
    
    //结束播放
    function theStop() {
        //清除播放进度
        audio.currentTime=0;

        //将标杆设置为false
        flag = false;

        thePlay();
    }

    //播放列表
    function theChanlist() {

        //清除所有li标签的类名
        for (let i = 0; i <musiclist.length ; i++) {
            musiclist[i].className = '';
        }

        //将类名赋值给li标签
        musiclist[num].className = 'active';
        // console.log(musiclist[num]);
    }
    
    //进度条模块
    function thecurPro() {
        //设置一个计时器
        let timer = null;
        timer = setInterval(function () {
            //获取当前歌曲时间和当前歌曲总时间
            let nowtime = audio.currentTime;
            let musictime = audio.duration;
            // console.log(nowtime,musictime);

            if (curProgrees.style.width === 550){
                //关闭计时器
                clearInterval(timer);
            }
            if (nowtime >= musictime){
                //切换歌曲
                theNext();
            }

            //设置一个速度
            let sudu = 550/musictime;

            //使用当前时间乘以速度赋值给宽度
            curProgrees.style.width = sudu*nowtime + 'px';
        },30)
    }
    
    //时间模块
    function theMusictime() {
        let timer = null;
        //开启计时器
        timer = setInterval(function () {
            //获得总时间和当前时间
            let musictime = audio.duration;
            let musicnowtime = audio.currentTime;

            if (musicnowtime >= musictime){
                //关闭计时器
                clearInterval(timer);
            }

            //将时间设置为分钟秒
            //设计一个加0的方法
            function add(num){
                if (num<10){
                    num = '0' + num;
                }
                return num;
            }

            //将时间转换为分钟数
            let minutes = Math.floor(musictime/60);
            minutes = add(minutes);
            let nowmin = Math.floor(musicnowtime/60);
            nowmin = add(nowmin);

            //将时间转换为秒
            let secondes = Math.floor(musictime%60);
            secondes = add(secondes);
            let nowsecondes = Math.floor(musicnowtime%60);
            nowsecondes = add(nowsecondes);

            //将值赋值给页面
            presentTime.innerHTML = nowmin + ' : ' + nowsecondes;
            totalTime.innerHTML = minutes + ' : ' + secondes;
        },500)
    }

    
    
};