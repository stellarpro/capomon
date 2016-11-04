var mongoose = require('mongoose');
var db = mongoose.connection;

let connectToDb = function() {
	return new Promise((resolve, reject) => {

		db.on('error', function() {
			console.log('unable to connect to db')
			console.error.bind(console, 'connection error:')
			reject()
		});

		db.once('open', function() {
			console.log('connected to db')
			resolve(db);
		})

		mongoose.connect('mongodb://localhost:27017/capomon');
	})
}

module.exports.connectionToDb = connectToDb()