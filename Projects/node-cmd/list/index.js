// node --inspect-brk

const fs = require('fs');

fs.readdir('.', (err, fileNames) => {
	// error == error obj
	// fileNames == null, sucess

	if (err) {
		// if err is defined run catch
		console.log(err);
	}

	console.log(fileNames);
});
