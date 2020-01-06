// function reqListener() {
// 	console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://www.example.org/example.txt');
// oReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('It Worked!');
	const data = JSON.parse(this.responseText);
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener('error', () => {
	console.log('ERRRROR!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('request Sent!');
