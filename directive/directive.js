angular.module('project1')
.directive('dmHeader', function() {

  return {
    restrict: 'AE',
    scope: {
      title: '@',
      foo: '&'
    },
    link: function(scope, element, attributes) {
      scope.timer = new Date();

      element.on('click', function(event) {
        scope.foo({msg: new Date()});

      })
    },
    templateUrl: './views/dmHeader.html',
    controller: function($scope) {
      $scope.test = 'CLICKED!';
    }
  }
})
