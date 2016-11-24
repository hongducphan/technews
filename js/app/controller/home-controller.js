technews.controller('HomeCtrl', ['$scope', function($scope){
	
	$scope.loadPage = function(){
		$(".home").fadeOut();
		$(".home").fadeIn(1000);
	}

	$scope.loadPage();
	

}]);