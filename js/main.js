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

function menuTrigger() {
  var menuHidden = document.querySelector('.nav-list');
  menuHidden.classList.toggle('active-menu');
}

init();

//CONTADORES

var initialNumber = 0;
  var elementOne = document.querySelector('.stat-number-one');
  var elementTwo = document.querySelector('.stat-number-two-desktop');
  var elementThree = document.querySelector('.stat-number-three-desktop');
  var maxValues = [25,97,60];
  var elements = [elementOne,elementTwo,elementThree];

function counterElement(maxValue,element) {
    var maximum = Math.max.apply(null, maxValue);
    var counterInterval = window.setInterval(function countNumber(){
      var counter = initialNumber++;

      for (var i = 0; i < element.length; i++) {
        if (counter <= maxValue[i]) {
          element[i].innerHTML = counter;
        }
      }
      if (counter > maximum) {
        clearInterval(counterInterval);
      }
  },80);
    return counterInterval;
  }

counterElement(maxValues,elements);
