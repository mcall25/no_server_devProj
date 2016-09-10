angular.module('project1').controller('timesController', function($scope, service) {

  $scope.test3 = "this is going to be my times page";

  $scope.testForTime = 'michaels on time';

 $scope.myData = service.serviceData;
 console.log($scope.myData);


})
