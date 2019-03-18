var express = require('express');
var router = express.Router();
var selectdb = require('./selectdb');
var deletedb= require('./deletedb');
var insertdb = require('./insertdb');
/* GET home page. */
var response = null;

router.get('/', function(req, res, next) {
	response = res;
	selectdb(cb);
  //res.send(`Hello ${req.body.name}`);
});

router.post('/', function(req, res, next) { 
	response=res;
	insertdb(cb, req);
});

router.delete('/', function(req, res, next) {
	console.log(req.body);
	response=res;
	deletedb(cb);
});

function cb(err,result) {
	if(err)
		return response.sendStatus(500);
	else
		return response.send(result);
}
module.exports = router;


