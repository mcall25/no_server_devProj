angular.module('project1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: 'home/home.html'
  })
  .state('times', {
    url: '/times',
    controller: 'timesController',
    templateUrl: 'times/times.html'
  })
  .state('fare', {
    url: '/fare',
    controller: 'fareController',
    templateUrl: 'fare/fare.html'
  })

})
