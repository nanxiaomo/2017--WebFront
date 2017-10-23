/////////////////////////////////////////////////////////////////////////////////////////
// Super Tables v0.30 - MIT Style License
// Copyright (c) 2008 Matt Murphy --- www.matts411.com
//
// Contributors:
// Joe Gallo
/////////////////////////////////////////////////////////////////////////////////////////
////// TO CALL: 
// new superTable([string] tableId, [object] options);
//
////// OPTIONS: (order does not matter )
// cssSkin : string ( eg. "sDefault", "sSky", "sOrange", "sDark" )
// headerRows : integer ( default is 1 )
// fixedCols : integer ( default is 0 )
// colWidths : integer array ( use -1 for auto sizing )
// onStart : function ( any this.variableNameHere variables you create here can be used later ( eg. onFinish function ) )
// onFinish : function ( all this.variableNameHere variables created in this script can be used in this function )
//
////// EXAMPLES:
// var myST = new superTable("myTableId");
//
// var myST = new superTable("myTableId", {
//		cssSkin : "sDefault",
//		headerRows : 1,
//		fixedCols : 2,
//		colWidths : [100, 230, 220, -1, 120, -1, -1, 120],
//		onStart : function () {
//			this.start = new Date();
//		},
//		onFinish : function () {
//			alert("Finished... " + ((new Date()) - this.start) + "ms.");
//		}
// });
//
////// ISSUES / NOTES:
// 1. No quirksmode support (officially, but still should work)
// 2. Element id's may be duplicated when fixedCols > 0, causing getElementById() issues
// 3. Safari will render the header row incorrectly if the fixed header row count is 1 and there is a colspan > 1 in one 
//		or more of the cells (fix available)
/////////////////////////////////////////////////////////////////////////////////////////

