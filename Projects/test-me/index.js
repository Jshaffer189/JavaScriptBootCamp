#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
	await runner.collectFiles(process.cwd());
	// run all tests in cwd
	runner.runTests();
};

run();
