// DOM Element Selectors
const input = document.querySelector('input');

const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f241bf34',
			s: searchTerm
		}
	});
	console.log(response.data);
};

// debounce helper
const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		// debouncing the text input
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};

const onInput = (event) => {
	fetchData(event.target.value);
};

// Event Listeners
input.addEventListener('input', debounce(onInput, 500));
