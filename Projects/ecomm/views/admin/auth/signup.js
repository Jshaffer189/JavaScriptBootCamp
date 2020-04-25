const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
	return layout({
		content: `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" placeholder="email"  /> 
                ${getError(errors, 'email')}
                <br>
                <input name="password" placeholder="password" />
                ${getError(errors, 'password')}
                <br>
                <input name="passwordConfirmation" placeholder="password confirmation" />
                ${getError(errors, 'passwordConfirmation')}
                <br>
                <button>Sign up</button>
            </form>
        </div>
    `
	});
};
