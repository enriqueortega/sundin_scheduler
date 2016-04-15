//test

// myApp.controller('');

//test


myApp.controller('EventController', ['$scope', 'EventFactory', function($scope, EventFactory){
  console.log("Event Controller Fired, yo");

  $scope.eventObject = {};
  $scope.retrievedEvents = [];


  $scope.submit = function(data){
    $scope.eventObject = data;
    EventFactory.postData($scope.eventObject);
    console.log($scope.eventObject);
  }

  $scope.init = function(){
    console.log("Init Fire!");

    EventFactory.getData().then(function(){
      $scope.retrievedEvents = EventFactory.data;
      console.log($scope.retrievedEvents);
    });
  }

  $scope.init();
}]);
