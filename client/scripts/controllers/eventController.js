var eventID;

myApp.controller('EventController', ['$scope', 'EventFactory', '$uibModal', function($scope, EventFactory, $uibModal){
  console.log("Event Controller Fired, yo");

  $scope.retrievedEvents = [];

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/templates/createEventModal.html',
      controller: 'EventModalInstance',
      size: 'lg'
    });

    modalInstance.result.then(function(selectedItem){
      $scope.selected = selectedItem;
    });
  };

  // Inside the modal ...

  $scope.init = function(){
    console.log("Init Fire!");
    EventFactory.getData().then(function(){
      $scope.retrievedEvents = EventFactory.data;
      console.log($scope.retrievedEvents);
    });
  }

  $scope.openEventDelete = function(id) {
    eventID = id; // Pulls student id attached to button and stores it globally
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/templates/deleteEventRecord.html',
      controller: 'EventModalInstance',
      size: 'sm'
    });
  }

  $scope.init();
}]);

myApp.controller('EventModalInstance', ['$scope', '$uibModalInstance', 'EventFactory', function($scope, $uibModalInstance, EventFactory){

  $scope.eventObject = {};

  $scope.submitEvent = function(data){
    $scope.eventObject = data;
    EventFactory.postData($scope.eventObject);
    $scope.cancel();
  }

  $scope.removeEvent = function(id) {
    console.log(eventID);
    EventFactory.deleteData(eventID);
    // $scope.init();
    $scope.cancel();
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);
