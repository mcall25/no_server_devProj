angular.module('project1').controller('homeController', function($scope, service) {



  $scope.test3 = function() {
      $scope.test4 = service.click();
  }
})
