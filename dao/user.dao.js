var mongoose = require('mongoose');
var connection = require('./base.dao.js')
var Schema = mongoose.Schema

var userSchema = new Schema({
	username: String,
	capturedAnimals: Schema.Types.Mixed
});

userSchema.methods.details = function() {
	console.log('username: ', this.username, 'capturedAnimals:', this.capturedAnimals);
}

var User = mongoose.model('User', userSchema);

module.exports.getprofile = function(user) {

	return new Promise((resolve, reject) => {
		User.find({
			username: user
		}, function(err, user) {
			if (err) {
				console.log('user not found ', username)
				reject("user not found")
			} else {
				resolve(user)
			}
		})
	})
}


module.exports.createprofile = function(username) {
	return new Promise((resolve, reject) => {

		getprofile(username).then(user => {
			reject()
		}).catch(error => {
			var newUser = new User({
				username: username,
				capturedAnimals: {}
			})

			newUser.save(function(err, newUser) {
				if (err) {
					console.log('unable to save user ', username, userlevel)
					reject("unable to create user")
				} else {
					resolve(newUser)
				}
			})
		})
	})
}