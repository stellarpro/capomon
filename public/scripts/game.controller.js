app.controller('gameCtrl', function($scope, $location, GameService) {

	$scope.itemtypes = []
	$scope.userItems = []

	$scope.getTypes = function() {
		GameService.getTypes().then(gameTypes => {
			$scope.itemtypes = gameTypes;
		})
	}

	$scope.getTypes();


	$scope.catchType = function(itemType) {
		console.log("catching type ", itemType);
		GameService.catchType(itemType).then(response => {
			if (response.isCaught) {
				console.log("You caught ", response)
			} else {
				console.log('You didnt caught but seen' + response)
			}

			$scope.saveOrUpdateCaughtItem(response);
		})
	}

	$scope.saveOrUpdateCaughtItem = function(itemReceived) {
		var existingItem = $scope.userItems.find(item => {
			console.log("checking item ", item.name)
			console.log("item recieved item ", itemReceived.item.name, item.name === itemReceived.item.name)
			if (item.name === itemReceived.item.name) {
				return item;
			}
		})

		console.log("existing item found ", existingItem)
		if (existingItem != undefined) {
			if (itemReceived.isCaught) {
				existingItem.captured += 1
				existingItem.score += 1
			} else {
				existingItem.seen += 1
			}

		} else {
			$scope.userItems.push({
				seen: (itemReceived.isCaught) ? 0 : 1,
				captured: (itemReceived.isCaught) ? 1 : 0,
				name: itemReceived.item.name,
				score: itemReceived.item.score
			})
		}
	}
})