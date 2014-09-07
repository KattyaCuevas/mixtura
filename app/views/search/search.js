'use strict';

angular.module('mixtura.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'views/search/search.html',
    controller: 'searchController'
  });
}])

.controller('searchController', ["$http",function($http) {

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