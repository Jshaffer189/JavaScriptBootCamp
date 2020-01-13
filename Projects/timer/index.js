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
	onTick() {
		console.log('timer just tick');
	},
	onComplete() {
		console.log('timer is completed');
	}
});
