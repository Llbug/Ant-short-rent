window.onload=function() {
    var btnMoveLeftNode = document.getElementsByClassName("kr_L")[0];
    var btnMoveRightNode = document.getElementsByClassName("kr_R")[0];
    var moveBox = document.getElementsByClassName("kr_wrapper")[0];
//html里面子节点的个数（页数）
    var count = moveBox.children.length;
//第几页 （索引从1开始）
    var clickCount = 1;
//往后、往前动态添加子节点
    moveBox.innerHTML += moveBox.children[0].outerHTML;
    moveBox.innerHTML = moveBox.children[count - 1].outerHTML + moveBox.innerHTML;
//容器可见区域的宽度
    var width = parseInt(moveBox.children[0].style.width);
//显示第一个的话，margin-left要置为负的显示区域的宽度（单位必不可少）
    moveBox.style.marginLeft = "-" + width + "px";
//容器的总宽度
    moveBox.style.width = width * moveBox.children.length + "px";
//按钮现在可以被点
    var flag = true;
//点击左按钮
    btnMoveRightNode.onclick = function () {
        if (flag) {
            flag = false;
            //获取容器的向左偏移的值
            var left = parseFloat(moveBox.style.marginLeft);
            //要显示的是第几页
            clickCount++;
            var interval = setInterval(function () {
                //往左偏移
                left -= 21;
                //本次点击偏移的距离大于width的话
                if (left <= -(width * clickCount)) {
                    //最后一页上继续往左的情况
                    if (clickCount == count + 1) {
                        //当移动结束后，置换动态添加到最后的节点的margin-left值为第一个的margin-left值
                        clickCount = 1;
                        left = "-" + width;
                    } else { //非最后一页往左
                        left = -(width * clickCount);
                    }
                    //赋上移动结束后的margin-left值（普通的和需要置换的）
                    moveBox.style.marginLeft = left + "px";
                    //移动结束后，清除时钟
                    clearInterval(interval);
                    flag = true;
                } else { //本次点击偏移的距离还不到width的话
                    moveBox.style.marginLeft = left + "px";
                }
            }, 10);
        }
    };
    btnMoveLeftNode.onclick = function () {
        if (flag) {
            flag = false;
            var left = parseFloat(moveBox.style.marginLeft);
            clickCount--;
            var interval = setInterval(function () {
                left += 21;
                if (left >= -(width * clickCount)) {
                    if (clickCount == 0) {
                        clickCount = count;
                        left = -width * count;
                    } else {
                        left = -(width * clickCount);
                    }
                    moveBox.style.marginLeft = left + "px";
                    clearInterval(interval);
                    flag = true;
                } else {
                    moveBox.style.marginLeft = left + "px";
                }
            }, 10);
        }
    };
}