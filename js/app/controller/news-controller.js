technews.controller('NewsCtrl', ['$scope', function($scope){

	$scope.loadPage = function(){
		$(".news").fadeOut();
		$(".news").fadeIn(1000);
	}

	$scope.loadPage();
	
}]);