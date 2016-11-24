technews.controller('HomeCtrl', ['$scope', function($scope){
	$scope.message="Home";

	$scope.redirect = function(){
		window.location.href = '/technews/#/news';
		$(".news").fadeOut();
		$(".news").fadeIn(1000);
	}

	$scope.redirect();    
}]);




