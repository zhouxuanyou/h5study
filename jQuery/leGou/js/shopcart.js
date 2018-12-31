$(function () {
    // 喜欢滑动效果
    let num = 0;
    $('.qiehuan').click(function () {
        num++;
        num %= 3;
        $('.xihuanbox').animate({
            "top": -num * 481
        }, 500);
    });
    //选择效果
    $('.allSelect').on('change',function () {
        //定义变量保存选择状态
        let selectzt = $(this).prop('checked');
        // console.log(selectzt);
        $('.allSelect').prop('checked',selectzt);
        $('.singleSelect').prop('checked',selectzt);

        total();
    });

    $('.singleSelect').on('change',function () {
        let flag = true;
        //遍历
        $('.singleSelect').each(function (index,input) {
            let selzt = $(this).prop('checked');
            if (!selzt){
                flag = false;
                return false;
            }
        });
        $('.allSelect').prop('checked',flag);

        total();
    });
    //小计功能
    $('.add').on('click',function () {
        // alert(1);
        // 获取后面输入框的值
        var num =  $(this).next().val();
        
        num++;
        // 把自增后的值 重新复制给后面的输入框
        $(this).next().val(num);

        subTotal(this, num);

        total();
    });
    $('.reduce').on('click',function () {
        // alert(1);
        // 获取后面输入框的值
        var num =  $(this).prev().val();

        num--;
        num = num < 1 ? 1 : num;
        // 把自增后的值 重新复制给后面的输入框
        $(this).prev().val(num);

        subTotal(this, num);

        total();
    });

    //时角效果
    $(".num").on("blur", function () {
        // 调用小计函数
        subTotal(this, $(this).val());
        // 调用总计
        total();
    });


    function subTotal(obj,num) {
        var singlePrice = $(obj).closest("tr").find(".singlePrice").text();
        var subTotal = (singlePrice * num).toFixed(2);
        $(obj).closest("tr").find(".subTotal").text(subTotal);
    }


    //总计
    function total () {
        // 声明两个变量保存总价和数量
        var allNum = 0,
            allPrice = 0;
        $(".singleSelect").each(function (index, input) {
            if ($(input).prop("checked")) {
                // 累加数量
                allNum += parseFloat($(this).closest("tr").find(".num").val());
                // 累加小计的价格
                allPrice += parseFloat($(this).closest("tr").find(".subTotal").text());
            }
        });

        $(".allNum").text(allNum);
        $(".allPrice").text(allPrice.toFixed(2));

    }
    
});
