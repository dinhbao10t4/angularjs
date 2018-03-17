(function() {
  'use strict';

  angular.module('helloWorld', [])
  .controller('HelloWorldController', HelloController)
  ;

  function HelloController($scope){
    $scope.name = "Coursera";
  }

}());