var superTable = function (tableId, options) {
/////* Initialize */
	options = options || {}; // options 可以为空

	this.cssSkin = options.cssSkin || ""; //options 指定的css样式 或者默认的css
	this.headerRows = parseInt(options.headerRows || "1"); // 选择头部固定样式，默认为1
	this.fixedCols = parseInt(options.fixedCols || "0");  // 选择侧面固定7样式，默认为0 
	this.colWidths = options.colWidths || []; // 目前不清
	this.initFunc = options.onStart || null;  // 目前还不知道
	this.callbackFunc = options.onFinish || null;  //还不知道
	this.initFunc && this.initFunc();   
	
/////* Create the framework dom */
	this.sBase = document.createElement("DIV");  // 创建了一个新的 <div> 元素：
	this.sFHeader = this.sBase.cloneNode(false); // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sHeader = this.sBase.cloneNode(false);  // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sHeaderInner = this.sBase.cloneNode(false); // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sFData = this.sBase.cloneNode(false); // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sFDataInner = this.sBase.cloneNode(false); // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sData = this.sBase.cloneNode(false); // 拷贝一个<div>元素，仅仅只是一个<div></div> 
	this.sColGroup = document.createElement("COLGROUP"); // 创建一个新的<colgroup>
	
	this.sDataTable = document.getElementById(tableId); // 获得 tableId数据表的元素
	this.sDataTable.style.margin = "0px"; // 设置了margin值，目前还不知道干什么的。
	if (this.cssSkin !== "") { // 如果cssSkin未设置，给其基础表添加样式为设置样式
		this.sDataTable.className += " " + this.cssSkin;
	}
	if (this.sDataTable.getElementsByTagName("COLGROUP").length > 0) {
		this.sDataTable.removeChild(this.sDataTable.getElementsByTagName("COLGROUP")[0]); /* 这里没有他理解，是删除第一个<colgroup> */
	}
	this.sParent = this.sDataTable.parentNode; // 获得数据元素的父元素
	this.sParentHeight = this.sParent.offsetHeight; // 获得数据父级元素的像素高度;
	this.sParentWidth = this.sParent.offsetWidth; // 获得父元素的像素宽度
	
/////* 为元素添加类名 */
	this.sBase.className = "sBase";
	this.sFHeader.className = "sFHeader";
	this.sHeader.className = "sHeader";
	this.sHeaderInner.className = "sHeaderInner";
	this.sFData.className = "sFData";
	this.sFDataInner.className = "sFDataInner";
	this.sData.className = "sData";
	
/////* 这里为固定头部的数据为新的表头克隆数据表数据 */
	var alpha, beta, touched, clean, cleanRow, i, j, k, m, n, p;
	this.sHeaderTable = this.sDataTable.cloneNode(false); // 克隆一个固定头部
	if (this.sDataTable.tHead) {  // 判断是表头，还是表体
		alpha = this.sDataTable.tHead;
		this.sHeaderTable.appendChild(alpha.cloneNode(false));
		beta = this.sHeaderTable.tHead;
	} else {
		alpha = this.sDataTable.tBodies[0];
		this.sHeaderTable.appendChild(alpha.cloneNode(false));
		beta = this.sHeaderTable.tBodies[0];
	}
	alpha = alpha.rows; // 获得表头或者表头或者表身中的tr数目;
	for (i=0; i<this.headerRows; i++) {
		beta.appendChild(alpha[i].cloneNode(true)); // 这里注意这是一个浅拷贝，指向共同的区域
	}
	this.sHeaderInner.appendChild(this.sHeaderTable);
	
	if (this.fixedCols > 0) {
		this.sFHeaderTable = this.sHeaderTable.cloneNode(true); // sFHeaderTable 拷贝 sHeaderInner
		this.sFHeader.appendChild(this.sFHeaderTable); // 插入到sFHeader中 
		this.sFDataTable = this.sDataTable.cloneNode(true); // sFDataTable 拷贝数据表
		this.sFDataInner.appendChild(this.sFDataTable); // 插入到 sFDataInner中
	}
	
/////* 设置 colGroup */
	alpha = this.sDataTable.tBodies[0].rows;
	for (i=0, j=alpha.length; i<j; i++) {
		clean = true;
		for (k=0, m=alpha[i].cells.length; k<m; k++) {
			if (alpha[i].cells[k].colSpan !== 1 || alpha[i].cells[k].rowSpan !== 1) {
				i += alpha[i].cells[k].rowSpan - 1;
				clean = false;
				break;
			}
		}
		if (clean === true) break; /* A row with no cells of colSpan > 1 || rowSpan > 1 has been found */
	}
	cleanRow = (clean === true) ? i : 0; /* Use this row index to calculate the column widths */
	try{
		for (i=0, j=alpha[cleanRow].cells.length; i<j; i++) {
		if (i === this.colWidths.length || this.colWidths[i] === -1) {
			this.colWidths[i] = alpha[cleanRow].cells[i].offsetWidth;
		}
	}
	}catch (msg) {

	}
	
	
	for (i=0, j=this.colWidths.length; i<j; i++) {
		this.sColGroup.appendChild(document.createElement("COL"));
		this.sColGroup.lastChild.setAttribute("width", this.colWidths[i]);
	}
	this.sDataTable.insertBefore(this.sColGroup.cloneNode(true), this.sDataTable.firstChild);
	this.sHeaderTable.insertBefore(this.sColGroup.cloneNode(true), this.sHeaderTable.firstChild);
	if (this.fixedCols > 0) {
		this.sFDataTable.insertBefore(this.sColGroup.cloneNode(true), this.sFDataTable.firstChild);
		this.sFHeaderTable.insertBefore(this.sColGroup.cloneNode(true), this.sFHeaderTable.firstChild);
	}
	
/////* Style the tables individually if applicable */
	if (this.cssSkin !== "") {
		this.sDataTable.className += " " + this.cssSkin + "-Main";
		this.sHeaderTable.className += " " + this.cssSkin + "-Headers";
		if (this.fixedCols > 0) {
			this.sFDataTable.className += " " + this.cssSkin + "-Fixed";
			this.sFHeaderTable.className += " " + this.cssSkin + "-FixedHeaders";
		}
	}
	
/////* 添加所有的去 sBase */
	if (this.fixedCols > 0) {
		this.sBase.appendChild(this.sFHeader);
	}
	this.sHeader.appendChild(this.sHeaderInner);
	this.sBase.appendChild(this.sHeader);
	if (this.fixedCols > 0) {
		this.sFData.appendChild(this.sFDataInner);
		this.sBase.appendChild(this.sFData);
	}
	this.sBase.appendChild(this.sData);
	this.sParent.insertBefore(this.sBase, this.sDataTable);
	this.sData.appendChild(this.sDataTable);
	
/////* Align the tables */
	var sDataStyles, sDataTableStyles;
	try {//有数据的时候执行的代码
    	this.sHeaderHeight = this.sDataTable.tBodies[0].rows[(this.sDataTable.tHead) ? 0 : this.headerRows].offsetTop;
    	$(".fakeContainer").removeClass("my_width");   	
		sDataStyles += "height: " + (this.sParentHeight-53) + "px;";//更改滚动条的位置
	} catch (e) {//无数据或者无权限的时候执行的代码
		$(".fakeContainer").removeClass("fakeContainer");
		//$(".first_div").addClass("my_width");
		$("#my_div div").removeClass();
		$("#my_div div div:nth-child(1)").remove();
		$("#my_div div div:nth-child(2)").remove();
		$("#my_div div div:nth-child(3)").remove();
		$("#my_div div div:nth-child(4)").remove();
		$("#demoTable th").css("min-width","0");
		$("#sj").css("display","block");						
		$("#my_div").css("overflow-x","scroll");
		$(".page-header").css("display","none");	
				
		$("#qx").css("display","block");
		//$("#qx").addClass("my_width");
		var id = $(".my_table").attr('id');
		//console.log(id);					 
		var width = $("#my_div").width();
		$("#" + id ).css("width",width+"px ");	//加上此处解决ie浏览器查看问题	
		sDataStyles += "height: " + (this.sParentHeight+17) + "px;";//更改滚动条的位置
	}	
	sDataTableStyles = "margin-top: " + (this.sHeaderHeight * -1) + "px;";
	sDataStyles = "margin-top: " + this.sHeaderHeight + "px;";
		
	if (this.fixedCols > 0) {		
		/* A collapsed table's cell's offsetLeft is calculated differently (w/ or w/out border included) across broswers - adjust: */
		this.sFHeaderWidth = this.sDataTable.tBodies[0].rows[cleanRow].cells[this.fixedCols].offsetLeft;
		if (window.getComputedStyle) {
			alpha = document.defaultView;
			beta = this.sDataTable.tBodies[0].rows[0].cells[0];
			if (navigator.taintEnabled) { /* If not Safari */
				this.sFHeaderWidth += Math.ceil(parseInt(alpha.getComputedStyle(beta, null).getPropertyValue("border-right-width")) / 2);
			} else {
				this.sFHeaderWidth += parseInt(alpha.getComputedStyle(beta, null).getPropertyValue("border-right-width"));
			}
		} else if (/*@cc_on!@*/0) { /* Internet Explorer */
			alpha = this.sDataTable.tBodies[0].rows[0].cells[0];
			beta = [alpha.currentStyle["borderRightWidth"], alpha.currentStyle["borderLeftWidth"]];
			if(/px/i.test(beta[0]) && /px/i.test(beta[1])) {
				beta = [parseInt(beta[0]), parseInt(beta[1])].sort();
				this.sFHeaderWidth += Math.ceil(parseInt(beta[1]) / 2);
			}
		}
		
		/* Opera 9.5 issue - a sizeable data table may cause the document scrollbars to appear without this: */
		if (window.opera) {
			this.sFData.style.height = this.sParentHeight + "px";
		}
		
		this.sFHeader.style.width = this.sFHeaderWidth + "px";
		sDataTableStyles += "margin-left: " + (this.sFHeaderWidth * -1) + "px;";
		sDataStyles += "margin-left: " + this.sFHeaderWidth + "px;";
		sDataStyles += "width: " + (this.sParentWidth - this.sFHeaderWidth) + "px;";
	} else {
		sDataStyles += "width: " + this.sParentWidth + "px;";
	}
	this.sData.style.cssText = sDataStyles;
	this.sDataTable.style.cssText = sDataTableStyles;
	
/////* Set up table scrolling and IE's onunload event for garbage collection */
	(function (st) {
		if (st.fixedCols > 0) {
			st.sData.onscroll = function () {
				st.sHeaderInner.style.right = st.sData.scrollLeft + "px";
				st.sFDataInner.style.top = (st.sData.scrollTop * -1) + "px";
			};
		} else {
			st.sData.onscroll = function () {
				st.sHeaderInner.style.right = st.sData.scrollLeft + "px";
			};
		}
		if (/*@cc_on!@*/0) { /* Internet Explorer */
			window.attachEvent("onunload", function () {
				st.sData.onscroll = null;
				st = null;
			});
		}
	})(this);
	
	this.callbackFunc && this.callbackFunc();
};


