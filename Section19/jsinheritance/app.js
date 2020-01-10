class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

// inherit from Pet class
class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		// super references the class that we are extending
		super(name, age);

		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOOFFF';
	}
}

const d1 = new Dog();
