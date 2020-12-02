/*
   JavaScript Fundamentals Assignment 01 
   Developed By: Iskander Louafi
   Developed Date:   2020-05-03

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/
"use strict";
function timeEvent() {
   // to create a variable which contains date and time
   let today = new Date();
   // display the current date in the montreal date box 

   document.getElementById("localTime").value = showDate(today) + '    ' + showTime(today);
   document.getElementById("place1").value = houstonTime(today);
   document.getElementById("place2").value = londonTime(today);
   document.getElementById("place3").value = newYorkTime(today);
   document.getElementById("place4").value = seattleTime(today);
   document.getElementById("place5").value = sydneyTime(today);
   document.getElementById("place6").value = tokyoTime(today);
}
// functions Show date & show time to display local (Montreal) date and time
function showDate(param1) {
   let thisDay = param1.getDate();
   let thisMonth = param1.getMonth() + 1;
   let thisYear = param1.getFullYear();

   let currentDate = thisYear + '/' + thisMonth + '/' + thisDay ;
   return currentDate;  
}
function showTime(param2){
   let thisSecond = param2.getSeconds();
   let thisMinute = param2.getMinutes();
   let thisHour = param2.getHours();
   let ampm = '';

   thisHour = (thisHour >= 24) ? (thisHour - 24) : thisHour;
   thisHour = (thisHour > 12) ? (thisHour - 12) : thisHour;
   thisHour = (thisHour < 10) ? ('0' + thisHour) : thisHour;
   thisHour = (thisHour == 0) ? 12 : thisHour;
   ampm = (thisHour < 12) ? ' am' : ' pm';
   thisMinute = (thisMinute < 10) ? ('0' + thisMinute) : thisMinute;
   thisSecond = (thisSecond < 10) ? ('0' + thisSecond) : thisSecond;

   let currentTime = thisHour + ':' + thisMinute + ':' + thisSecond + ampm;
   return currentTime;
}


/**
 * Functions to calculate the local time at each office
 *  */  
