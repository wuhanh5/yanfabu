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
	
	$scope.toSplace=function(spaceId){
		$state.go('detail',{spaceId:spaceId});
	}
});

routerApp.controller('detailCtrl',['$scope','detailService','$state','$stateParams','$timeout',function($scope,detailService,$state,$stateParams,$timeout){
	$scope.spaceId = $stateParams.spaceId;
	var x2 = $stateParams.spaceId;
	console.log(x2);
	detailService.get().success(function(res){
		$scope.details = res.data.spaceInfo;
		$scope.lng = res.data.spaceInfo.lng;
		$scope.lat = res.data.spaceInfo.lat;
		console.log($scope.lng)
		
	$scope.map = new AMap.Map('mapCont', {
	    resizeEnable: true,
	    zoom:10,
	    center: [$scope.lng, $scope.lat]
	});
	console.log($scope.map);
	console.log('scsdzxcsdv');
    var marker = new AMap.Marker({
        // position: map.getCenter(),
        position: [$scope.lng, $scope.lat],
        draggable: true,
        cursor: 'move',
        raiseOnDrag: true
    });
    marker.setMap($scope.map);
	})

	
	$timeout(function(){
		$scope.swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationType : 'fraction',
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop : true
		});
	},100);
	
	$scope.sexObj= {
		 1:"男",
		 2:"女"
		}
	
	//地图
	var lat=$scope.lat;
	var lng=$scope.lng;
//	$scope.map = new AMap.Map('mapCont', {
//	    resizeEnable: true,
//	    zoom:10,
//	    center: [116.34654522, 40.06398271]
//	});
//	console.log($scope.map);
//	console.log('scsdzxcsdv');
//  var marker = new AMap.Marker({
//      // position: map.getCenter(),
//      position: [116.34654522, 40.06398271],
//      draggable: true,
//      cursor: 'move',
//      raiseOnDrag: true
//  });
//  marker.setMap($scope.map);
}])


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

//露营商品详情
routerApp.controller('luyingsCtrl',['$scope','luyingService','$state',function($scope,luyingService,$state){
	luyingService.get().success(function(res){
		$scope.luying =res.data.products;
	})
	
	$scope.toluying = function(luyingId){
		$state.go('luying',{luyingId:luyingId});
	}
}])


//地图展示
//routerApp.controller('mapCtrl',['$scope','$timeout',function($scope,$timeout){
//	$scope.map = new AMap.Map('mapCont', {
//	    resizeEnable: true,
//	    zoom:15,
//	    center: [116.34654522, 40.06398271]
//	});
//	console.log($scope.map);
//	console.log('scsdzxcsdv');
//  var marker = new AMap.Marker({
//      // position: map.getCenter(),
//      position: [116.34654522, 40.06398271],
//      draggable: true,
//      cursor: 'move',
//      raiseOnDrag: true
//  });
//  marker.setMap($scope.map);
//}])
