////////////////////////////////////////////////
// 用于AJAX下特定命名下的table下固定表头，和列的js
// 作者： 王菲
// 日期：2017年10月25日
// 步骤：
// 1. 清除以前对表格的改变
// 2. 内容拷贝
// 3. 位置设置
// 4. 宽度设置
// 5. margin值设定
// ////////////////////////////////////////////////
// 拷贝宽度函数
function StyleCopyA($copyTo, $copyFrom) {
        $copyTo.css("width",
            $copyFrom.css("width"));
        $copyTo.css("height",
            $copyFrom.css("height"));
}
///////////////////////////////////////////////
var superTable = function (tableId, options) {
// 设置参数有参考数据表的id，还有需要固定的行和头部
// headerRows 固定的头部数目
// fixedCols  固定的列的数目
  options = options || {};
  this.headerRows = parseInt(options.headerRows || "1");
  this.fixedCols = parseInt(options.fixedCols || "0");
  this.showWitdh = parseInt(options.showWitdh || "1000");
  this.showHeight = parseInt(options.showHeight || "300");
// variable 定义变量
    this.stableT = $('#tableT > thead');
    this.stableH = $('#tableH > thead');
    this.stableV = $('#tableV > tbody');
    this.sDateBady = $("#"+tableId+" > tbody");
    this.sDataHeader = $("#"+tableId+" > thead");//('#tablesorter >tbody')
    this.sDataTable =  $("#"+tableId+"");
    this.sColGroup = $("#"+tableId+"").find("colgroup");
// clean 清除以前的数据
    var wrap = $("#table-wrapper");
    wrap.width(this.showWitdh);
    wrap.height(this.showHeight);
    this.stableT.children().remove();//tableT清除完成
    this.stableT.parent().width(0).removeAttr("style");
    this.stableH.children().remove();
    this.stableH.parent().removeAttr("style");
    this.stableH.parent().parent().removeAttr("style");
    this.stableV.children().remove();
    this.stableV.parent().removeAttr("style");
    this.stableV.parent().parent().removeAttr("style");
    this.sDataTable.removeAttr("style");
    this.sDataTable.parent().removeAttr("style");
    this.stableV.parent().find('colgroup').remove();
    this.sDataTable.css('width', this.showWitdh);
    /*this.sDataTable.css("height", this.showHeight);*/
// 内容拷贝
    var copyreadytd,st,sh;
    var twidth = 0;
    // 复制F复制数据中的固定行；
    var sizetd = this.sDataHeader.children().eq(0).children().length;// 获得总共的列数
    for (var i = 0; i < this.headerRows; i++) {
    this.stableT.append('<tr></tr>'); // 添加元素
    this.stableH.append('<tr></tr>'); // 添加元素
        for (var j = 0; j < sizetd; j++) {
          copyreadytd = this.sDataHeader.children().eq(i).children().eq(j).clone(false);
          if (j< this.fixedCols) {
              st = this.stableT.children().eq(i);
                 copyreadytd.appendTo(st);
                 StyleCopyA(st.children().eq(j), this.sDataHeader.children().eq(i).children().eq(j));
                twidth +=  this.sDataHeader.children().eq(i).children().eq(j).width();
          }else{
            sh = this.stableH.children().eq(i);
                 copyreadytd.appendTo(sh);
                 StyleCopyA(sh.children().eq(j-this.fixedCols), this.sDataHeader.children().eq(i).children().eq(j));
          }
        }  // 拷贝元素，复制宽度
    }

    // 拷贝固定列 为全部拷贝
    this.sDateBady.children().clone().appendTo(this.stableV);
    this.stableV.parent().css("width", this.showWitdh);
    // 拷贝colgroup 到tablev
    this.stableV.parent().prepend(this.sColGroup.clone(true));
    // 位置设置
      var tablet = $("#tableT");
      tablet.width(twidth/this.headerRows);
      $("#header_h").css("left", tablet.width() + "px");
      $("#data").css("left", tablet.width() + "px");
      $("#header_v").css("top", $("#tableT").height() + "px");
      $("#data").css("top", $("#tableT").height() + "px");

      //变化表格

      var data = $("#data");


      $("#header_h").width(wrap.width() - tablet.width()-17);
      if(this.sDataTable.height()>this.showHeight){
        data.css("height", wrap.height() - tablet.height());
        data.css('width', wrap.width() - tablet.width());
      }else{
        wrap.width(this.showWitdh -17);
        data.css("height", this.sDataTable.height());
        data.css("width", wrap.width() - tablet.width());
      }

      this.stableH.parent().width(wrap.width()-tablet.width());
      this.stableH.parent().height(this.showHeight-tablet.height()-17);
      //DIVheader-vのheightをDIVdataのheightを設定
      $("#header_v").height($("#data").height()-17);

  $("#data").on(
        'scroll', function () {
          $("#header_h").scrollLeft($("#data").scrollLeft()
          );// データ部のスクロールをヘッダに反映
          $("#header_v").scrollTop($("#data").scrollTop());// データ部のスクロールをヘッダに反映
      });
  // margin 设置
  var wt =$("#tableT").width();
  var wh =$("#tableT").height();
    this.sDataTable.css('margin-top', -wh);
    this.sDataTable.css('margin-left', -wt+1);

}