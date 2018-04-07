var express = require('express');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser());

app.get('/', function(req, res) {
	// connect to the db
	var con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'aleman'
	});
	
	// grab everthing from the database
	var sql = "SELECT * FROM posts";

	con.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		// when you render the index view template, send the result data along to it
		res.render('index', { activePage: 'home', posts: result });
	});
});

app.get('/newPost', function(req, res) {
	res.render('newPost', { activePage: 'newPost' });
	
});

app.get('/Sign_in', function(req, res) {
	res.render('sign_in', { activePage: 'signIn' });
});

app.get('/itemPage:id', function(req, res) {
	var itemId = req.params.id;
	if (err) {
		throw err;
	}
	res.render('itemPage'+'/' + itemId);
});

app.post('/newlist', function(req, res) {
	var con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'aleman'
	});

	var sql =
		"INSERT INTO posts (item, description, price, image_url) VALUES ('" +
		req.body.item +
		"', '" +
		req.body.description + 
		"','" +
		req.body.price +
		"','" +
		req.body.photo +
		"')";

		console.log(sql);

	con.query(sql, function(err, result) {
		if (err) {
			throw err;
		}

		console.log('1 record inserted');
		res.redirect('/');
		function confim() {
			alert("Your post was submitted.");
		};
	});
});

app.listen(process.env.PORT || 3000, function() {
	console.log('App is running at http://localhost:3000');
});