// Houston Time
function houstonTime(param3){
   let thisHoustonHours = param3.getHours() - 1;
   let thisHoustonMin = param3.getMinutes();
   let thisHoustonSeconds = param3.getSeconds();
   let ampm = '';

   thisHoustonHours = (thisHoustonHours >= 24) ? (thisHoustonHours - 24) : thisHoustonHours;
   thisHoustonHours = (thisHoustonHours > 12) ? (thisHoustonHours - 12) : thisHoustonHours;
   thisHoustonHours = (thisHoustonHours < 10) ? ('0' + thisHoustonHours) : thisHoustonHours;
   thisHoustonHours = (thisHoustonHours == 0) ? 12 : thisHoustonHours;
   ampm = (thisHoustonHours < 12) ? ' am' : ' pm';
   thisHoustonMin = (thisHoustonMin < 10) ? ('0' + thisHoustonMin) : thisHoustonMin;
   thisHoustonSeconds = (thisHoustonSeconds < 10) ? ('0' + thisHoustonSeconds) : thisHoustonSeconds;

   let currentHouston = thisHoustonHours + ':' + thisHoustonMin + ':' + thisHoustonSeconds +ampm;
   return currentHouston;
}
// London time	
function londonTime(param4){
   let thisLondonHours = param4.getHours() +5;
   let thisLondonMin = param4.getMinutes();
   let thisLondonSeconds = param4.getSeconds();
   let ampm = '';

   
   thisLondonHours = (thisLondonHours >= 24) ? (thisLondonHours - 24) : thisLondonHours;
   thisLondonHours = (thisLondonHours > 12) ? (thisLondonHours - 12) : thisLondonHours;
   thisLondonHours = (thisLondonHours < 10) ? ('0' + thisLondonHours) : thisLondonHours;
   thisLondonHours = (thisLondonHours == 0) ? 12 : thisLondonHours;
   ampm = (thisLondonHours < 12) ? ' am' : ' pm';
   thisLondonMin = (thisLondonMin < 10) ? ('0' + thisLondonMin) : thisLondonMin;
   thisLondonSeconds = (thisLondonSeconds < 10) ? ('0' + thisLondonSeconds) : thisLondonSeconds;

   let currentLondon = thisLondonHours + ':' + thisLondonMin + ':' + thisLondonSeconds +ampm;
   return currentLondon;
}
// New York time
function newYorkTime(param5){
   let thisNewYorkHours = param5.getHours();
   let thisNewYorkMin = param5.getMinutes();
   let thisNewYorkSeconds = param5.getSeconds();
   let ampm = '';

   thisNewYorkHours = (thisNewYorkHours >= 24) ? (thisNewYorkHours - 24) : thisNewYorkHours;
   thisNewYorkHours = (thisNewYorkHours > 12) ? (thisNewYorkHours - 12) : thisNewYorkHours;
   thisNewYorkHours = (thisNewYorkHours < 10) ? ('0' + thisNewYorkHours) : thisNewYorkHours;
   thisNewYorkHours = (thisNewYorkHours == 0) ? 12 : thisNewYorkHours;
   ampm = (thisNewYorkHours < 12) ? ' am' : ' pm';
   thisNewYorkMin = (thisNewYorkMin < 10) ? ('0' + thisNewYorkMin) : thisNewYorkMin;
   thisNewYorkSeconds = (thisNewYorkSeconds < 10) ? ('0' + thisNewYorkSeconds) : thisNewYorkSeconds;
   
   let currentNewYork = thisNewYorkHours + ':' + thisNewYorkMin + ':' + thisNewYorkSeconds + ' ' + ampm;
   return currentNewYork;
}
// Seattle time
function seattleTime(param6){
   let thisSeattleHours = param6.getHours() -3;
   let thisSeattleMin = param6.getMinutes();
   let thisSeattleSeconds = param6.getSeconds();
   let ampm = '';

   thisSeattleHours = (thisSeattleHours >= 24) ? (thisSeattleHours - 24) : thisSeattleHours;
   thisSeattleHours = (thisSeattleHours > 12) ? (thisSeattleHours - 12) : thisSeattleHours;
   thisSeattleHours = (thisSeattleHours < 10) ? ('0' + thisSeattleHours) : thisSeattleHours;
   thisSeattleHours = (thisSeattleHours == 0) ? 12 : thisSeattleHours;
   ampm = (thisSeattleHours < 12) ? ' am' : ' pm';
   thisSeattleMin = (thisSeattleMin < 10) ? ('0' + thisSeattleMin) : thisSeattleMin;
   thisSeattleSeconds = (thisSeattleSeconds < 10) ? ('0' + thisSeattleSeconds) : thisSeattleSeconds;
   
   let currentSeattle = thisSeattleHours + ':' + thisSeattleMin + ':' + thisSeattleSeconds +ampm;
   return currentSeattle;
}
// Sydney time	
function sydneyTime(param7){
   let thisSydneyHours = param7.getHours() + 14;
   let thisSydneyMin = param7.getMinutes();
   let thisSydneySeconds = param7.getSeconds();
   let ampm = '';
   
   thisSydneyHours = (thisSydneyHours >= 24) ? (thisSydneyHours - 24) : thisSydneyHours;
   thisSydneyHours = (thisSydneyHours > 12) ? (thisSydneyHours - 12) : thisSydneyHours;
   thisSydneyHours = (thisSydneyHours < 10) ? ('0' + thisSydneyHours) : thisSydneyHours;
   thisSydneyHours = (thisSydneyHours == 0) ? 12 : thisSydneyHours;
   ampm = (thisSydneyHours < 12) ? ' am' : ' pm';
   thisSydneyMin = (thisSydneyMin < 10) ? ('0' + thisSydneyMin) : thisSydneyMin;
   thisSydneySeconds = (thisSydneySeconds < 10) ? ('0' + thisSydneySeconds) : thisSydneySeconds;
   
   let currentSydney = thisSydneyHours + ':' + thisSydneyMin + ':' + thisSydneySeconds +ampm;
   return currentSydney;
}
// Tokyo time
function tokyoTime(param8){
   let thisTokyoHours = param8.getHours() + 13;
   let thisTokyoMin = param8.getMinutes();
   let thisTokyoSeconds = param8.getSeconds();
   let ampm = '';

   thisTokyoHours = (thisTokyoHours >= 24) ? (thisTokyoHours - 24) : thisTokyoHours;
   thisTokyoHours = (thisTokyoHours > 12) ? (thisTokyoHours - 12) : thisTokyoHours;
   thisTokyoHours = (thisTokyoHours < 10) ? ('0' + thisTokyoHours) : thisTokyoHours;
   thisTokyoHours = (thisTokyoHours == 0) ? 12 : thisTokyoHours;
   ampm = (thisTokyoHours < 12) ? ' am' : ' pm';
   thisTokyoMin = (thisTokyoMin < 10) ? ('0' + thisTokyoMin) : thisTokyoMin;
   thisTokyoSeconds = (thisTokyoSeconds < 10) ? ('0' + thisTokyoSeconds) : thisTokyoSeconds;

   let currentTokyo = thisTokyoHours + ':' + thisTokyoMin + ':' + thisTokyoSeconds +ampm;
   return currentTokyo;
}
// Smooth scrolling
$('#timemap a').on('click', function (event) {

   if (this.hash !== '') {
     event.preventDefault();
     const hash = this.hash;
     $('html, body').animate(
       {
         scrollTop: $(hash).offset().top - 100
       },
       800
     );
   }
 });




