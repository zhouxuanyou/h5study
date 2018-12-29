$(function () {
    // 喜欢滑动效果
    let num = 0;
    $('.qiehuan').click(function () {
        num++;
        num%=3;
        $('.xihuanbox').animate({
            "top": -num * 481
        },500);
    })
});