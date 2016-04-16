myApp.controller('StudentController', ['$scope', 'StudentFactory', function($scope, StudentFactory){
  // $scope.studentObject = {};
  // $scope.studentObject.unavailability = [{}];
  $scope.retrievedStudents = [];

  $scope.init = function(){
    StudentFactory.getData().then(function(){
      $scope.retrievedStudents = StudentFactory.data;
    });
  }

  $scope.init();
}]);
