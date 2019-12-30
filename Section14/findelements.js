// .children one step down element nested
// .parentElement one step up element nested
// nextElementSibling
// previousElementSibling

const firstLI = document.querySelector('li');

// one step up to parent element
console.log(firstLI.parentElement);
// two steps up to parent element
console.log(firstLI.parentElement.parentElement);

const ulElm = document.querySelector('ul');

// access the children element
console.log(ulElm.children);
