const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();

// Node Middleware
app.use(express.static('public'));
// encode default forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ '55d6agy8a6v4j4o5g6sc24s8' ]
	})
);
app.use(authRouter);
app.use(productsRouter);

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
