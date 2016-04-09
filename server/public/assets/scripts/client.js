console.log("hi thar");
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/students', {
      templateUrl: '/views/routes/students.html',
      controller: 'StudentController'
    }).
    when('/events', {
      templateUrl: '/views/routes/events.html',
      controller: 'EventController'
    }).
    otherwise({
      redirectTo: 'events'
    });
}]);
