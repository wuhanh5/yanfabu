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

routerApp.service('detailService',['$http','$stateParams',function($http,$stateParams){
	this.get = function(){
		var url='http://www.shafalvxing.com/space/getShareSpaceDetail.do?bizParams=%7B%22spaceId%22%3A'+$stateParams.spaceId+'%2C%22userToken%22%3A%22NTcxMWJkZmU3MmU5MWRjYThiZjNjM2JlN2EzZGRjYmZkMDFkMTA5ZjUyNDQ0NTE4%22%7D';
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