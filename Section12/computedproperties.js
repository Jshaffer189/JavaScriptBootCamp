// dynamically add properties

const ROLE = 'host';
const PERSON = 'Jools Holland';

// dynamically added
const TEAM = {
	[ROLE]: PERSON
};

console.log(TEAM);

function addProp(obj, k, v) {
	const COPY = {
		...obj
	};
	// dynamically added
	COPY[k] = v;
	return COPY;
}

const RES = addProp(TEAM, 'happy', '!');

console.log(RES);
