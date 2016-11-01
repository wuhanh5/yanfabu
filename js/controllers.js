routerApp.controller('myAppCtrl',['$rootScope',function($rootscope){
	$rootscope.isUserAuto = false;
	$rootscope.goBack = function(){
		window.history.back();
	}
	$rootscope.login=function(){
		$rootscope.isUserAuto = true;
	}
	
}])


routerApp.controller('colorCtrl',function($scope){
	$scope.isActive = true;
	$scope.clickStatus = function (isActive) {
            $scope.isActive = false;            
        }
})

routerApp.controller('bannerCtrl',['$scope','homeService','$timeout',function($scope,homeService,$timeout){
	homeService.get().success(function(res){
//		console.log(res.data);
		$scope.arr =res.data.homePageInfo.topBanner;
	})
	$timeout(function(){
		$scope.swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop : true
		});
	},100);
	
	
}]);

routerApp.controller('homeMainCtrl',['$scope','homeService','$state',function($scope,homeService,$state){
	homeService.get().success(function(res){
		$scope.citys =res.data.homePageInfo.recommendCity;
	})
	
	$scope.toCity = function(cityId){
		console.log(cityId);
		$state.go('city',{cityId:cityId});
	}
}])


routerApp.controller('hotCityCtrl',['$scope','moreCityService','$state',function($scope,moreCityService){
	moreCityService.get().success(function(res){
		$scope.hotCitys =res.data.hotCity;
	})
	
}])
routerApp.controller('moreCtrl',function($scope){
	$scope.goBack = function(){
		window.history.back();
	}
})
routerApp.controller('cityListCtrl',['$scope','moreCityService','$state',function($scope,moreCityService){
	moreCityService.get().success(function(res){
		$scope.cityLists =res.data.searchCity;
	})
	
}])
routerApp.controller('cityCtrl',function ($scope, $state, $stateParams,cityService) {
   $scope.cityId = $stateParams.cityId;
    var producerId = $stateParams.cityId;
    console.log(producerId);
    
    cityService.get().success(function(res){
    	$scope.cityInfos = res.data.result;
    })
    
    $scope.sexObj= {
		 1:"男",
		 2:"女"
		}

	$scope.goBack = function(){
		window.history.back();
	}
});

//露营controller
routerApp.controller('luyingCtrl',['$scope','luyingService','$timeout',function($scope,luyingService,$timeout){
	luyingService.get().success(function(res){
		$scope.arr =res.data.pictureLists;
	})
	$timeout(function(){
		$scope.swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop : true
		});
	},100);
	
}]);

