//鼠标移动 显示隐藏
var csjtop = document.getElementById('csjtop');
var white = document.getElementById('white');
csjtop.onmouseenter = function () {
    white.style.display = 'block';
}
csjtop.onmouseleave = function () {
    white.style.display = 'none';
}
// 鼠标点击 显示隐藏
var serve = document.getElementById('serve');
var end = document.getElementById('m2');
var online = document.getElementById('online');
online.onclick = function () {
    serve.style.display = 'block';
};
end.onclick = function () {
    serve.style.display = 'none';
}