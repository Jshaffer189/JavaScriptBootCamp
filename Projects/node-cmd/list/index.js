#!/usr/bin/env node

// debugger command
// node --inspect-brk

const fs = require('fs');
const util = require('util');

const lstat = util.promisify(fs.lstat);

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
	if (err) {
		console.log(err);
	}

	for (let filename of filenames) {
		try {
			const stats = await lstat(filename);

			console.log(filename, stats.isFile());
		} catch (err) {
			console.log(err);
		}
	}
});

// method 1
// const lstat = (filename) => {
// 	return new Promise((resolve, reject) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err)
// 			}

// 			resolve(stats)
// 		})
// 	})
// }
