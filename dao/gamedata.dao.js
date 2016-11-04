var mongoose = require('mongoose');
var connection = require('./base.dao.js')
var Schema = mongoose.Schema

var gameSchema = mongoose.Schema({
	type: String,
	name: String,
	probability: Number,
	score: Number
});

var Gamedata = mongoose.model('gamedata', gameSchema);

module.exports.gamemodel = Gamedata;

module.exports.getTypes = function() {
	return new Promise((resolve, reject) => {
		connection.connectionToDb.then(db => {
			Gamedata.find(function(err, gamedata) {
				if (err) {
					reject(err)
				} else {
					console.log('got game data ', gamedata.length);
					var gameTypes = [...new Set(gamedata.map(gameitem => gameitem.type))]
					resolve(gameTypes)
				}
			})
		}).catch(err => { reject('No db connection') })
	})
}

module.exports.getItemsByType = function(itemType) {
	return new Promise((resolve, reject) => {
		connection.connectionToDb.then(db => {
			Gamedata.find({"type": itemType}, function(err, gamedata) {
				if (err) {
					reject(err)
				} else {
					console.log('got items by type ', gamedata.length, itemType);
					resolve(gamedata)
				}
			})
		}).catch(err => { reject('No db connection') })
	})
}