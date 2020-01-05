const willGetYouADog = new Promise((resolve, reject) => {
	const rand = Math.random();
	if (rand < 0.5) {
		resolve();
	} else {
		reject();
	}
});

// when the promise is resolved
willGetYouADog.then(() => {
	console.log('ya dog');
});

// when the promises is rejected
willGetYouADog.catch(() => {
	console.log('no dog');
});

willGetYouADog();
