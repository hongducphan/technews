var technews = angular.module('technews', ['ngRoute']);

technews.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/calculator',{
			templateUrl: 'views/calculator.html',
			controller: 'CalculatorCtrl'
		}).
		when('/news',{
			templateUrl: 'views/news.html',
			controller: 'NewsCtrl'
		}).
		when('/home',{
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);