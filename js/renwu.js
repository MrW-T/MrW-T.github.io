$('.boss1').click(function(){
    $('.boss1').removeClass('angui').addClass('lianggui ');
    $('.boss2').removeClass('liangren ').addClass('anren');
    $('.boss1>img').addClass('xianxian ');
    $('.boss2>img').removeClass('xianxian');
    $('.b1').addClass('xianxian').siblings().removeClass("xianxian");
});
$('.boss2').click(function(){
    $('.boss1').removeClass('lianggui ').addClass('angui');
    $('.boss2').removeClass('anren').addClass('liangren ');
    $('.boss2>img').addClass('xianxian ');
    $('.boss1>img').removeClass('xianxian');
    $('.b2').addClass('xianxian').siblings().removeClass("xianxian");

});



function dianji(e,i,j,q){
    $(e).click(function(){
        $('.img1').removeClass('liang1').addClass('hui1');
        $('.img2').removeClass('liang2').addClass('hui2');
        $('.img3').removeClass('liang3').addClass('hui3');
        $('.img4').removeClass('liang4').addClass('hui4');
        $('.img5').removeClass('liang5').addClass('hui5');
        $('.img6').removeClass('liang6').addClass('hui6');
        $('.img7').removeClass('liang7').addClass('hui7');
        $(e).removeClass('hui'+i).addClass('liang'+i);
        $(j).addClass('xianxian').siblings().removeClass("xianxian");
        $(q).addClass('xianxian').siblings().removeClass("xianxian");
      
    });
}
dianji('.img1',1,'.a1','.zhanshi1');
dianji('.img2',2,'.a2','.zhanshi2');
dianji('.img3',3,'.a3','.zhanshi3');
dianji('.img4',4,'.a4','.zhanshi4');
dianji('.img5',5,'.a5','.zhanshi5');
dianji('.img6',6,'.a6','.zhanshi6');
dianji('.img7',7,'.a7','.zhanshi7');

jineng($('.jinengimg>ul>li'),$('.m1'));
jineng($('.a2>jinengimg>ul>li'),$('.a2>m1'));





function jineng(dianji ,jieshao){
    dianji.click(function(){
        console.log(1);
        var index=$(this).index();
        jieshao.eq(index).addClass('xianxian').siblings().removeClass("xianxian");
    });
}
