myApp.factory('StudentFactory', ['$http', function($http){
  var data = {};
  var id = {};

  var postData = function(data){
    data.unavailability = angular.toJson(data.unavailability);
    $http.post('/students', data).success(function(response){
    });
  }

  var getData = function(){
    return $http.get('/students').then(function(response){
      data.results = response.data;
      console.log(data.results);
    });
  };

  var deleteData = function(studentId){
    id.studentId = studentId;
    console.log("_____________-____________");
    console.log(id);
    $http.put('/students', id).then(function(response){
      console.log("We're trying to delete");
    });
  };

  return {
    data : data,
    getData : getData,
    postData : postData,
    deleteData : deleteData
  };
}]);
