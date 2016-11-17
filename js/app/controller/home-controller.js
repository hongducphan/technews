technews.controller('HomeCtrl', ['$scope', function($scope){
	$scope.message="Home";

	$scope.redirect = function(){
		$("#btnCalculator").click(function(){
			window.location.href = '/technews/#/calculator';
			console.log("test");
		});
		$("#btnNews").click(function(){
			window.location.href = '/technews/#/news';
		});
	}

	$scope.redirect();
}]);