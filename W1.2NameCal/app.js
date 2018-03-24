(function() {
  'use strict';

  angular.module('helloWorld', [])
    // .controller('HelloWorldController', ['$scope', HelloController]);
.controller('HelloWorldController', HelloController);

    HelloController.$inject = ['$scope'];
    function HelloController($scope) {
      $scope.name = "Coursera";
      $scope.picName = "hungry";
      //fed
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

      $scope.clickButton = function(){
        if($scope.picName == 'hungry'){
          $scope.picName = 'fed'
        } else {
          $scope.picName = 'hungry'
        }
      };
    }
}());
