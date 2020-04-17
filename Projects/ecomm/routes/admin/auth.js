const express = require('express');
// only requrie in the check function from express-validator lib
const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

// return signup template from browswer req
router.get('/signup', (req, res) => {
	res.send(signupTemplate({ req }));
});

router.post('/signup', [ check('email'), check('password'), check('passwordConfirmation') ], async (req, res) => {
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

router.get('/signin', (req, res) => {
	res.send(signinTemplate());
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	const user = await usersRepo.getOneBy({ email });

	if (!user) {
		return res.send('Email not Found');
	}

	const validPassword = await usersRepo.comparePasswords(user.password, password);

	// comparing unhashed/unsalted password to form input
	if (!validPassword) {
		return res.send('Invalid password');
	}

	req.session.userId = user.id;

	res.send('You are signed in!');
});

router.get('/signout', (req, res) => {
	// removes stored cookie on signout
	req.session = null;
	res.send('You are logged out');
});

module.exports = router;
