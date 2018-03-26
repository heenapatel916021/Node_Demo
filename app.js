var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/assets', express.static(__dirname + '/assets'));
app.use(routes);



app.use(function (req, res, next) {
    var err = new Error('not found');
    err.status = 404;
    next(err);
});

app.listen(8080);






