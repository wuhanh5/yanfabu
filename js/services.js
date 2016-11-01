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

routerApp.service('moreCityService',['$http',function($http){
	this.get = function(){
		return $http.get('data/citylist.json');
	}
}]);


//露营service
routerApp.service('luyingService',['$http',function($http){
	this.get = function(){
		return $http.get('data/luying.json');
	}
}]);
//
////露营商品详情
//routerApp.service('luyingsService',['$http',function($http){
//	this.get = function(){
//		return $http.get('data/luying.json');
//	}
//}]);