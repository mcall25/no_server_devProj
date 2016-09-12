angular.module('project1').directive('timeDirective', function() {

return {
  restrict: "AE",
  scope: {
    title: '@',
    work: '&'
  },
  link: function(scope, element, atrr) {
    element.on('click', function(element){
      scope.work( {msg: "the time is"});

    })

  },
  templateUrl: "dirtime.html"

}
})
