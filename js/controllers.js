routerApp.controller('colorCtrl',function($scope){
	$scope.isActive = true;
	$scope.clickStatus = function (isActive) {
            $scope.isActive = false;            
        }
})

routerApp.controller('bannerCtrl',['$scope','homeService','$timeout',function($scope,homeService,$timeout){
	homeService.get().success(function(res){
		console.log(res.data);
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

routerApp.controller('homeMainCtrl',['$scope','homeService',function($scope,homeService){
	homeService.get().success(function(res){
		$scope.citys =res.data.homePageInfo.recommendCity;
	})
}])

