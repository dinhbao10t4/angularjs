(function() {
  'use strict';

  angular.module('helloWorld', [])
    .controller('HelloWorldController', HelloController);

  function HelloController($scope) {
    $scope.name = "Coursera";
    $scope.value = calCharCode($scope.name);

    $scope.displayNum = function() {
      $scope.value = calCharCode($scope.name);
    }

    function calCharCode(name) {
      var totalNameValue = 0;
      for (var i = 0; i < name.length; i++) {
        totalNameValue += name.charCodeAt(i);
      }
      return totalNameValue;
    }
  }

}());
