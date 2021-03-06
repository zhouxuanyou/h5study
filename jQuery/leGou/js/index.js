$(function () {

    //主轮播图
    $("#bannerBox").slider({
        boxh: 440,//盒子的高度
        w: 1000,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    //选项卡
    //缓存
    let $lit = $('.ebooksTitle>ul>li');
    $lit.mouseenter(function () {
        $lit.removeClass('active');
        $(this).addClass('active');


        //获取选项卡的索引
        let index = $(this).index();
        $('.ebooksList > ul').stop(true,true);
        $('.ebooksList > ul').slideUp(500).eq(index).slideDown(500);
    });

    //图片轮播
    $(".pptSlider").slider({
        boxh: 218,//盒子的高度
        w: 330,//盒子的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });
    //手风琴
    let $ebrt =  $('.ebooksright>ul>li');
    $ebrt.mouseenter(function () {
        // alert(1);
        $('.ebookNewtitle').removeClass('none');
        $('.thebookDetails').removeClass('block');

        $('.ebookNewtitle',this).addClass('none');
        $('.thebookDetails',this).addClass('block');
    })
    //服装选项卡
    //缓存
    let $lite = $('.clothesTitle>ul>li');
    $lite.mouseenter(function () {
        $lite.removeClass('active');
        $(this).addClass('active');


        // //获取选项卡的索引
        let index = $(this).index();
        $('.clothesList > ul').stop(true,true);
        $('.clothesList > ul').slideUp(500).eq(index).slideDown(500);
    });
    $(".pptSliders").slider({
        boxh: 340,//盒子的高度
        w: 380,//盒子的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    //推广商品样式
    $('.promotion .promotiontitle .sp').mouseenter(function () {
        $('.promotion .promotiontitle .sp').removeClass('active');
        $(this).addClass('active');

        let index = $(this).index();
        $('.probox').animate({
            "left": -index * 1170
        }, 1000)
    });
    
    //顶部搜过蓝
    $(window).on('scroll',function () {
        //获取高度
        let scorllheight = $(this).scrollTop();

        if (scorllheight > 300){
            $('.topsearchInput').slideDown();
        }else{
            $('.topsearchInput').slideUp();
        }
    });

    //楼层跳转
    $('.louceng .loucengul>li').hover(function () {
        //鼠标移入
        $(this).css({
            "background-color": '#93d46f',
            "background-position-x": -40
        });
        $(this).animate({
            "width": 80
        }, 300)

    },function () {
        //鼠标移出
        $(this).css({
            "background-color": '',
            "background-position-x": 0
        });
        $(this).animate({
            "width": 40
        }, 300)
        
    }).click(function () {
        let index = $(this).index();
        let loucshuju = $('.loucen').eq(index).offset().top;
        // console.log(loucshuju);

        $("html, body").animate({
            "scrollTop": loucshuju - 300
        }, 1000)
    })

});
