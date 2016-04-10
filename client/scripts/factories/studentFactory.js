myApp.factory('StudentFactory', ['$http', function($http){
  var data = {};

  var postData = function(){
    $http.post('/students').then(function(response){
      data.results = response.data;
      console.log(data.results);
    });
  }

  var getData = function(){
    $http.get('/students').then(function(response){
    });
  };

  return {
    data : data,
    getData : getData,
    postData : postData,
  };
}]);
