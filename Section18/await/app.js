// axios.get('https://swapi.co/api/planets/')
// await - js will wait and not move on until this promise is resolved

async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.co/api/planets23123135/');
		console.log(res.data);
	} catch (e) {
		console.log('Errorrrrrr');
		console.log(e);
	}
}

getPlanets();
