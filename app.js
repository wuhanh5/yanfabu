var routerApp = angular.module('routerApp', ['ui.router','angularCSS','ngAnimate','anim-in-out']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
//routerApp.run(function($rootScope, $state, $stateParams) {
//  $rootScope.$state = $state;
//  $rootScope.$stateParams = $stateParams;
//});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'html/home.html',
            css:'css/home.css'
        })
        .state('city',{
        	url:'/city/:cityId',
        	templateUrl:'html/city.html',
        	controller:'cityCtrl',
        	css:'css/cityinfo.css'
        })
        
        .state('moreCity',{
        	url:'/moreCity',
        	templateUrl:'html/moreCity.html',
        	css:'css/moreCity.css'
        })
        
       .state('find', {
            url: '/find',
            templateUrl: 'html/find.html',
            css:'css/find.css'
        })
       .state('search', {
            url: '/search',
            templateUrl: 'html/search.html',
            css:'css/search.css'
        })
       .state('order', {
            url: '/order',
            templateUrl: 'html/order.html',
            css:'css/order.css'
        })
       .state('mine', {
            url: '/mine',
            templateUrl: 'html/mine.html',
            css:'css/mine.css'
            
        })
         .state('share', {
            url: '/share',
            templateUrl: 'html/share.html',
        })
        .state('luying', {
            url: '/luying',
            templateUrl: 'html/luying.html',
            css:'css/luying.css'            
        })
        .state('luyingList', {
            url: '/luyingList',
            templateUrl: 'html/luyingList.html',
            css:'css/luyingList.css'            
        })
        

});
