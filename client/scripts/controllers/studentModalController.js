var studentID;

myApp.controller('StudentModalController', ['$scope', '$uibModal', function($scope, $uibModal){

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/templates/createStudentModal.html',
      controller: 'StudentModalInstance',
      size: "lg"
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    });
  };

  $scope.openDelete = function(id) {
    studentID = id; // Pulls student id attached to button and stores it globally
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/templates/deleteStudentRecord.html',
      controller: 'StudentModalInstance',
      size: 'sm'
    });
  }
}]);

myApp.controller('StudentModalInstance', ['$scope', '$uibModalInstance', 'StudentFactory', function ($scope, $uibModalInstance, StudentFactory) {

  $scope.studentObject = {};
  $scope.studentObject.unavailability = [{}];
  $scope.retrievedStudents = [];
  $scope.storedID;

  // Posting Student Information to DB
  $scope.submit = function(data){
    var sentData = angular.copy(data); // Creates a copy of the data to be sent that's not connected to the scope of the original data
    StudentFactory.postData(sentData).then(function(){
      $scope.init();  // I think this is firing before the data gets into the DB..
      $scope.cancel();
    });
  }

  $scope.addTimeOffElement = function(){
    var newObj = {};
    $scope.studentObject.unavailability.push(newObj);
  }

  $scope.init = function(){
    StudentFactory.getData().then(function(){
      return $scope.retrievedStudents = StudentFactory.data;
      console.log("___________________");
      console.log($scope.retrievedStudents.results);
    });
  }

  $scope.removeStudent = function(id) {
    StudentFactory.deleteData(studentID);
    $scope.init();
    $scope.cancel();
  }

  $scope.storeId = function(id) {
    $scope.storedID = id;
    console.log($scope.storedID);
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.init();
}]);
