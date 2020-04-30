const express = require('express');
const { validationResult } = require('express-validator');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
	requireEmail,
	requirePassowrd,
	requirePassowrdConfirmation,
	requireEmailExist,
	requireValidPasswordForUser
} = require('./validators');

const router = express.Router();

// signup template
router.get('/signup', (req, res) => {
	res.send(signupTemplate({ req }));
});

router.post('/signup', [ requireEmail, requirePassowrd, requirePassowrdConfirmation ], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.send(signupTemplate({ req, errors }));
	}

	const { email, password, passwordConfirmation } = req.body;
	const user = await usersRepo.create({ email, password });

	// run a check if cookie session === users browser
	req.session.userId = user.id;

	res.send('Account created');
});

// sign in template
router.get('/signin', (req, res) => {
	res.send(signinTemplate({}));
});

router.post(
	'/signin',
	[
		//
		requireEmailExist,
		requireValidPasswordForUser
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.send(signinTemplate({ errors }));
		}

		const { email, password } = req.body;

		const user = await usersRepo.getOneBy({ email });

		if (!user) {
			return res.send('Email not Found');
		}

		req.session.userId = user.id;

		res.send('You are signed in!');
	}
);

router.get('/signout', (req, res) => {
	// removes stored cookie on signout
	req.session = null;
	res.send('You are logged out');
});

module.exports = router;
