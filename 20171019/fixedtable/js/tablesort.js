/* 赋值函数 保证内容正确*/
function copycontent(roWNumber) {
    var tableT = $('#tableT > thead > tr ');
    var tsorterTH = $('#tablesorter > thead > tr');
    var tsorterTB = $('#tablesorter > tbody > tr');
    var tableH = $('#tableH > thead > tr ');
    var tableV = $('#tableV > tbody');
    var copyreadyT = tsorterTH.children().slice(0, roWNumber).clone(true);
    copyreadyT.appendTo(tableT);
    var copyreadyH = tsorterTH.children().slice(roWNumber).clone(true);
    copyreadyH.appendTo(tableH);
    var thsize = tsorterTH.children().size();
    tsorterTB.each(function(i) {
        tableV.append("<tr></tr>");
        for (var fb = 0; fb < roWNumber; fb++) {
            $(this).children().eq(fb).clone(true).appendTo(tableV.children().eq(i));
        }
    });
}
function position() {
    var tableT = $("#tableT");
    var tableV = $("#header_v");
    var tableH = $("#header_h");
    var data = $("#data");
    tableH.css("left", tableT.width() + "px");
    data.css("left", tableT.width() + "px");

    //DIVheader-vとDIVdataのtopを設定
    tableV.css("top", tableT.height() + "px");
    data.css("top", tableT.height() + "px");
}
function setstyle(roWNumber) {
    var tableT = $('#tableT > thead > tr ');
    var tsorterTH = $('#tablesorter > thead > tr');
    var tsorterTB = $('#tablesorter > tbody > tr');
    var tableH = $('#tableH > thead > tr ');
    var tableV = $('#tableV > tbody> tr');
    var st = tsorterTH.children().size();
    tsorterTH.each(function(i) {
        for (var fb = 0; fb < st; fb++) {
            if (fb < roWNumber) {
                StyleCopyA(tableT.children().eq(fb),tsorterTH.children().eq(fb));
                StyleCopyB(tableT.children().eq(fb),tsorterTH.children().eq(fb));
            }else {
                var ss = fb - roWNumber;
                StyleCopyA(tableH.children().eq(ss),tsorterTH.children().eq(fb));
                StyleCopyB(tableH.children().eq(ss),tsorterTH.children().eq(fb));
            }
        }
    });

}
function setheight() {
    var tsorterTHheight = $('#tablesorter > thead > tr').height();
    var tsorterTB = $('#tablesorter > tbody > tr');
    var tableT = $('#tableT > thead > tr ');
    var tableH = $('#tableH > thead > tr ');
    var tableV = $('#tableV > tbody> tr');
    tableT.height(tsorterTHheight);
    tableH.height(tsorterTHheight);
    var tsorterTB = $('#tablesorter > tbody > tr');
    tableV.each(function(i) {
        tableV.eq(i).children().first().height(tsorterTB.eq(i).children().first().height());
    });
     $("#header_v").height($("#data").height()-17);
}
function hide(roWNumber) {
    var tsorterT = $('#tablesorter > thead > tr');
    var tableV = $('#tableV > tbody> tr');
    tsorterT.hide();
    var tsorterTB = $('#tablesorter > tbody > tr');
    var s = tsorterTB.size();
    tsorterTB.each(function(i) {
        for (var fb = 0; fb < s; fb++) {
            if (fb < roWNumber) {
                $(this).children().eq(fb).hide();
            }else {
                $(this).children().eq(fb).height(tableV.eq(i).children().first().height());
            }
        }

    });
}

/* 测试排序函数*/
function testee3() {
        var e = jQuery.Event("click");
        e.shiftKey = event.shiftKey;
        $("#tablesorter > thead > tr").children().eq(3).trigger(e);
};
/*测试排序函数*/
function testee() {
        var e = jQuery.Event("click");
        e.shiftKey = event.shiftKey;
        $("#tablesorter > thead > tr").children().eq(2).trigger(e);

};
/* 拷贝样式函数-- width*/
function StyleCopyA($copyTo, $copyFrom) {
        $copyTo.width(
            $copyFrom.css("width"));
}
/* 拷贝样式函数-- 其他样式*/
function StyleCopyB($copyTo, $copyFrom) {
        $copyTo.css("height",
            $copyFrom.css("height"));

        $copyTo.css("font-size",
            $copyFrom.css("font-size"));

        $copyTo.css("background-color",
            $copyFrom.css("background-color"));
        $copyTo.css("vertical-align",
            $copyFrom.css("vertical-align"));

        $copyTo.css("border-top-width",
            $copyFrom.css("border-top-width"));
        $copyTo.css("border-top-color",
            $copyFrom.css("border-top-color"));
        $copyTo.css("border-top-style",
            $copyFrom.css("border-top-style"));

        $copyTo.css("border-left-width",
            $copyFrom.css("border-left-width"));
        $copyTo.css("border-left-color",
            $copyFrom.css("border-left-color"));
        $copyTo.css("border-left-style",
            $copyFrom.css("border-left-style"));

        $copyTo.css("border-right-width",
            $copyFrom.css("border-right-width"));
        $copyTo.css("border-right-color",
            $copyFrom.css("border-right-color"));
        $copyTo.css("border-right-style",
            $copyFrom.css("border-right-style"));

        $copyTo.css("border-bottom-width",
            $copyFrom.css("border-bottom-width"));
        $copyTo.css("border-bottom-color",
            $copyFrom.css("border-bottom-color"));
        $copyTo.css("border-bottom-style",
            $copyFrom.css("border-bottom-style"));
        //
}

/* 总函数*/
$(document).ready(function() {
     copycontent(2);
     position();
     setstyle(2);
     setheight();
     hide(2);
      $("#data").on(
        'scroll', function () {
          $("#header_h").scrollLeft($("#data").scrollLeft());// データ部のスクロールをヘッダに反映
          $("#header_v").scrollTop($("#data").scrollTop());// データ部のスクロールをヘッダに反映
      });
});


    