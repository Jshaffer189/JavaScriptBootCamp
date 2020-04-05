const express = require('express');

const app = express();

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
	req.on('data', (data) => {
		const parsed = data.toString('utf8').split('&');
		const formData = {};
		for (let pair of parsed) {
			// destructure with each pair split and value by index
			const [ key, value ] = pair.split('=');
			formData[key] = value;
		}
		console.log(formData);
	});

	res.send('Account created');
});

// port 3000
app.listen(3000, () => {
	console.log('Listening');
});
