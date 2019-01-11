;(function ($) {
    let _this;

    $.fn.extend({
        formyanzheng : function (opts) {
            _this = this;

            //注册事件
            _this.on('submit',function () {
                //获取当前的dom对象
                let inputs = _this.find('[checketype]');
                // console.log(inputs);

                //设置个标杆
                let flag = true;

                //循环jq对象获取详细dom对象
                $(inputs).each(function (index,input) {
                    // console.log(input)
                    //转化格式
                    let $input = $(input);
                    //获取dom的属性
                    let inputattr = $input.attr('checketype');
                    // console.log(inputattr);
                    //判断属性设置方法
                    if (inputattr === 'requeri'){
                        //获取它的值
                        let vals = $.trim($input.val());
                        // console.log(vals);
                        if (vals.length) {
                            // console.log(1);
                            $input.css({
                                border:'2px solid green'
                            })
                        }else {
                            // console.log(2);
                            $input.css({
                                border:'2px solid red'
                            });
                            flag = false;
                        }
                    }else if (inputattr === 'phone') {//手机验证
                        let shoujireg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
                        if (shoujireg.test($input.val())) {
                            $input.css({
                                border:'2px solid green'
                            })
                        }else {
                            $input.css({
                                border:'2px solid red'
                            });
                            flag = false;
                        }
                    }
                });

                return flag;
            });





            return _this;
        }

    })
})(jQuery);