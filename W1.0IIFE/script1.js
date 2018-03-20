(function(window) {
  'use strict';
  var ti = {};
  ti.name = "Ti";
  ti.sayHi = function sayHi(){
    console.log("Hi " + ti.name);
  }

  window.ti = ti;
})(window);
