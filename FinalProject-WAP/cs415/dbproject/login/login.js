const mysql = require('mysql');
const express = require('express');
 const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'userDB'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));

});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let user_id = request.body.user_id;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty


	if (user_id && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT role FROM user WHERE user_id = ? AND password = ?', [user_id, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
             // A user with the entered username was found
             // Get the role of the user
				var role= results[0].role;
				// Authenticate the user
				let usrid = results[0].user_id
        		// If the entered username and password are valid, redirect the user to the appropriate page based on their role
				if(role=='admin'){
				request.session.loggedin = true;
				request.session.user_id = user_id;
				// Redirect to home page
				response.redirect('http://127.0.0.1:5501/FinalProject-WAP/cs415/dbproject/CRUD_MYSQL/routes/register.html')
				
				}else{
					request.session.loggedin = true;
				    request.session.user_id = user_id;
					response.redirect('http://127.0.0.1:5501/FinalProject-WAP/home.html');
				}


               
			} 
            
            else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.user_id + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);