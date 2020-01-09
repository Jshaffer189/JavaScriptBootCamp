// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

new Color(255, 40, 100);

// defined on the prototype
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function(a = 1) {
	const { r, g, b } = this;
	return `rgba(${r},${g},${b},${a})`;
};

// does not have rgb method defined on Constructor function
// has to be called color1.prototype.rgb
// this = (20, 55, 30)
const color1 = new Color(20, 55, 30);
// this = (0,0,0)
const color2 = new Color(0, 0, 0);
