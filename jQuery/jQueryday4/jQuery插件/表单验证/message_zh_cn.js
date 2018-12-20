//配置通用的默认提示语  
$.extend($.validator.messages, {  
    required: '该项为必填项',  
    maxlength: $.validator.format("最大长度不能大于{0}个字符"),  
    minlength: $.validator.format("最小长度不能小于{0}个字符"),  
    rangelength: $.validator.format("字符长度必须在 {0} 和 {1} 之间"),  
    range: $.validator.format("数值必须在 {0} 和 {1} 之间"),  
    max: $.validator.format("数值不能大于 {0}"),  
    min: $.validator.format("数值不能小于 {0}")  
});  