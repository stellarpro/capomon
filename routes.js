var security = require('./security')
var gamecontroller = require('./controllers/game.controller')
var userController = require('./controllers/user.controller')

module.exports = function(app) {

    app.get('/api/user/profile/me', userController.getprofile);

    app.get('/api/game/types', security.isLoggedIn, gamecontroller.getTypes);

    app.get('/api/game/catch/:itemtype', security.isLoggedIn, gamecontroller.catchItem);
}