// calls functions three times
function callThreeTimes(f) {
	f();
	f();
	f();
}

// prints boo hoo once
function cry() {
	console.log('Boo Hoo');
}

// looping a functon num amout of times
function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

// passing two functions in to a if else
function pickOne(f1, f2) {
	let randomFunction = Math.random();
	if (randomFunction < 0.5) {
		f1();
	} else {
		f2();
	}
}
