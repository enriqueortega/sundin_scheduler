myApp.controller('StudentController', ['$scope', function($scope){
  $scope.studentObject = {};
  $scope.studentObject.unavailability = [{}];


  $scope.submit = function(data){

    console.log($scope.studentObject);

  }

  $scope.addTimeOffElement = function(){

    console.log("Broke everything, yo");
    var newObj = {};

    $scope.studentObject.unavailability.push(newObj);
  }
}]);
