'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$http",function($http) {

   this.term = '';

   this.searchApi = function(){
   	if (!this.term) {
   		return;
   	};
   var search = this;
   search.videos = [];
   var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ this.term +"&key=AIzaSyCGBuFPho5UQuaGVhxyV42_kxsodaIdEEY";

   $http.get(url).success(function(data){
      search.videos = data.items;
      this.term = "";
    });

 };

}]);