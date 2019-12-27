const annoyer = {
	phrases: [ 'literally', 'cray cray', "I can't even stop", 'Totes!', 'YOLO' ],
	pickPhrase() {
		const { phrases } = this;
		const IDX = Math.floor(Math.random() * phrases.length);
		return phrases[IDX];
	},
	start() {
		console.log(this);
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};

annoyer.start();
