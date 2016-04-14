myApp.controller('StudentModalController', ['$scope', '$uibModal', function($scope, $uibModal){
  console.log("Student Modal");

  $scope.open = function () {
    console.log("opening modal");
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/templates/createStudentModal.html',
      controller: 'StudentModalInstance'
      // backdrop: true,
      // windowClass: 'modal'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    });
  };
}]);

myApp.controller('StudentModalInstance', ['$scope', '$uibModalInstance', 'StudentFactory', function ($scope, $uibModalInstance, StudentFactory) {

  // $scope.StudentFactory = StudentFactory;
  //
  // $scope.step = 1;
  // $scope.finalStep = 2;
  //
  // $scope.next = function () {
  // 	if($scope.step < $scope.finalStep)
  // 		$scope.step++;
  //   //$uibModalInstance.close($scope.selected.item);
  // };
  //
  // $scope.back = function () {
  // 	if($scope.step > 0)
  // 		$scope.step--;
  // };
  //
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  //
  // $scope.deploy = function () {
  //   $scope.StudentFactory.deployBot();
  //   $uibModalInstance.dismiss('deploy');
  // }

}]);
