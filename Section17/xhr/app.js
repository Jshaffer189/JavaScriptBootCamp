// function reqListener() {
// 	console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://www.example.org/example.txt');
// oReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('First request worked!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('2nd Request worked');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	});
	filmReq.addEventListener('error', (e) => {
		console.log('erorrrrr!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', () => {
	console.log('ERRRROR!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('request Sent!');
