const LUCK_THRESHOLD = 0.6;

module.exports.catch = function(catchables, itemToCatch){
	console.log('going to catch ', itemToCatch)

	// Sort ascending which will help finding finding probability
	// from higher to lower
	catchables.sort(function(a, b){
		return parseFloat(b.probability) - parseFloat(a.probability);
	})

	var randNum = Math.random()
	var probability = randNum - (1 - catchables[0].probability)
	console.log("probability ", randNum, probability, catchables[0].probability)

	possiblyCaughtItem = catchables.find(item => {
		
		return item.probability >= probability
	})

	console.log(possiblyCaughtItem)

	//Let try the luck factor
	if(Math.random() < LUCK_THRESHOLD){
		return {
			isCaught: true,
			item: possiblyCaughtItem
		}
	}else {
		return {
			isCaught: false,
			item: possiblyCaughtItem
		}
	}
}

