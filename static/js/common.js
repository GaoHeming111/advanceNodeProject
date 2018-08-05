//右侧APP按钮
$(function(){
	iTop();
	
})
//回到顶部按钮
var timer=null;
var sTop=true;
function iTop(){
    var Gohome=document.getElementById("Gohome");
    //滚动时触发
    window.onscroll=function(){
        if(!sTop){
            clearInterval(timer);
        }
        sTop=false;
    }
     Gohome.onclick=function(){
        timer=setInterval(function(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            var speed =Math.floor(-top / 6);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            sTop=true;
            if(top==0){
                clearInterval(timer);
            }
        },30);
    }
    
}
//右侧“回到首页按钮”的隐藏和显示
$(window).scroll(function(){
    var top=$(window).scrollTop();//这里后面一定记得加括号
    var height=$(window).height();//指的是屏幕高度 因为电脑和电脑不一样 都用 $(window) 来取
    if(top>=1400-height){
        $("#rightFixed").show();
    }else{
        $("#rightFixed").hide();
    }
})