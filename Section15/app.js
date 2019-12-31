//  the thing       event type      the code to run
//   button        click        change the color
//  input       hits return     get search results
//  image       mouseover       display the img caption

const btn = document.querySelector('#clicker');

btn.onclick = function() {
	console.log('you clicked me');
};

btn.ondblclick = function() {
	console.log('double');
};
