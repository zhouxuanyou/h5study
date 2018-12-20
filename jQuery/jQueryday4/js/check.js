$(function(){
	$( "#form1" ).validate({
				rules: {
					yhm: {
                        required: true,
                        uName:true
					},
					mima:{
						required:true,
						rangelength:[5,10]
					}
				},
				messages:{
					yhm:{
						required:"请输入用户名",
						uName:"用户名格式错误"
					},
					mima:{
						required:"请输入密码",
						rangelength:"请输入正确的密码"
					}
				}
              
   } );
})