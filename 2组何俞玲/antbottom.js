var wechat = document.getElementsByClassName('wechat')[0];
var erweima = document.getElementsByClassName('erweima')[0];
var endnav = document.getElementsByClassName('lianjie');
var endbox  = document.getElementsByClassName('endbox');
var contul =  document.getElementsByClassName('contul')[0];
var contli = document.getElementsByClassName('contli')[0];
var showarea = document.getElementsByClassName('showarea')[0];
var weixin = document.getElementsByClassName('weixin')[0];
var weixinimg = document.getElementsByClassName('weixinimg')[0];
// var l = contul.offsetLeft;
// console.log(l);
// var con2=document.getElementById('con2');
 // con2.innerHTML=contul.innerHTML;
// console.log(cony);
// console.log(contul);

// 1. 功能： 当鼠标移动到 微信图片上时会有一个二维码的图片弹出来
  wechat.onmouseover = function(){
   erweima.style.display = 'block';
   // console.log('log');
}
wechat.onmouseleave = function(){
	erweima.style.display = 'none';
}
 weixinimg.onmouseover = function(){
   weixin.style.display = 'block';
   // console.log('log');
}
weixinimg.onmouseleave = function(){
	weixin.style.display = 'none';
}

// 2. 功能 当鼠标hover上去的时候，endnav的背景色会改变
   for( var i = 0 ; i < endnav.length ; i++){
   	   endnav[i].index = i;     	                             //这一行特别重要
  		endnav[i].onmouseover = function(){
  			for( var j = 0; j < endnav.length ; j++){
  				endnav[j].style.background = '#3E3731';
  				endbox[j].style.display = 'none';
  			}
  	     // console.log(i);    
  	                                 //  这里打印的不是当前的i ，而是循环后的i ，这里i>4
  		this.style.background = '#8B7D7B';
  		endbox[this.index].style.display = 'block';
  	
  	}

  }
 //3.选项卡文字轮播
    // for(var x = 50; ; x+50){
    // 	x = x + 10;
    // 	contul.style.left = x +'px';
    // }

// showarea.scrollLeft = 0;
// function scrollleft(){
// 	if(showarea.scrollLeft >= contul.offsetWidth){
// 		showarea.scrollLeft = 0;
// 	}
// 	else{
// 		showarea.scrollLeft++;
// 	}
// }
//  var time = null;
//  clearInterval(time);
//  time = setInterval(scrollleft,50);
//  showarea.onmouseover = function(){
//  	clearInterval(time);
//  }
// showarea.onmouseout = function(){
// 	time = setInterval(scrollleft ,50);
// }

    var left = showarea.offsetLeft;
    // console.log(left);
    var wid = contul.offsetWidth;
    // console.log(wid);
    function run(){
    if(left >= wid){
    	left = 0;
    }
    else{
    	 left++;
    	
    }
    contul.style.left = - left +'px';
    // console.log(left);

}
    var timer = null;
    clearInterval(timer);
    timer = setInterval(run, 30);

  
showarea.onmouseover = function(){
 	clearInterval(timer);
 }
showarea.onmouseout = function(){
	timer = setInterval(run,30)}