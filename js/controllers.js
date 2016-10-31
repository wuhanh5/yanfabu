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

});


