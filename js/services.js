routerApp.service('homeService',['$http',function($http){
	this.get = function(){
		return $http.get('data/home.json');
	}
}]);