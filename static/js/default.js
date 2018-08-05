//首页
$(function(){
	index_Ding1();
	index_Ding2();
	index_Ding3();
})
//轮播效果
var c = 0;
function img1(){
	var size=$('#index_banner li').size();
    c++;
    if(c==size){
        c=0;
    }
    $('#index_banner li').eq(c).fadeIn(800).siblings().fadeOut(800);
    var lists=document.getElementById("index_circle").getElementsByTagName("li");
    for(var j=0;j<lists.length;j++){
        lists[j].style.border="2px solid rgba(255,255,255,0)";
        
    }
    lists[c].style.border="2px solid #fd5032";
}
var h = setInterval("img1()",4000);

function next(b){
    //先清除计时器 让当前序号相等
    clearInterval(h);
    c = b;
     $('#index_banner li').eq(b).fadeIn(800).siblings().fadeOut(800);
   
    var lists=document.getElementById("index_circle").getElementsByTagName("li");
    for(var j=0;j<lists.length;j++){
        lists[j].style.border="2px solid rgba(255,255,255,0)";
    }
    lists[b].style.border="2px solid #fd5032";
}
function a0(){
    clearInterval(h);
}
function a1(){
    h = setInterval("img1()",5000);
}
function a2(){
    //这时候 不要 用var来命名h ;
    h = setInterval ("img1()",5000);
}
//点赞增加数字效果
function index_Ding1(){
	$('.index_cont3_ding1').click(function(){
		var num=parseInt($('#index_number1').html());
		$('#index_number1').html(num+1);
	})
}
function index_Ding2(){
	$('.index_cont3_ding2').click(function(){
		var num=parseInt($('#index_number2').html());
		$('#index_number2').html(num+1);
	})
}
function index_Ding3(){
	$('.index_cont3_ding3').click(function(){
		var num=parseInt($('#index_number3').html());
		$('#index_number3').html(num+1);
	})
}

//欢迎页bannner图
$(function(){
	
})
