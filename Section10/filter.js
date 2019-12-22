// creates new array with all elements that pass test

const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const odds = nums.filter((n) => n % 2 === 1);
// new array odds, filters to all odd numbers from nums
console.log(odds);
