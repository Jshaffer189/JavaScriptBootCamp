class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
		}

		// eventlistener to start count
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			// if callback was passed through constructor call onStart() function
			this.onStart();
		}
		this.tick();
		// calling tick every second until paused
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
		} else {
			// Left setter = getter right
			this.timeRemaining = this.timeRemaining - 1;
		}
	};

	// getter, retrive time remaining
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	// setter, time being 'this'
	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}

// btn selectors
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// class/constructor call
const timer = new Timer(durationInput, startButton, pauseButton, {
	// optional call back functions
	onStart() {
		console.log('timer started');
	},
	onTick() {},
	onComplete() {}
});
