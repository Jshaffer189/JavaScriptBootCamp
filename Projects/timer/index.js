// selectors
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let durration;
// class/constructor call
const timer = new Timer(durationInput, startButton, pauseButton, {
	// optional call back functions
	onStart(totalDuration) {
		durration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining) / duration - perimeter);
	},
	onComplete() {
		console.log('timer is completed');
	}
});
