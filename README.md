# TrollPatrol

ORM example: 

var express = require('express');
var router = express.Router();
var request = require("request");

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/senate', function(req, res, next) {



var options = { method: 'GET',
  url: 'https://openstates.org/api/v1/bills/',
  qs: 
   { chamber: 'upper',
     q: 'current',
     apikey: 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf' },
  headers: 
   { 'postman-token': '3281e1e4-90a8-b803-adc8-03fecb0f7d32',
     'cache-control': 'no-cache' } };


request(options, function (error, response, body) {
  if (error) throw new Error(error);

	  body = JSON.parse(body);
	  res.render('index', { body: body });	
  		console.log(body);
});
});

  


router.get('/house', function(req, res, next){
var options = { method: 'GET',
  url: 'https://openstates.org/api/v1/bills/',
  qs: 
   { chamber: 'lower',
     q: 'current',
     apikey: 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf' },
  headers: 
   { 'postman-token': '83b75943-548b-dca3-ce22-d0a2a0d0ce68',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

	body = JSON.parse(body);
	res.render('index', { body: body });
	//res.render('index', { response: body });
		//console.log(body);
  
});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;