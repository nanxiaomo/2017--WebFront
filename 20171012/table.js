function tableScroll(){
var ts= document.getElementsByClassName('table-body');
var tt = document.getElementsByClassName('table-header');
var tl = document.getElementsByClassName('table-fixed-body')
tt[0].scrollLeft = ts[0].scrollLeft;
tl[0].scrollTop = ts[0].scrollTop;
tl[1].scrollTop = ts[0].scrollTop;
};

