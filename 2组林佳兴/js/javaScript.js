function Scroll() {
    if(window.pageYOffset){
        return{
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }
    // 判断是否为怪异模式
    else if(document.compatMode === 'CSS1Compat'){
        return{
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }
    else{
        return{
            "top":document.body.scrollTop,
            "left":document.body.scrollLeft
        }
    }
}
var btn_close = document.getElementsByClassName('btn-close')[0];
var bannerBox = document.getElementsByClassName('banner')[0];
var banner_open = document.getElementsByClassName('banner_open')[0];
var banner_bg = document.getElementsByClassName('banner_bg')[0];
var banner_close = document.getElementsByClassName('banner_close')[0];
var bannerW = bannerBox.offsetWidth;
window.onscroll = function () {
    if(Scroll().top > 1000){
        banner_open.style.display = 'block';
    }else{
        banner_open.style.display = 'none';
    }
}
btn_close.onclick = function () {
    bannerBox.style.marginLeft = -bannerW + 'px';
    bannerBox.style.opacity = 0.1;
    banner_close.style.marginLeft = '124px';
    banner_close.style.transitionDelay = '1s';
}
banner_close.onclick = function () {
    bannerBox.style.marginLeft = '0px';
    bannerBox.style.opacity = 1;
    banner_close.style.marginLeft = '-124px';
    banner_close.style.transitionDelay = '0s';
}

