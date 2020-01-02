<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=yes, minimum-scale=1.0, maximum-scale=5.0, initial-scale=1.0">
    <title>RECEIPT</title>
    <script type="text/javascript" src="./resources/js/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="./resources/js/jquery-barcode.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css">
	<link rel="stylesheet" type="text/css" href="./resources/css/style.css?ver=4.0">
</head>
<body>
    <%
        request.setCharacterEncoding("UTF-8");
        String authkey = request.getParameter("authKey");
        String frcsId = request.getParameter("frcsId");
        String rcptPosNo = request.getParameter("rcptPosNo");
        String rcptNo = request.getParameter("rcptNo");
        String rcptSaleDt = request.getParameter("rcptSaleDt");

        out.println("<div style='display:none;' class='paramData' id='authKey'>"+authkey+"</div>");

    %>
    <div class="wrapper">
        <div class="receipt_wrap">
            <div class="contents_box">
                <div id="recpImg"></div>
                <div id="recpData"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript">  
        WebFont.load({
            custom: {
                families: ['D2 coding'],
                urls: ['//cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css']
            }
        });
        var authKey = $("#authKey").text();
        var frcsId = "<%=frcsId%>";
        var rcptPosNo = "<%=rcptPosNo%>";
        var rcptNo = "<%=rcptNo%>";
        var rcptSaleDt = "<%=rcptSaleDt%>";
        
        var reqData = {
                "frcsId":frcsId,
                "rcptPosNo":rcptPosNo,
                "rcptNo":rcptNo,
                "rcptSaleDt":rcptSaleDt
        };  
        $.ajax({
            //url: 'https://mdev.h-point.co.kr:29845/ap/apg/selectEltrRcptDtlPtcAdm.shd',
            //url: 'https://mdev.h-point.co.kr:29845/ap/apg/selectEltrRcptDtlPtc.shd',
            url: '/ap/apg/selectEltrRcptDtlPtc.shd',
            headers: {
                authKey: authKey,
                teOpsyGbcd: '01',
                appVer: '2.0.0'
            },
            type:'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(reqData),
            success: function(data) {
                var rcptData = data.reltl.rcptData; // 영수증 데이터
                var posGbcd = data.reltl.posGbcd; // 영수증 구분 코드
                var posGbcdStrNum; // 영수증 구분에 따른 문자열 자르는 숫자값
                var gbnVal; // 앞 5, 7자리 [???] 값
                var barCount = (rcptData.match(/\[BAR]/g) || []).length; // [BAR] 갯수
                var bmpValChk = rcptData.match(/\[BMP]/g); // [BMP] 있는지 체크
		        var barTagCnt = 1;
                var html="";

                posGbcd == "3" ? posGbcdStrNum = 7 : posGbcdStrNum = 5;
                rcptData = rcptData.split('\n');
                for(var i=1; i<rcptData.length; i++){
                    gbnVal = rcptData[i].substring(0, posGbcdStrNum);
                    rcptData[i] = rcptData[i].substring(posGbcdStrNum, rcptData[i].length);
                    if(rcptData[i].indexOf('―') != -1) {
                        html += '<pre class="nocList"></pre>';
                    } else if(gbnVal.indexOf('[NOR]1 ') != -1){
                        html += '<pre class="gbnList1">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]2 ') != -1){
                        html += '<pre class="gbnList2">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]3 ') != -1){
                        html += '<pre class="gbnList3">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]4 ') != -1){
                        html += '<pre class="gbnList4">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]5 ') != -1) {
                        html += '<pre class="gbnList5">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]16') != -1){
                        html += '<pre class="gbnList16">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]17') != -1){
                        html += '<pre class="gbnList17">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]18') != -1){
                        html += '<pre class="gbnList18">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]19') != -1){
                        html += '<pre class="gbnList19">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]20') != -1){
                        html += '<pre class="gbnList20">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[NOR]21') != -1){
                        html += '<pre class="gbnList21">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[VER]') != -1) {
                        html += '<pre class="verList">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[BLD]') != -1) {
                        html += '<pre class="bldList">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[VBL]') != -1) {
                        html += '<pre class="vblList">'+rcptData[i]+'</pre>';
                    } else if(gbnVal.indexOf('[BAR]') != -1) {
                        barCd = rcptData[i].trim();
                        if(barCount < 2) {	
                            html += '<div id="bcTarget"></div>';
                        } else {
                            if(barTagCnt == 1) { 
                                var barCd1 = rcptData[i].trim(); 
                            } else {
                                var barCd2 = rcptData[i].trim();
                            }
                            html += '<div id="bcTarget'+barTagCnt+'"></div>';
                            barTagCnt++;
                        }
                    } else {
                        html += '<pre class="norList">'+rcptData[i]+'</pre>';
                    }
                }

                $("#recpData").append(html);
                if(barCount < 2) {	
                    $("#bcTarget").barcode(barCd, "code128",  {barWidth : 1, barHeight : 30});
                } else {
                    $("#bcTarget1").barcode(barCd1, "code128",  {barWidth : 1, barHeight : 30});
                    $("#bcTarget2").barcode(barCd2, "code128",  {barWidth : 1, barHeight : 30});
                }
                if(bmpValChk && data.reltl.imgUrl) {
                    $("#recpImg").append("<img src='"+data.reltl.imgUrl+"' alt='영수증 명판 이미지'/>");
                }
                $(".paramData").remove();
                $(".receipt_wrap").fadeIn();
            },
            fail: function(error) {
                console.log("========실패======== "+ error);
            },
            always: function(response) {
                console.log("========성공2======== ");
            }
        });
    </script>
</body>
</html>