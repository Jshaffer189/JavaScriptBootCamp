//  the thing       event type      the code to run
//   button        click        change the color
//  input       hits return     get search results
//  image       mouseover       display the img caption

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	alert('clicked!!!!!!!!!!!!!!');
});

btn.addEventListener('click', function() {
	console.log('clicked me bro');
});

btn.addEventListener('mouseover', function() {
	btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'click me';
});

window.addEventListener('scroll', function() {
	console.log('stop scrolling');
});
