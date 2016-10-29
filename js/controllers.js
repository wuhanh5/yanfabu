routerApp.controller('colorCtrl',function($scope){
	$scope.isActive = true;
	$scope.clickStatus = function (isActive) {
            $scope.isActive = false;            
        }
})

routerApp.controller('homeCtrl',['$scope','homeService',function($scope,homeService){
	homeService.get().success(function(res){
		console.log(res.data);
		$scope.arr =res.data.homePageInfo.topBanner;
	})
}])