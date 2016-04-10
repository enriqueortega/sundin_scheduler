myApp.factory('StudentFactory', ['$http', function($http){
  var data = {};

  var postData = function(){
    $http.get('/students').then(function(response){
      data.results = response.data;
    });
  }

  return {
    data : data,
    getData : getData,
    postData : postData,
  };
}]);
