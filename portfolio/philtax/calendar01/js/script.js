function kCalendar(id, date) {
var kCalendar = document.getElementById(id);

if( typeof( date ) !== 'undefined' ) {
date = date.split('-');
date[1] = date[1] - 1;
date = new Date(date[0], date[1], date[2]);
} else {
var date = new Date();
}
var currentYear = date.getFullYear();
//년도를 구함

var currentMonth = date.getMonth()+1;
//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력

var currentDate = date.getDate();
//오늘 일자.

date.setDate(1);
var currentDay = date.getDay();
//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일
var month = new Array('January','February','March','April','May','June','July','August','September','October','November','December ');
var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )
lastDate[1] = 29;
//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.

var currentLastDate = lastDate[currentMonth-1];
var week = Math.ceil( ( currentDay + currentLastDate ) / 7 );
//총 몇 주인지 구함.

if(currentMonth != 1)
var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;
else
var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;
//만약 이번달이 1월이라면 1년 전 12월로 출력.

if(currentMonth != 12) 
var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;
else
var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;
//만약 이번달이 12월이라면 1년 후 1월로 출력.

/*
if( currentMonth < 10 )
var currentMonth = '0' + currentMonth;
//10월 이하라면 앞에 0을 붙여준다.
*/

/*
function makeStartDate(month)
{
	var temp_Month = now_Month; // 전역변수의 값을 변경하지 않도록 다른변수에 값을 옮겨 넣는다.
	var startDay = now_Day; //시작요일을 저장하는 변수이다. 먼저 기본값으로 현재 요일을 저장한다.
	if(now_Month == month) //만약 시작일의 기준이 되는 달이 현재 달일 경우이다.
	{
		for( ; temp_Month >= 0 ; temp_Month--) //시작값:현지 일자, 끝깞 : 0: 
		{
			startDay--; // -1씩 감소
			if(startDay < 0) //요일은 0부터 6까지 있기 때문에 0미만으로 내려가면 한바퀴, 즉 6으로 되돌아가도록 한다.
			{
				startDay = 6;
			}			
			//이 반복문에서는 현재 진행중인 일 수 만큼 반복문이 진행해야 한다. 
			//그리고 현재 일자가 1일일 경우에는 반복문 수행 필요없이 바로 요일을 구한다.
		}
		return startDay;
	}
	alert("입력받은 월이 당월이 아닙니다.");
}
*/
console.log(currentMonth);
var calendar = '';

calendar += '<div id="header">';
calendar += '			<span class="prev"><a href="#" class="button left" onclick="kCalendar(\'' +  id + '\', \'' + prevDate + '\')"><</a></span>';
calendar += '			<span id="date">' +month[currentMonth-1] +'</span>';
calendar += '			<span class="next"><a href="#" class="button right" onclick="kCalendar(\'' + id + '\', \'' + nextDate + '\')">></a></span>';
calendar += '		</div>';
calendar += '		<table border="0" cellspacing="0" cellpadding="0">';
calendar += '			<caption>' + currentYear + '년 ' + currentMonth + '월 달력</caption>';
calendar += '			<thead>';
calendar += '				<tr>';
calendar += '					<th class="sun" scope="row">일</th>';
calendar += '					<th class="mon" scope="row">월</th>';
calendar += '					<th class="tue" scope="row">화</th>';
calendar += '					<th class="wed" scope="row">수</th>';
calendar += '					<th class="thu" scope="row">목</th>';
calendar += '					<th class="fri" scope="row">금</th>';
calendar += '					<th class="sat" scope="row">토</th>';
calendar += '				</tr>';
calendar += '			</thead>';
calendar += '			<tbody>';

var dateNum = 1 - currentDay;

for(var i = 0; i < week; i++) {
calendar += '			<tr>';

for(var j = 0; j < 7; j++, dateNum++) {
		
		if( dateNum < 1 || dateNum > currentLastDate ) {
		
			calendar += '				<td class="' + dateString[j] + '">'' </td>';
			continue;
	
		}

	
		calendar += '				<td class="' + dateString[j] + '">' + dateNum + '</td>';

}
calendar += '			</tr>';
}

calendar += '			</tbody>';
calendar += '		</table>';

kCalendar.innerHTML = calendar;
}