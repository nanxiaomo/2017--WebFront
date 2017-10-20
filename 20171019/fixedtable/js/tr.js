//固定部を作成、tablesorterの一番左のヘッダーを取得、固定部に張り付ける
    //水平ヘッダー部を作成
    /* var fF = 0;
        $("#tablesorter > thead > tr > th").each(function(i) {
            if (fF < 2) {
                $(this).clone(true).appendTo($("#tableT > thead > tr"));
                StyleCopyB($("#tableT > thead > tr > th").eq(fF), $(this));
                $("#tableT > thead > tr > th").eq(fF).addClass("header");
                fF++;
            } else {
                $(this).clone(true).appendTo($("#tableH > thead > tr"));
                StyleCopyB($("#tableH > thead > tr > th:last"), $(this));
                $("#tableH > thead > tr > th:last").addClass($(this).attr("class"));
            }
        });
        $("#tablesorter > thead > tr").hide();
        $("#tablesorter > tbody > tr").each(function(i) {
            $("#tableV > tbody").append("<tr></tr>");
            for (var fb = 0; fb < 2; fb++) {
                $(this).children().eq(fb).clone(true).appendTo($("#tableV > tbody > tr").eq(i));
                $(this).children().eq(fb).hide();
                StyleCopyB($("#tableV > tbody > tr:last-child > td"), $(this).children().eq(fb));
            }
        });
        StyleCopyA($("#tableT > thead > tr > th:first"), $("#tableV > tbody > tr > td"));*/
       /* $("#tableH > thead > tr > th").each(function(i) {
            $(this).width($("#tablesorter > tbody > tr").children().eq(i + 1).width());
            var me = $("#tableH > thead > tr > th");
            var me1 = $("#tablesorter > thead > tr").children();
            $(this).unbind();
            $(this).click(function() {
                //  $("#tablesorter > thead > tr").children().eq(i+1).trigger("click");
                var e = jQuery.Event("click");
                e.shiftKey = event.shiftKey;
                $("#tablesorter > thead > tr").children().eq(i + 1).trigger(e);

                setTimeout(function() {
                    me.each(function(j) {
                        me.eq(j).attr("class", "");
                        me.eq(j).attr("class", me1.eq(j + 1).attr("class"));
                    });
                }, 1);
            })
        });
        $("#header_h").css("left", $("#tableT").width() + "px");
        $("#data").css("left", $("#tableT").width() + "px");

        $("#header_v").css("top", $("#tableT").height() + "px");
        $("#data").css("top", $("#tableT").height() + "px");

        $("#header_h").width($("#data").width() - 17); //17前後要微調整、垂直スクロールバーの幅....※求め方は不明
        $("#tableH").width($("#tablesorter").width() - $("#tableT").width());
        $("#tablesorter").width($("#tablesorter").width() - $("#tableT").width());

        $("#header_v").height($("#data").height() - 17);

        $("#tableH > thead > tr > th").each(function(i) {
            $(this).width($("#tablesorter > tbody > tr").children().eq(i + 1).width());
        });

        $("#tableV > tbody > tr").each(function(i) {
            $(this).children("td").height($("#tablesorter  tbody tr:nth-child(" + (i + 1) + ")  td:nth-child(2)").height());
        });
        $("#data").on(
            'scroll',
            function() {
                $("#header_h").scrollLeft($("#data").scrollLeft()); // データ部のスクロールをヘッダに反映
                $("#header_v").scrollTop($("#data").scrollTop()); // データ部のスクロールをヘッダに反映
            });
    //--HAO

    //非表示化
    //--HAO


    //垂直ヘッダー部を作成
    //--HAO


    //垂直ヘッダーのwidthを固定部に設定
    //--HAO

    //データ部のwidthを水平ヘッダーに設定
    //--HAO



    //DIVheader-hとDIVdataのleftを設定
    //--HAO


    //DIVheader-vとDIVdataのtopを設定


    //


    //DIVheader-vのheightをDIVdataのheightを設定
    //17前後要微調整は水平スクロールバーの高さ....※17の求め方は不明
    //youkenkin
    //データ部のwidthを水平ヘッダーに設定

    //youkenkin
    //データ部のwidthを水平ヘッダーに設定
    // alert($("#tablesorter  tbody tr:nth-child(1)  td:nth-child(2)").height());
    //alert($("#tablesorter  tbody tr:nth-child(9)  td:nth-child(2)").height());

    //   $("#tableV > tbody > tr:nth-child(9) > td").height($("#tablesorter  tbody tr:nth-child(9)  td:nth-child(2)").height());
    //-------------------------------------------------------------------------------------------------