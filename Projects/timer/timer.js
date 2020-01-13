class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		// optional parameter(callbacks) check
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		// eventlistener to start count
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		// if callback was passed through constructor call onStart() function
		if (this.onStart) {
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
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			// Left setter = getter right
			this.timeRemaining = this.timeRemaining - 1;
			if (this.onTick) {
				this.onTick();
			}
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
