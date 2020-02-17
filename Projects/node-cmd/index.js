const counterObject = require('./myscript');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myscript');

console.log(newCounterObject.getCounter());

// node --inspect=127.0.0.1:9230
