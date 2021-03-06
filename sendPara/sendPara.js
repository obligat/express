var express = require('express');
var sendParam = express();
var bodyParser = require('body-parser');

sendParam.use(bodyParser.urlencoded({extended: true}));
sendParam.use(bodyParser.json());

sendParam.get('/user', function (req, res) {
    res.send(req.query.name);
});

sendParam.post('/user', function (req, res) {
    res.send(req.body.name);
});

sendParam.post('/user', function (req, res) {
    res.send(req.params.name);
});

sendParam.post('/user', function (req, res) {
    res.send(req.get.name);
});

sendParam.post('/users', function (req, res) {
    res.send(req.body);
});


sendParam.listen(3000, function () {
    console.log('3000 port ');
});


module.exports = sendParam;
