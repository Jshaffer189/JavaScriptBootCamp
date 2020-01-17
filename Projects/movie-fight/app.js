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
	console.log(movies);
};

// Event Listeners
input.addEventListener('input', debounce(onInput, 500));
