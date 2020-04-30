// external middleware
const express = require('express');

// internal middleware
const { handleErrors } = require('./middlewares');
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

router.post(
	'/signup',
	[ requireEmail, requirePassowrd, requirePassowrdConfirmation ],
	handleErrors(signupTemplate),
	async (req, res) => {
		const { email, password } = req.body;
		const user = await usersRepo.create({ email, password });

		req.session.userId = user.id;

		res.send('Account created');
	}
);

// sign in template
router.get('/signin', (req, res) => {
	res.send(signinTemplate({}));
});

router.post(
	'/signin',
	[ requireEmailExist, requireValidPasswordForUser ],
	handleErrors(signinTemplate),
	async (req, res) => {
		const { email } = req.body;

		const user = await usersRepo.getOneBy({ email });

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
