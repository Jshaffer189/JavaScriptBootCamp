const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmerelda' } ],
				'/about': 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 3000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('status code ', res.status);
		console.log('data', res.data);
		console.log('request worked');
	})
	.catch((res) => {
		console.log(res.status);
	});

fakeRequest('/dogg')
	.then((res) => {
		console.log('status code ', res.status);
		console.log('data', res.data);
		console.log('request worked');
	})
	.catch((res) => {
		console.log(res.status);
	});
