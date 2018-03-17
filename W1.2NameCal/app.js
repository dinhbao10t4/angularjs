(function() {
  'use strict';

  angular.module('helloWorld', [])
  .controller('HelloWorldController', HelloController)
  ;

  function HelloController($scope){
    $scope.name = "";
    $scope.value = 0;

    $scope.displayNum = function(){
      var totalNameValue = 0;
      for (var i = 0; i < $scope.name.length; i++) {
        totalNameValue += $scope.name.charCodeAt(i);
      }

      $scope.value = totalNameValue;
    }
  }

}());
