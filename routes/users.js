var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

// Go to user dashboard
router.get('/dashboard/:id', function(req, res){
	res.render('userDash');
});

// Register User
router.post('/register', function(req, res){
	// var yearJoined = new Date().getFullYear;

	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var twitchChannelName = req.body.twitchChannelName
	

	// Validation
	req.checkBody('twitchChannelName', 'You must input a twitch channel name').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			username: username,
			email:email,
			twitchChannelName: twitchChannelName,
			password: password,
			memberStatus: 'newbie'

		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/users/dashboard/:username', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });

// The Below code changes the logged in status to true when the user logs in.
// This adds complexity due to passports unique cookie strategy because 
// the status of loggedIn would need to be changed back to false on
// the session expiring or 
//
// router.post('/login',
//   passport.authenticate('local',{failureRedirect: '/users/login' }),
//   function(req, res) {
// 	var username = req.user.username; // here we assume the username is stored as 'username' as you have in your code but change this based on your schema
// 	   User.findOne({username: username}, function(err, user, data) {
// 	      if(err) res.send(err);
// 	      user.loggedIn = true;
// 	      user.save(function (err) {
// 	         if (err) {
// 	            console.log(err);
// 	         } else {
// 	            res.redirect('/users/dashboard/' + req.user.username);
// 	         }
// 	      });
//    		});
//  });

router.get('/logout', function(req, res){
	var username = req.user.username;

	console.log(
	'/////////////////////////////////////////////////'
	 + '<br>' + req.user.username + '<br>' + 
	'/////////////////////////////////////////////////'
	);

	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/');
});

module.exports = router;