myApp.controller('StudentController', ['$scope', 'StudentFactory', function($scope, StudentFactory){
  $scope.studentObject = {};
  $scope.studentObject.unavailability = [{}];

  // Posting Student Information to DB
  $scope.submit = function(data){
    StudentFactory.postData(data);
  }

  $scope.addTimeOffElement = function(){
    console.log("Broke everything, yo");
    var newObj = {};
    $scope.studentObject.unavailability.push(newObj);
  }
}]);
