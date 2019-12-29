// document.querySelector - collects for matching item
// document.querySelectorAll - collects all times matching

const select = document.querySelector('p');
const q = document.querySelectorAll('li');
const doc = document.querySelectorAll('body section ul li.special');
console.log(doc);

// [] allows for selector attribute
const inp = document.querySelector('input[placeholder="write on me"]');
console.log(inp);
