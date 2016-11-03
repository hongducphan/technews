var technews = angular.module('technews', ['ngRoute']);

technews.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/calculator',{
			templateUrl: 'views/calculator.html',
			controller: 'CalculatorCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);