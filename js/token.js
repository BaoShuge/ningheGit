var siteToken = '71504a892e2f4635b9783b4a5cf02086';
// var imageUrls = 'http://xsion.dosion.cc';
var imageUrls = 'http://192.168.18.25:8080';
// var imageUrls = 'http://192.168.18.24:8090';
// 点击关闭通知公告
$(document).ready(function(){
    $(".guanbi").click(function(){
        $(".tongzhi").hide();
    });
});
//点击切换模块
$(document).ready(function(){
    $(".ldzc").click(function(){
        $(".ldzc_list").show();
        $(".ldzc_list").siblings().hide();
        $(".ldzc").addClass("content_wz_list click") ;
        $(".ldzc").siblings().removeClass("content_wz_list click") ;
    });
    $(".jgsz").click(function(){
        $(".jgsz_list").show();
        $(".jgsz_list").siblings().hide(); 
        $(".jgsz").addClass("content_wz_list click") ;
        $(".jgsz").siblings().removeClass("content_wz_list click") ;
    });
    $(".zzgk").click(function(){
        $(".zzgk_list").show();
        $(".zzgk_list").siblings().hide(); 
        $(".zzgk").addClass("content_wz_list click") ;
        $(".zzgk").siblings().removeClass("content_wz_list click") ;
    })
});

