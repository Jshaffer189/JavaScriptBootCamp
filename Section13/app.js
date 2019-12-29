const img = document.getElementById('bear-photo');
// console.dir logs a director of object
console.dir(img);

// return a collection(not an array) of elements selected
const elm = document.getElementsByTagName('input');
console.log(elm);
// select by index
console.log(elm[1]);

const arr = [ ...elm ];
console.log(arr);
