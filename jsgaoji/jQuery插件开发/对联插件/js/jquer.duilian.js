;(function ($) {
    let _this;
    $.fn.extend({
        duilian :function (opts) {
             _this = this;

            // 设置默认参数
            let defalut = {
                lefttop:'150px',
                righttop:'300px',
                leftlf:'10px',
                rightrf:'10px'
            };

            //合并
            let parmars = $.extend({},defalut,opts);

            //获取图片
            let leftimg = $(`<img src=${opts.leftimgurl}>`);

            //设置样式
            $(leftimg).css({
                position:'fixed',
                top:parmars.lefttop,
                left:parmars.leftlf
            });

            //渲染到页面
            $(leftimg).appendTo(_this);
            //获取图片
            let rightimg = $(`<img src=${opts.rightimgurl}>`);

            //设置样式
            $(rightimg).css({
                position:'fixed',
                top: parmars.righttop,
                right:parmars.rightrf
            });

            $(rightimg).appendTo(_this);

            return _this;
    }
    });


})(jQuery);