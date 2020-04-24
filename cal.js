"use strict"
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let numDay = date.getDate();
let nameDay = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let Month = month;
let Year = year;
let initial;
let addweek;

createTable();
valForSixWeek(month);
initVal();
let test = createNumDay(year, month, initial );
assignVal();
title();


// click function handler
function left() {
month--;
if (month < 0) {
	month = 11;
	year--;
}
valForSixWeek(month);
initVal(); 
test = createNumDay(year, month, initial );
assignVal();
title();
styleNumOfMon(month, initial);
highlightTodayDay(numDay);
}
//click function handler
function right() {
month++;
if (month > 11) {
	month = 0;
	year++;
}
 valForSixWeek(month);
 initVal();
 test = createNumDay(year, month, initial );
 assignVal();
 title();
 styleNumOfMon(month, initial);
 highlightTodayDay(numDay);
}

//return initial value for first element of table
// and checks if necessary sixth week
function initVal() {
	let date = new Date(year, month, 1)
    let dayOfWeek = date.getDay();
    let arr = [-5, 1, 0, -1, -2, -3, -4];
    initial = arr[dayOfWeek];
    let calenDar = document.getElementById('calendar');
     	if(calenDar.children[6]) {
     		calenDar.children[6].remove();
     	}
     else {
     	if (dayOfWeek == 0addweek>30 || dayOfWeek == 6&&addweek>30) {
     	addWeek();
      }
    }
  }

//create new 'tr' element
function createElementTr() {
	let calenDar = document.getElementById('calendar');
	let tr = document.createElement('tr');
	calenDar.append(tr);
}
//create new 'td' element
function createElementTd(i){
	let calenDar = document.getElementById('calendar');
	let tr = calenDar.childNodes[i];
				for (let b = 0;b<=6;b++){
					let td = document.createElement('td');
					tr.append(td);
	}
}
//generate table
function createTable() {
	let calenDar = document.getElementById('calendar');
		for (let i = 0; i <6; i++) {
			createElementTr();
				if (i == 0) {
					for(let j = 0;j<=6;j++) {
						let th = document.createElement('th');
						th.innerHTML = calledDay(j);
						let tr = calenDar.childNodes[0];
						tr.append(th);
						}
					}
					else createElementTd(i);	
	}
}
 
//returning current day of week 
function calledDay(val) {
	let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ','СБ', 'НД']
		return days[val]; 
	}
//returning current name of month
function currentMonth() {
	let monthes = ['Січень','Лютий','Березень','Квітень','Травень','Червень',
	'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
	return monthes[month];
}
//show current month and year
function title() {
	let nameMonth = document.getElementById('nameMonth');
	let nameYear = document.getElementById('nameYear');
	nameMonth.innerHTML = currentMonth();
	nameYear.innerHTML = year;
}
//assigning number of month and style on current day
function assignVal() {
	let td = document.querySelectorAll('td');
	td.forEach(item => item.innerHTML = test());
	}
	
// return function that generate value days of month

 function createNumDay(year, month, dayMonth) {
 	let elem ;
 	return function () {
 		let date = new Date(year, month, dayMonth)
 	let day = date.getDay();
 	let num = date.getDate();
 		elem = num;
 		dayMonth++;
 		return elem;
 	}
 }
function highlightTodayDay(num) {
	let arr = document.querySelectorAll('td');
	for(let td of arr) { 
		if (td.innerHTML==num&&Month==month&&Year==year){
			td.style.border ='1px solid red'
	    }
	else td.style.border ='none'
	}
}
highlightTodayDay(numDay);
  
//asign styles for days previus and next month
 function styleNumOfMon(mon, initial) {
 	mon++
 	let f = new Date ( year, mon, 0);
 	let a = f.getDate();
 	let b = document.querySelectorAll("td");
 	let d;
    for(let td of b) {
    	td.style.color = '';
    }
        switch(initial) {
    	case -5:
    	d = 6;
    	 break;
    	 case -4:
    	d = 5;
    	 break;
    	 case -3:
    	d = 4;
    	 break;
    	 case -2:
    	d = 3;
    	 break;
    	 case -1:
    	d =  2;
    	 break;
    	 case 0:
    	d =  1;
    	 break;
		case 1:
    	d = 0;
    	 break;
    	}
    	for (let i = 0;i<=b.length-1;i++) {
    		// console.log(i);
    		if(i>=d&&i<a+d) continue;
    		b[i].style.color = ('silver');
    	}  	
}
  styleNumOfMon(month, initial);

  function addWeek() {
  	createElementTr();
  	createElementTd(6)
  }


 function valForSixWeek(mon) {
 	mon++
 	let f = new Date ( year, mon, 0);
 	let a = f.getDate();
 	addweek=a;
 }
  back.onclick = left;
  forward.onclick = right;

  // function eventKey(event) {
  // 	if(event.code = 'ArrowLeft') left(); 
  // }
  // back.addEventListener('keydown', eventKey);
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
           left();
            break;
        case 39:
            right();
            break;
    }
};
