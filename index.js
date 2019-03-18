var express = require('express');
var router = express.Router();
var selectdb = require('./routes/selectdb');
var insertdb = require('./routes/insertdb');
var insert = require('./routes/insert');
var select = require('./routes/select');
var response = {};

router.post('/register', function(req, res, next) { 
	response=res;
	insertdb(cb, req);
});

router.post('/', function(req, res, next) {
  response =res;
  selectdb(cb, req);
 }); 

router.post('/recipe', function(req, res, next) {
	response=res;
	insert(cb, req);
});

router.get('/recipe', function(req, res, next) {
	response=res;
	select(cb);
});



function cb(err, result) {
	if(err)
		return response.sendStatus(500);
	else
		return response.send(result);
}

module.exports = router;
