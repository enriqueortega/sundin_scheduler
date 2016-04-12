myApp.factory('StudentFactory', ['$http', function($http){
  var data = {};

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

  return {
    data : data,
    getData : getData,
    postData : postData
  };
}]);
