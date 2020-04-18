const express = require('express');
// only requrie in the check function from express-validator lib
const { check, validationResult } = require('express-validator');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

// signup template
router.get('/signup', (req, res) => {
	res.send(signupTemplate({ req }));
});

router.post(
	'/signup',
	[
		// middleware
		// sanitation: trim, normalizeEmail
		// validation: isEmail, isLength
		check('email').trim().normalizeEmail().isEmail().withMessage('Must be a valid email').custom(async (email) => {
			const existingUser = await usersRepo.getOneBy({ email });
			if (existingUser) {
				throw new Error('Email in use');
			}
		}),
		check('password').trim().isLength({ min: 4, max: 20 }).withMessage('Must be between 4 and 20 characters'),
		check('passwordConfirmation')
			.trim()
			.isLength({ min: 4, max: 20 })
			.withMessage('Must be between 4 and 20 characters')
			.custom((passwordConfirmation, { req }) => {
				if (passwordConfirmation !== req.body.password) {
					throw new Error('Passwords must match');
				}
			})
	],
	async (req, res) => {
		const errors = validationResult(req);
		console.log(errors);

		const { email, password, passwordConfirmation } = req.body;
		const user = await usersRepo.create({ email, password });

		// run a check if cookie session === users browser
		req.session.userId = user.id;

		res.send('Account created');
	}
);

// sign in template
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
