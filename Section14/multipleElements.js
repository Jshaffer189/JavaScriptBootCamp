const allLis = document.querySelectorAll('li');

// access all li innerText with looping
for (let i = 0; i < allLis.length; i++) {
	allLis[i].innerText = 'We are the Champions';
}

// Changing styles using javascript
const n = document.querySelector('h1');
n.style = 'color: blue';

const g = document.querySelector('p');
g.style.color = 'purple';
