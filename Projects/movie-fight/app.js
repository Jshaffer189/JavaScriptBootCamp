const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f241bf34',
			s: 'avengers'
		}
	});
	console.log(response.data);
};

fetchData();
