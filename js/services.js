routerApp.service('homeService',['$http',function($http){
	this.get = function(){
		return $http.get('data/home.json');
	}
}]);

routerApp.service('cityService',['$http','$stateParams',function($http,$stateParams){
	this.get = function(){
		var url='data/city/'+$stateParams.cityId+'.json';
		return $http.get(url);
	}
	
}]);