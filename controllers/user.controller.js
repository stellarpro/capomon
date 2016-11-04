var userdao = require('../dao/user.dao')

module.exports.getprofile = function(req, res) {
	if (req.session.user == undefined) {
		var newUser = {
			username: "Chuck",
			capturedAnimals: {}
		}
		req.session.user = newUser;
		res.send(newUser);
	} else {
		res.send(req.session.user)
	}
}