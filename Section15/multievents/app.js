const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet' ];

const changeColor = function() {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;

	// this - the box object
	console.log(this);
	// this.backgroundcolor of box object
	console.log(this.style.backgroundColor);
};

const container = document.querySelector('#boxes');
for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	// box.addEventListener('click', function() {
	// 	printColor(box);
	// });
	box.addEventListener('click', changeColor);
}
