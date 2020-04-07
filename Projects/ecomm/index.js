const express = require('express');
const bodyParser = require('body-parser');

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

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('Account created');
});

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
