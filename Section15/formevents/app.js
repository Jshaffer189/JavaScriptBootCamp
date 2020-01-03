// Declared Objects
const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formData = {};

// all in one built Event Listeners
for (let input of [ creditCardInput, termsCheckBox, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// });

// creditCardInput.addEventListener('input', (e) => {
// 	console.log('cc and hanged', e);
// 	formData['cc'] = e.target.value;
// });

// termsCheckBox.addEventListener('input', (e) => {
// 	console.log('terms changed', e);
// 	formData['terms'] = e.target.checked;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('veggie is different', e);
// 	formData['veggie'] = e.target.value;
// });
