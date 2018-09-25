var libtns = document.getElementsByClassName('recommendtab');
var libtn = libtns[0].getElementsByTagName('span');
var liview = document.getElementById('recommendview');

libtn[0].onmouseover = function () {
    liview.style.marginLeft = 0 + 'px';
    for (var i = 0; i < libtn.length; i++) {
        libtn[i].className = 'tab';
    }
    this.className = 'tab mouseon';
};
libtn[1].onmouseover = function () {
    liview.style.marginLeft = -1190 + 'px';
    for (var i = 0; i < libtn.length; i++) {
        libtn[i].className = 'tab';
    }
    this.className = 'tab mouseon';
};


var bests = document.getElementsByClassName('best');
var youxuans = document.getElementsByClassName('youxuan');
// console.log(youxuans);
// console.log(bests);
for (i = 0; i < bests.length; i++) {
    bests[i].setAttribute('index', i);
    bests[i].onmouseover = function(){
        for (j = 0; j < youxuans.length; j++) {
            youxuans[j].style.display = 'none';
            var index = this.getAttribute('index');
        }
        youxuans[index].style.display = 'block';
    }
}
for (i = 0; i < bests.length; i++) {
    bests[i].setAttribute('index', i);
    bests[i].onmouseout = function(){
        var index = this.getAttribute('index');
        youxuans[index].style.display = 'none';
    }
}
