console.log(">>> starting aironne-calendar <<<")
import { Aironne } from "./js/aironne";
let aironne = Aironne;
console.log(aironne);
require("./css/styles.css")
let calendar_masterbutton = document.querySelector("#calendar_but_master");
calendar_masterbutton.addEventListener("click", function() {console.log("huhu")}, false);
// let calendar_nextbutton = document.querySelector("#calendar_but_nextmonth");
// calendar_nextbutton.addEventListener("click", show_next_month, false);
// let calendar_prevbutton = document.querySelector("#calendar_but_prevmonth");
// calendar_prevbutton.addEventListener("click", show_prev_month, false);
// let calendar_view4days = document.querySelector("#calendar_but_view4day")
// calendar_view4days.addEventListener("click", function() {show_view_4days(date), false})
// let calendar_view4days_next = document.querySelector("#calendar_but_view4day_next")
// calendar_view4days_next.addEventListener("click", function() {console.log(date);date=new Date(date.setDate(date.getDate()+1)); show_view_4days(date)}, false);
// let calendar_view4days_prev = document.querySelector("#calendar_but_view4day_prev")
// calendar_view4days_prev.addEventListener("click", function() {date=new Date(date.setDate(date.getDate()-1)); show_view_4days(date)}, false);
