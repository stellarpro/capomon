var gamedao = require('../dao/gamedata.dao')
var itemCatcher = require('./ItemCatcher')

module.exports.getTypes = function(req, res) {
	gamedao.getTypes().then(categories => {
		res.send(categories)
	}).catch(err => { console.log(err); res.status(404).send()})
}

module.exports.catchItem = function(req, res) {
	console.log('going to catch: ', req.params.itemtype)
	gamedao.getItemsByType(req.params.itemtype).then(items => {
		res.send(itemCatcher.catch(items, req.params.itemtype));

	}).catch(err => res.status(500).send())
}