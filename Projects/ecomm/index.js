const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// req is the browser object request
// res is the server response to the user
app.get('/', (req, res) => {
	res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign up</button>
            </form>
        </div>
    `);
});

app.post('/', async (req, res) => {
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

	// store the id of that user inside the users cookie

	res.send('Account created');
});

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
