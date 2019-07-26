// 获取当前视口的宽度
// 因为电脑视口不同所以不能根据左边框来设置定位
var w=$(window).width();
w=w/2;
// 主体mbody
//   ------------------------红色网
// box1为下载区域
bianlian($('.box1'),$('.xiazha'));
bianlian($('.box2'),$('.youxiang'));
bianlian($('.box3'),$('.shuipian'));
// bianlian($('.box4'),$('.renwu'));
bianlian($('.box5'),$('.bingli'));
// bianlian($('.box6'),$('.zhiliao'));
// bianlian($('.box7'),$('.didian'));
var count=0;
$('.box2').click(function(){
    $('.yinchang').addClass('xianxian ');
    count+=1;

    if(count==2){
        $('.yinchang').removeClass('xianxian');
        count=0;
    }
});

$('.box4').mouseover(function(){
    $('.renwu').css('filter','brightness(150%)');
    $('.feibiao').slideDown(100).animate({
        top:'200px',
        left:'255px'
    },500);
});
$('.box4').mouseout(function(){
    $('.renwu').css('filter','brightness(100%)');
    $('.feibiao').hide().css({
        top: '-100px',
        left:' 155px'
    })
});
$('.box6').mouseover(function(){
    $('.zhiliao').css('filter','brightness(150%)');
    $('.xiaodongxi>img').addClass('yaobai');
        
    
});
$('.box6').mouseout(function(){
    $('.zhiliao').css('filter','brightness(100%)');
    $('.xiaodongxi>img').removeClass('yaobai')

});
$('.box7').mouseover(function(){
    $('.didian').css('filter','brightness(150%)');
    $('.diImg1').animate({
        top:'200px',
        // left:'255px',
        opacity:0
    },2000);
});
$('.box7').mouseout(function(){
    $('.didian').css('filter','brightness(100%)');
    $('.diImg1').stop().css({
        opacity:1,
        top:"0px"
    });
});
function bianlian(hezi,yuanshu){
    hezi.mouseover(function(){
        yuanshu.css('filter','brightness(150%)');
})
    hezi.mouseout(function(){
        yuanshu.css('filter','brightness(100%)');
})
}


// -----------------------------------------公告列表切换


$(".gTitle>ul>li").mouseover(function () { 
    
    $(this).addClass("xiahua").siblings().removeClass("xiahua");
    var index=$(this).index();
    $('.gMain>ul').eq(index).addClass("xianxian").siblings().removeClass("xianxian");
    
});
 
// 病例
// 里边的日期
var time=new Date();
var xinqi=time.getDay();
if(xinqi==1){
    $('.riqi>p').text("星期一");
}else if(xinqi==2){
    $('.riqi>p').text("星期二");
}else if(xinqi==3){
    $('.riqi>p').text("星期三");
}else if(xinqi==5){
    $('.riqi>p').text("星期五");
}else if(xinqi==4){
    $('.riqi>p').text("星期四");
}else if(xinqi==6){
    $('.riqi>p').text("星期六");
}else {
    $('.riqi>p').text("星期七");
}
