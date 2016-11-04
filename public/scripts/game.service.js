app.factory('GameService', function($q, $http) {

	return {
		getTypes : function(username) {
			return $q(function(resolve, reject) {
				$http.get('/api/game/types').then(
					function(gametypes) {
						resolve(gametypes.data)
					}
				).catch(error => {
					reject("uanble to login")
				})
			})
		},
		catchType : function(itemType){
			return $q(function(resolve, reject) {
				$http.get('/api/game/catch/' + itemType).then(
					function(caughtItem){
						resolve(caughtItem.data)
					}).catch(reject)
			})
		}
	}

})