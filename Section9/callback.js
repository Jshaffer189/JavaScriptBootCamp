// Call Back Functions: a function passed into another function as an argument, that is invoked inside the outer function

function grumpus() {
	alert('Merry Christmas');
}

// sets a function, time delay
// setTimeout(function() {
// 	alert('welcome');
// }, 5000);

const btn = document.querySelector('button');
// event lister for btn on 'click' run next function/anonymous function
btn.addEventListener('click', function() {
	//alert('Why did you click me!');
});
