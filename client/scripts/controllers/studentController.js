myApp.controller('StudentController', ['$scope', 'StudentFactory', function($scope, StudentFactory){
  // $scope.studentObject = {};
  // $scope.studentObject.unavailability = [{}];
  $scope.retrievedStudents = [];


  $scope.init = function(){
    console.log("Init Fire!");

    StudentFactory.getData().then(function(){
      $scope.retrievedStudents = StudentFactory.data;
    });
  }

  $scope.init();
}]);
