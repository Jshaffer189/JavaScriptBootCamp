fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Status code Error: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		console.log(data.results[0].films[0]);
	})
	.catch((err) => {
		console.log('something went wrong with fetch');
		console.log(err);
	});
