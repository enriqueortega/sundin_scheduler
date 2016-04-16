myApp.factory('EventFactory', ['$http', function($http){

  var data = {};
  var id = {};

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

  var deleteData = function(eventId){
    id.eventId = eventId;
    $http.put('/events', id).then(function(response){
      console.log("Attempting to Delete Event");
    });
  };

  return {
    data : data,
    getData : getData,
    postData : postData,
    deleteData : deleteData
  };
}]);
