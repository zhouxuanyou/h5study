/*
* 分析
*   播放和暂停按钮的样式
*       需求:注册事件，建立监听对象，通过更改类名更改它的状态，需要设立一个标杆来判断当前的状态
*   音频的播放和暂停
*   分析：获取音频元素，设置在播放和暂停样式使用
*   音乐下一曲和上一曲
*   分析：现将音频的路径保存在一个数组里,通过索引获取路径赋值给元素,然后播放，需要将flag的值修改为真
*   音乐停止
*   分析：
*       获取元素对象，确认事件源，将标杆设为false，然后调用播放函数
*   进度条模块
*   分析：
*       确认事件源，获取元素对象，获得当前歌曲的时间和总时间，进度条总长度为550px，用长度除以总时间再乘以当前时间阔以获得当前进度条的状态
*   时间模块
*   分析:
*       确认事件源，获取元素对象，获得当前歌曲的时间和总时间，将值赋值给页面
*   播放列表模块
*   分析，需要设置当前歌曲给与状态
*       首先确认事件源，然后获取元素对象，赋值给元素,播放的列表遍历出来，首先需要将所有列表的类名清空，然后赋值给当前状态的class
*   音乐图片模块
*   分析：
*       方法和音乐路径类似
*
*
*
*
* */

//页面加载引入js
window.onload = function () {
    //获取事件对象元素
    //获取播放暂停按钮
    let play = document.querySelector('#play');
    //获取音频元素
    let audio = document.querySelector('#audio');
    //获取上下曲元素
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    //获取停止元素
    let stop =  document.querySelector('.stop');
    //获取当前进度条
    let curProgrees = document.querySelector("#curProgrees");
    //获取总时间
    let totalTime = document.querySelector("#totalTime");
    //获取当前时间
    let presentTime = document.querySelector("#presentTime");
    //获取播放列表
    let musiclist = document.querySelectorAll('#playerList li');
    //获取图片元素
    let musicimg = document.querySelector('#musicimg');
    //获取Body属性
    let bdy = document.body;

    // //获得总时间和当前时间
    // let musictime = audio.duration;
    // let musicnowtime = audio.currentTime;
    // //用总长度除以时间获得平均时速
    // console.log(musictime,musicnowtime);


    // console.log(musicimg);

    //定义数组
    let musicpath = ['./video/1.mp3','./video/2.mp3','./video/3.mp3'];
    //定义音乐图片路径
    let musicimgpath = ['./images/musicimg/1.jpg','./images/musicimg/2.jpg','./images/musicimg/3.jpg'];
    let bgimgpath = ['url(./images/bfimg/pap.er/1.jpg)','url(./images/bfimg/pap.er/2.jpg)','url(./images/bfimg/pap.er/3.jpg)','url(./images/bfimg/pap.er/4.jpg)','url(./images/bfimg/pap.er/5.jpg)','url(./images/bfimg/pap.er/6.jpg)','url(./images/bfimg/pap.er/7.jpg)','url(./images/bfimg/pap.er/8.jpg)','url(./images/bfimg/pap.er/9.jpg)','url(./images/bfimg/pap.er/10.jpg)','url(./images/bfimg/pap.er/11.jpg)','url(./images/bfimg/pap.er/12.jpg)','url(./images/bfimg/pap.er/13.jpg)','url(./images/bfimg/pap.er/14.jpg)','url(./images/bfimg/pap.er/15.jpg)','url(./images/bfimg/pap.er/16.jpg)','url(./images/bfimg/pap.er/17.jpg)','url(./images/bfimg/pap.er/18.jpg)','url(./images/bfimg/pap.er/19.jpg)','url(./images/bfimg/pap.er/20.jpg)','url(./images/bfimg/pap.er/21.jpg)','url(./images/bfimg/pap.er/22.jpg)','url(./images/bfimg/pap.er/23.jpg)','url(./images/bfimg/pap.er/24.jpg)','url(./images/bfimg/pap.er/25.jpg)','url(./images/bfimg/pap.er/26.jpg)','url(./images/bfimg/pap.er/27.jpg)','url(./images/bfimg/pap.er/28.jpg)','url(./images/bfimg/pap.er/29.jpg)','url(./images/bfimg/pap.er/30.jpg)','url(./images/bfimg/pap.er/31.jpg)','url(./images/bfimg/pap.er/32.jpg)','url(./images/bfimg/pap.er/33.jpg)'];
    //定义索引
    let num = 0;

    //注册事件
    //播放展厅事件
    play.addEventListener('click',thePlay);
    //下一曲事件
    next.addEventListener('click',theNext);
    //上一曲事件
    prev.addEventListener('click',thePrev);
    //停止歌曲事件
    stop.addEventListener('click',theStop);
    //进度条事件d
    curProgrees.addEventListener('click',thePro);

    //设立标杆
    flag = true;

    //函数封装
    //播放暂停功能
    function thePlay() {
        if (flag){
            //修改类名
            play.className = 'play2';
            //修改提示名
            play.title = '暂停';
            //播放音乐
            audio.play();

            //开启进度条
            thePro();
            //开启时间条
            theTime();
        }else {
            //暂停音乐
            audio.pause();
            play.className = 'play1';
            //修改提示名
            play.title = '播放';

        }
        //标杆取反
        flag = !flag;
    }

    //上下曲功能
    function theNext() {
        // for (let i = 0; i < musicpath.length; i++) {
        //     //将路径赋值给音频元素
        //     audio.src = musicpath[i];
        // }

        num ++;

        //判断索引条件
        if (num === musicpath.length ){
            num = 0;
        }
        audio.src = musicpath[num];


        //调用播放
        flag = true;
        thePlay();
        theChancelist();
        theImg();
    }

    //上一曲
    function thePrev() {
        // for (let i = 0; i < musicpath.length; i++) {
        //     //将路径赋值给音频元素
        //     audio.src = musicpath[i];
        // }

        num --;

        //判断索引条件
        if (num < 0 ){
            num = musicpath.length-1;
        }
        audio.src = musicpath[num];

        //调用播放
        flag = true;
        thePlay();
        theChancelist();
        theImgpre();
    }

    //停止歌曲
    function theStop() {
        //设置当前的播放时间为0
        audio.currentTime = 0;

        flag = false;
        thePlay();

    }

    // 进度条模块
    function thePro() {
        // //定义计时器
        // let timer = null;

        //开启计时器
        setInterval(function () {
            //获得总时间和当前时间
            let musictime = audio.duration;
            let musicnowtime = audio.currentTime;

            //判断当前进度条是否进度下一曲
            if ( musicnowtime >= musictime){
                theNext();
            }

            //用总长度除以时间获得平均时速
            // console.log(musictime,musicnowtime);
            let sudu = 550 / musictime;
            curProgrees.style.width = sudu * musicnowtime + 'px';

        },30)
    }

    //时间模块
    function theTime() {

        //开启计时器
        setInterval(function () {
            //获得总时间和当前时间
            let musictime = audio.duration;
            let musicnowtime = audio.currentTime;

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

    //播放列表模块
    function theChancelist() {
        //遍历出列表
        for (let i = 0; i <musiclist.length ; i++) {
            musiclist[i].className = '';
        }
        //因为播放列表的索引和音频路径索引是相同的可以直接调用num
        musiclist[num].className = 'active';
    }

    //音乐图片模块
    function theImg() {
        num ++;

        //判断索引条件
        if (num > musicimgpath.length-1 ){
            num = 0;
        }
        musicimg.src = musicimgpath[num];
    }
    function theImgpre() {
        num --;

        //判断索引条件
        if (num < 0){
            num = musicimgpath.length-1;
        }
        musicimg.src = musicimgpath[num];
    }

    //背景图片切换
    function theBgimg() {
        setInterval(function(){
            num ++;

            //判断索引条件
            if (num > bgimgpath.length-1 ){
                num = 0;
            }
            bdy.style.backgroundImage =  bgimgpath[num];
        } ,10000)

    }
    theBgimg();
};