// create empty H2 tag
let nH = document.createAttribute('h2');

nH.innerText = 'i like animals';

// add class 'special'
// nH.classList.add('special');

const newImg = document.createElement('img');
newImg.source =
	'https://images.unsplash.com/photo-1574620464696-278a9be1aaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

//
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'mr bub';
newLink.href = 'https://www.google.com/';
const firstP = document.querySelector('p');
firstP.appendChild(newLink);
