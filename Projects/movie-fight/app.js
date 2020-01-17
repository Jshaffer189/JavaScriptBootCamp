const root = document.querySelector('.autocomplete');
root.innerHTML = `
	<label><b>Search For a Movie</b></label>
	<input class="input" />
	<div class="dropdown is-active">
		<div class="dropdown-menu">
			<div class="dropdown-content results"></div>
		</div>
	</div>
`;

// DOM Element Selectors
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// Axios API
const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f241bf34',
			s: searchTerm
		}
	});

	if (response.data.Error) {
		return [];
	}

	return response.data.Search;
};

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);

	for (let movie of movies) {
		const div = document.createElement('div');

		// image error
		div.innerHTML = `
			<img src="${movie.Poster}" />
			<h1>${movie.Title}</h1>
		`;

		document.querySelector('#target').appendChild(div);
	}
};

// Event Listeners
input.addEventListener('input', debounce(onInput, 1000));
