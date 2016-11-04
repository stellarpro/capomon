var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);
var seed = require('./seed')

app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/capomon'
    }),
    secret: 'capomon cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

app.use(express.static('public'))
app.use(bodyParser.json())
require('./routes')(app)

seed.creategamedata().catch(err => { console.log('unable to create game data ', err)});

app.listen(3000, function() {
    console.log('Service listening on port 3000!!!!!')
})