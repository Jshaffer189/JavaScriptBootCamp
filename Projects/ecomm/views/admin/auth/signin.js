const layout = require('../layout');

// return the layout file as content along with whatever form.js file was called
module.exports = () => {
	return layout({
		content: `
        <div>
            <form method="POST">
                <input name="email" placeholder="email"  />
                <input name="password" placeholder="password"  />
                <button>Sign In</button>
            </form>
        </div>
    `
	});
};
