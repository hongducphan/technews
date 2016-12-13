technews.controller('SignupCtrl', ['$scope', function($scope){

	$scope.loadPage = function(){
		$(".signup").fadeOut();
		$(".signup").fadeIn(1000);
	}

	$scope.loadPage();
	
}]);