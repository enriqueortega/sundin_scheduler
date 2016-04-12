myApp.factory('EventFactory', ['$http', function($http){

  var data = {};

  var postData = function(data){
    $http.post('/events', data).success(function(response){

    });
  }

  var getData = function(){
    return $http.get('/events').then(function(response){
      data.results = response.data;
      console.log(data.results);
    });
  }

  return {
    data : data,
    getData : getData,
    postData : postData
  };
}]);
