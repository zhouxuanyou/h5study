
$(function(){
    //初始化验证插件
    $(".myform").validate({
        rules : {
            username : {
                required : true,
                uName : true
            },
            pwd : {
                required : true,
                rangelength:[5,10]
            },
            check_pwd : {
                required : true,
                equalTo: "#pwd1"
            },
            phone_num :{
                required :true,
                rangelength :[11,11]
            }
        },
        messages : {
            username:{
                required : "请输入用户名",
                uName:"请输入以字母开头的4-15位用户名"
            },
            pwd : {
                required : "请输入密码",
                rangelength:"密码长度为5-10位"
            },
            check_pwd : {
                required : "请输入确认密码",
                equalTo: "两次密码不一致"
            },
            phone_num :{
                required :"请输入您的手机号码",
                rangelength :"请输入11位手机号"
            }
        }
    });


    // 用户名
    jQuery.validator.addMethod("uName", function(value, element) {
        var mobile =  /^[a-zA-Z][A-z0-9_]{4,15}$/;
        return this.optional(element) || (mobile.test(value));
    }, "用户名");


});