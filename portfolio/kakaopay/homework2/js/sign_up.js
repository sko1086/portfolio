$(document).ready(function(){
    dateGetVal();
    agreeAreaClick();
    genderBtnClick();
});
function dateGetVal(){ // 년과 월에 따라 마지막 일 구하기
    var start_year="1920";
    var today = new Date();
    var today_year= today.getFullYear();
    var index=0;
    for(var y=today_year; y>=start_year; y--){
        document.getElementById('yyyy').options[index] = new Option(y+"년", y);
        index++;
    }
    index=0;
    for(var m=1; m<=12; m++){
        document.getElementById('mm').options[index] = new Option(m+"월", m);
        index++;
    } 
    var Year=document.getElementById('yyyy').value;
    var Month=document.getElementById('mm').value;
    var day=new Date(new Date(Year,Month,1)-86400000).getDate();
    var dayindex_len=document.getElementById('dd').length;
    if(day>dayindex_len){
        for(var i=(dayindex_len+1); i<=day; i++){
            document.getElementById('dd').options[i-1] = new Option(i+"일", i);
        }
    }
    else if(day<dayindex_len){
        for(var i=dayindex_len; i>=day; i--){
            document.getElementById('dd').options[i]=null;
        }
    }
}
function maxLengthCheck(object){ // 전화번호 maxlength
    if (object.value.length > 8){
        object.value = object.value.slice(0, object.maxLength);
    }    
}
function agreeAreaClick() { // 약관 동의 click
    $(".agree").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).addClass("off");
        } else {
            $(this).removeClass("off");
            $(this).addClass("on");
        }
    });
}
function genderBtnClick() { // 성별 button click
    $(".gender button").click(function(){
        if(!$(this).hasClass("on")){    
            $(".gender button").removeClass("on");
            $(this).addClass("on");
        }
    });
}
