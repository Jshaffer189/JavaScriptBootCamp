// constructors are ran immediately
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	// prototype methods
	// this refers to the instance of the class ^
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgb${this.innerRGB()}, ${a}`;
	}
}

const c1 = new Color(255, 67, 89, 'tomato');
