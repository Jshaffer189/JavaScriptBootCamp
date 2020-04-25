const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
	return layout({
		content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email"  />
                ${getError(errors, 'email')}
                <br>
                <input name="password" placeholder="password"  />
                ${getError(errors, 'password')}
                <br>
                <button>Sign In</button>
            </form>
        </div>
    `
	});
};
