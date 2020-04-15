const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

// Node Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ '55d6agy8a6v4j4o5g6sc24s8' ]
	})
);
app.use(authRouter);

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
