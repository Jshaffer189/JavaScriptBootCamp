// DOM Element Selectors
const input = document.querySelector('input');

const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f241bf34',
			s: searchTerm
		}
	});
	return response.data.Search;
};

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);

	for (let movie of movies) {
		const div = document.createElement('div');

		// image error
		div.innerHTML = `
			<div src="${movie.Poster}" />
			<h1>${movie.Title}</h1>
		`;

		document.querySelector('#target').appendChild(div);
	}
};

// Event Listeners
input.addEventListener('input', debounce(onInput, 500));
