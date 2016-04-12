myApp.controller('StudentController', ['$scope', 'StudentFactory', function($scope, StudentFactory){
  $scope.studentObject = {};
  $scope.studentObject.unavailability = [{}];
  $scope.retrievedStudents = [];


  // Posting Student Information to DB
  $scope.submit = function(data){
    var sentData = angular.copy(data); // Creates a copy of the data to be sent that's not connected to the scope of the original data
    StudentFactory.postData(sentData);
    $scope.init();  // I think this is firing before the data gets into the DB..
  }

  $scope.addTimeOffElement = function(){
    console.log("Hit Add Unavailability, yo");
    var newObj = {};
    $scope.studentObject.unavailability.push(newObj);
  }

  $scope.init = function(){
    console.log("Init Fire!");

    StudentFactory.getData().then(function(){
      $scope.retrievedStudents = StudentFactory.data;
      console.log("___________________");
      console.log($scope.retrievedStudents.results);
    });

  }

  $scope.init();
}]);
