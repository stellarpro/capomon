app.controller('loginCtrl', function($scope, $location, LoginService) {
	$scope.username = "";
	

	$scope.loginUser = function(){
		LoginService.getprofile().then(profile => {
			$location.path('/game')
		}).catch(error => {
			console.log(error)

		})
	}
})