const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e) {
// 	console.log(e);
// });

// input.addEventListener('keyup', function(e) {
// 	console.log(e);
// });

// only logs with a key that changes input like: abc#@$23 or spacebar
// does not listen to backspace
// does listen to enter
input.addEventListener('keypress', function(e) {
	console.log(e);
});

const addItemInput = document.querySelector('#addItem');
// global collection of items
const itemsUL = document.querySelector('#items');

// listen and check if keypress was Enter
addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';
	}
});
