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
