'use strict';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//MENU TRIGGER

function init(){
  var menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', menuTrigger);
}

function menuTrigger(){
  var menuHidden = document.querySelector('.nav-list');
  menuHidden.classList.toggle('active');
}

init();


//CALCULATOR
var hoursInput = document.querySelector('#hours-input');
var buttonCalc = document.querySelector('#submit-input');

buttonCalc.addEventListener('click',calculator);

function calculator() {
  var hours = hoursInput.value;
  var numberHours = parseInt(hours);
  if ()
}
