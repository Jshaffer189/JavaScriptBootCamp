const waitFor = (selector) => {
	return new Promise((resolve, reject) => {
		// if promise is rejected throw error and fail test
		const interval = setInterval(() => {
			if (document.querySelector(selector)) {
				clearInterval(interval);
				clearTimeout(timeout);
				resolve();
			}
		}, 30);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			reject();
		}, 2000);
	});
};

// before each test refresh widget
beforeEach(() => {
	document.querySelector('#target').innerHTML = '';
	createAutoComplete({
		root: document.querySelector('#target'),
		fetchData() {
			return [
				{
					Title: 'Avengers'
				},
				{
					Title: 'Not advengers'
				},
				{
					Title: 'some other movie'
				}
			];
		},
		renderOption(movie) {
			return movie.Title;
		}
	});
});

it('dropdown starts closed', () => {
	const dropdown = document.querySelector('.dropdown');

	expect(dropdown.className).not.to.include('is-active');
});

it('after seraching, dropdown opens up', async () => {
	const input = document.querySelector('input');
	input.value = 'advengers';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');

	const dropdown = document.querySelector('.dropdown');
	expect(dropdown.className).to.include('is-active');
});

it('After Searching, displays some results', async () => {
	const input = document.querySelector('input');
	input.value = 'advengers';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');

	const items = document.querySelectorAll('.dropdown-item');

	expect(items.length).to.equal(3);
});
