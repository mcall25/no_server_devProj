angular.module('project1').controller('homeController', function($scope, service) {

  $scope.test2 = "this is going to be my home page";

  $scope.test3 = function() {
  
      $scope.test4 = service.click();

  }




})
