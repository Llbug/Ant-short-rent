//1、header里面的二维码操作
var sao = document.getElementById('sao');
var saoA = document.getElementById('saoA');
saoA.onmouseover = function(){
	sao.style.display = 'block';
}
saoA.onmouseout = function(){
	sao.style.display = 'none';
}
//2、轮播切换
var picUl = document.getElementById('pic');
var pics = picUl.getElementsByTagName('li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 0;
//prev点击

	prev.onclick = function(){
		index --;
		if(index < 0){
			index = pics.length-1;
		}
		
		for(var j = 0;j < pics.length;j++){
			// pics[j].style.display = 'none';
			pics[j].className = 'fade';
		}
		// pics[index].style.display = 'block';
		pics[index].className = 'fade in';
}
//next点击
next.onclick = function(){
		index ++;
		console.log(index);
		if(index == pics.length){
			index = 0;
		}
		
		for(var j = 0;j < pics.length;j++){
			// pics[j].style.display = 'none';
			pics[j].className = 'fade';
		}
		// pics[index].style.display = 'block';
		pics[index].className = 'fade in';
}
//3、定时器
var timer = null;
var banner = document.getElementById('banner');
banner.onmouseout = function(){
		timer = setInterval(function(){
		index ++;
		if(index >= pics.length){
			index = 0;
		}
		for(var j = 0;j < pics.length;j++){
				// pics[j].style.display = 'none';
				pics[j].className = 'fade';
			}
			// pics[index].style.display = 'block';
			pics[index].className = 'fade in';
	},2000)
}
banner.onmouseover = function(){
	clearInterval(timer);
}
//4、input入住时间设置

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var alert1 = document.getElementById('alert1');
var alert2 = document.getElementById('alert2');
var room = document.getElementById('room');
var room1 = document.getElementById('room1');
//1)、隐藏右边提醒
btnLeft.onclick = function(){
	alert2.style.display = 'none';
	alert1.style.display = 'block';
}
//2)、点击其他地方收回本提醒框
room.onclick = function(){
	alert1.style.display = 'none';
	// alert2.style.display = 'none';
}
room1.onclick = function(){
	
	alert2.style.display = 'none';
}
//3)、隐藏左边提醒
btnRight.onclick = function(){
	alert1.style.display = 'none';
	alert2.style.display = 'block';
}
