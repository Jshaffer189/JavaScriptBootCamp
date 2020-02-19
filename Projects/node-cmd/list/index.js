#!/usr/bin/env node

// debugger command
// node --inspect-brk

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

// const lstat = util.promisify(fs.lstat);

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
	if (err) {
		console.log(err);
	}

	const statPromises = filenames.map((filename) => {
		return lstat(filename);
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);

		if (stats.isFile()) {
			console.log(filenames[index]);
		} else {
			console.log(chalk.blue.bgRed.bold(filenames[index]));
		}
	}
});
