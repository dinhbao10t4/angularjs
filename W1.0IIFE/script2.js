var name = "Teo";
function sayHello(){
  console.log("Hello " + name);
}
(function(window) {
  'use strict';
  var teo = {};
  teo.name = "Teo";
  teo.sayHello = function(){
    console.log("Hello " + teo.name);
  }

  window.teo = teo;
})(window);
