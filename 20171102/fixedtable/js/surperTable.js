////////////////////////////////////////////////
// 用于AJAX下特定命名下的table下固定表头，和列的js
// version 2.0.0
// 作者： 王菲
// 日期：2017年11月02日
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
    /* 四个主要部分定义*/
    this.stableT = $('#tableT');
    this.stableH = $('#tableH');
    this.stableV = $('#tableV');
    this.sDataTable =  $("#"+tableId+"");
    /* data部分三个部分*/
    this.sDateBady = $("#"+tableId+" > tbody");
    this.sDataHeader = $("#"+tableId+" > thead");//$('#tablesorter >tbody')
    this.sColGroup = $("#"+tableId+"").find("colgroup");
    /* 固定T部分的宽，高*/
    this.fixwidth = 0;
    this.fixheight = 0;
// clean 清除以前的数据
    var wrap = $("#table-wrapper");
    wrap.width(this.showWitdh);
    wrap.height(this.showHeight);
    /* tableT清除完成*/ 
    this.stableT.children().remove();
    this.stableT.removeAttr("style");
    /* tableH清除完成*/ 
    this.stableH.children().remove();
    this.stableH.removeAttr("style");
    this.stableH.parent().removeAttr("style");
    /* tabletV 清除*/
    this.stableV.children().remove();
    this.stableV.removeAttr("style");
    this.stableV.parent().removeAttr("style");
    /* data 数据清除并且拷贝最小位置*/
    this.sDataTable.removeAttr("style");
    this.sDataTable.parent().removeAttr("style");
    this.sDataTable.css('width', this.showWitdh);
//获得 固定部分的宽，高度。作为固定的一部分
    for (var i = 0; i < this.headerRows; i++) {
      var colsum = 0;
      this.fixheight += this.sDataHeader.children().eq(i).height();
    }
    var sizetd = this.sDataHeader.children().eq(0).children().length;
    for (var j = 0; j < sizetd; j++) {
      var copyreadytdcol = this.sDataHeader.children().eq(0).children().eq(j)[0].colSpan;
      colsum +=copyreadytdcol;
      if (colsum <= this.fixedCols) {
        this.fixwidth +=  parseInt(this.sDataHeader.children().eq(0).children().eq(j).css("width"));
      }
    }  
// 复制三部分的内容 全部为全拷贝
    /*宽度拷贝*/
    this.stableT.css('width', this.sDataTable.width());
    this.stableH.css('width', this.sDataTable.width());
    this.stableV.css('width', this.sDataTable.width());
    /* 拷贝colgroup*/
    this.stableT.prepend(this.sColGroup.clone(true));
    this.stableH.prepend(this.sColGroup.clone(true));
    this.stableV.prepend(this.sColGroup.clone(true));
    /* 拷贝内容*/
    this.sDataHeader.clone().appendTo(this.stableT);
    this.sDataHeader.clone().appendTo(this.stableH);
    this.sDateBady.clone().appendTo(this.stableV);
// 设置位置信息 
    /* top 设置 */
    $("#header_v").css("top", this.fixheight + "px");
    $("#data").css("top", this.fixheight + "px");
    /* left 设置*/ 
    $("#header_h").css("left", this.fixwidth + "px");
    $("#data").css("left", this.fixwidth + "px");
// margin 设置
    this.stableH.css('margin-left', -this.fixwidth);
    this.sDataTable.css('margin-top', -this.fixheight);
    this.sDataTable.css('margin-left', -this.fixwidth);
// 包裹容器的长宽规定*/
    /* tableT 部分 */ 
    $("#header_t").width(this.fixwidth);
    /* tableH 部分 */
    $("#header_h").width(this.showWitdh - this.fixwidth-17);
    /* data 部分 */
    var data = $("#data");
    if(this.sDataTable.height()>this.showHeight){
      data.css("height", this.showHeight - this.fixheight);
      data.css('width', this.showWitdh - this.fixwidth);
    }else{
      wrap.width(this.showWitdh -17);
      data.css("width", wrap.width() - this.fixwidth);
      $("#header_v").css("height", this.sDataTable.height() - this.fixheight);
    }
    /*tableV*/
    $("#header_v").height(data.height()-17);

  $("#data").on(
        'scroll', function () {
          $("#header_h").scrollLeft($("#data").scrollLeft());// データ部のスクロールをヘッダに反映
          $("#header_v").scrollTop($("#data").scrollTop());// データ部のスクロールをヘッダに反映
      });
  // margin 设置
}