const path = require('path');
const jsdom = require('jsdom');
const { JSODM } = jsdom;

const render = async (filename) => {
	const filePath = path.join(process.cwd(), filename);

	const dom = await JSODM.fromFile(filePath, {
		runSCripts: 'dangerously',
		resources: 'usable'
	});

	return dom;
};

module.exports = render;