/////////////////////////////////////////////////////////////////////////////////////////

// Super Tables Plugin for jQuery - MIT Style License

// Copyright (c) 2009 Jeffrey Lee --- blog2.darkthread.net

//

// A wrapper for Matt Murphy's Super Tables http://www.matts411.com/post/super_tables/

//

// Contributors:

//

/////////////////////////////////////////////////////////////////////////////////////////

////// TO CALL: 

// $("...").toSuperTable(options)

//

////// OPTIONS: (order does not matter )

// cssSkin : string ( eg. "sDefault", "sSky", "sOrange", "sDark" )

// headerRows : integer ( default is 1 )

// fixedCols : integer ( default is 0 )

// colWidths : integer array ( use -1 for auto sizing )

// onStart : function ( any this.variableNameHere variables you create here can be used later ( eg. onFinish function ) )

// onFinish : function ( all this.variableNameHere variables created in this script can be used in this function )

// margin, padding, width, height, overflow...: Styles for "fakeContainer"

//

////// Example:

// $("#GridView1").toSuperTable(

//              { width: "640px", height: "480px", fixedCols: 2,

//                onFinish: function() { alert('Done!'); } })



/*(function($) {

    $.fn.extend(

            {

                toSuperTable: function(options) {

                    var setting = $.extend(

                    {

                        width: "640px", height: "320px",

                        margin: "10px", padding: "0px",

                        overflow: "hidden", colWidths: undefined,

                        fixedCols: 0, headerRows: 1,

                        onStart: function() { },

                        onFinish: function() { },

                        cssSkin: "sSky"

                    }, options);

                    return this.each(function() {

                        var q = $(this);

                        var id = q.attr("id");

                        q.removeAttr("style").wrap("<div id='" + id + "_box'></div>");



                        var nonCssProps = ["fixedCols", "headerRows", "onStart", "onFinish", "cssSkin", "colWidths"];

                        var container = $("#" + id + "_box");



                        for (var p in setting) {

                            if ($.inArray(p, nonCssProps) == -1) {

                                container.css(p, setting[p]);

                                delete setting[p];

                            }

                        }



                        var mySt = new superTable(id, setting);



                    });

                }

            });

})(jQuery);*/