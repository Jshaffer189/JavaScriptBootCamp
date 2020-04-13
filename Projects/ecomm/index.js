const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

// Node Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ '55d6agy8a6v4j4o5g6sc24s8' ]
	})
);

// Middleware Routing
// req is the browser object request
// res is the server response to the user
app.get('/signup', (req, res) => {
	res.send(`
		<div>
			Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign up</button>
            </form>
        </div>
    `);
});

app.post('/signup', async (req, res) => {
	const { email, password, passwordConfirmation } = req.body;

	const existingUser = await usersRepo.getOneBy({ email });
	// check if email is alread taken
	if (existingUser) {
		return res.send('Email in use');
	}

	// check if passwords match
	if (password !== passwordConfirmation) {
		return res.send('Passwords must match');
	}

	// create a user in our user repo to represent this person
	const user = await usersRepo.create({ email, password });

	// run a check if cookie session === users browser
	req.session.userId = user.id;

	res.send('Account created');
});

app.get('/signout', (req, res) => {
	// removes stored cookie on signout
	req.session = null;
	res.send('You are logged out');
});

app.get('/signin', (req, res) => {
	res.send(`
		<div>
			Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <button>Sign In</button>
            </form>
        </div>
	`);
});

app.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	const user = await usersRepo.getOneBy({ email });

	if (!user) {
		return res.send('Email not Found');
	}

	if (user.password !== password) {
		return res.send('Invalid password');
	}

	req.session.userId = user.id;

	res.send('You are signed in!');
});

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
