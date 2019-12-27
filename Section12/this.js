// Globally this refers to the window

function sayHi() {
	console.log('hi');
	console.log(this);
}
sayHi();

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		// person object
		console.log(this);
		// Cherilyn
		console.log(this.first);
		// Cherilyn Sarkisian AKA Cher
		// Destructure and group
		const { first, last, nickName } = this;
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		const FULLNAME = this.fullName();
		console.log(`${FULLNAME} is a person!`);
	}
};

// Cherilyn Sarkisian AKA Cher is a person!
person.printBio();
