const h1 = document.querySelector('h1');
// .innerText access the text in tag
console.log(h1.innerText);

const ul = document.querySelector('ul');
// log the nested text inside ul/li
console.log(ul.innerText);

// update innerText of h1 querySelector
h1.innerText = 'im hungry';

const p = document.querySelector('#main');

// innerText returns only text no formatting
console.log(p.innerText);
// textContent includes scripts and all text and hidden
console.log(p.textContent);

const form = document.querySelector('form');
// logs all text and tags in form
console.log(form.textContent);
console.log(form.innerHTML);
console.log(form.innerText);

const h = document.querySelector('h1');
h.innerHTML += ' is cool!';

const inputs = document.querySelectorAll('input');
// access the first value of the form element and places the 'yes' string in the text box
inputs[0].value = 'yes';

const a = document.querySelector('a');
console.log(a);

const range = document.querySelector('input[type="range"]');
console.log(range);
range.getAttribute('max');

range.value;
