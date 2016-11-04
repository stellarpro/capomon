app.factory('LoginService', function($q, $http) {

	return {
		getprofile : function(username) {
			return $q(function(resolve, reject) {
				$http.get('/api/user/profile/me').then(
					function(response) {
						resolve(response)
					}
				).catch(error => {
					reject("uanble to login")
				})
			})
		}
	}

})