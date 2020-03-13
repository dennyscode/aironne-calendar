console.log(">>> starting aironne-calendar <<<")
import { show_calendar, options, show_next_month } from "./js/aironne";
require("./css/styles.css")
console.log(options)
show_calendar(options);
let calendar_nextbutton = document.querySelector("#calendar_but_nextmonth");
calendar_nextbutton.addEventListener("click", show_next_month, false);
let calendar_prevbutton = document.querySelector("#calendar_but_prevmonth");
calendar_prevbutton.addEventListener("click", show_prev_month, false);
let calendar_view4days = document.querySelector("#calendar_but_view4day")
calendar_view4days.addEventListener("click", function() {show_view_4days(date), false})
let calendar_view4days_next = document.querySelector("#calendar_but_view4day_next")
calendar_view4days_next.addEventListener("click", function() {console.log(date);date=new Date(date.setDate(date.getDate()+1)); show_view_4days(date)}, false);
let calendar_view4days_prev = document.querySelector("#calendar_but_view4day_prev")
calendar_view4days_prev.addEventListener("click", function() {date=new Date(date.setDate(date.getDate()-1)); show_view_4days(date)}, false);

