$(function () {
    // 封装一个回到顶部的对象 
    var scrollTop = {
        // 把dom添加到页面的方法
        appendToBody: function (opts) {
            // console.log('自己传的参数：', opts);

            // 默认参数
            var defaults = {
                width: "30px", // 盒子宽度
                height: "52px", // 盒子高度
                backgroundColor: "#ccc", // 背景颜色
                position: "fixed", // 定位
                top: "650px", // 距离顶部位置
                marginRight: "-640px",  // 距离中心位置偏移
                right: "50%", // 定位距离右侧
                display: "none", // 默认隐藏
                imgUrl: "./imags/images/gototop_05.jpg" // 图片地址
            };

            // 自己的参数 和 默认参数合并
            var params = $.extend({},defaults, opts);

            // 把DOM添加到页面
            var $scrollTop =  $(`<div class="scrollTop">
                                <img width="100%" height="100%" src=${params.imgUrl} alt="">
                                </div>`
            );

            // 设置样式
            $scrollTop.css(params);

            // 添加到页面中
            $scrollTop.appendTo($('body'));

        },
        // 监听事件的方法
        bindScroll: function () {
            // 监听滚动事件
            $(window).on("scroll", function () {
                // 获取当前窗口 到顶部的 距离
                var distanceTop = $(this).scrollTop();

                // 如果到顶部的距离大于600
                if (distanceTop > 300) {
                    // 那么 就慢慢的出现按钮
                    $('.scrollTop').fadeIn();
                } else {
                    // 那么 就慢慢的隐藏按钮
                    $('.scrollTop').fadeOut();
                }
            })

            // 监听点击事件
            $(".scrollTop").click(function () {
                // 滚动到顶部
                $("html, body").animate({
                    "scrollTop": 0
                }, 500);
            })
        }
    }

    // 暴露出去(把对象挂在window对象上)
    window.scrollTop = scrollTop;
})


