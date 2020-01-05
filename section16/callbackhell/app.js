const btn = document.querySelector('button');

const moveX = (element, amount, delay, callback) => {
	setTimeout(() => {
		element.style.transform = `translateX(${amount}px)`;
		if (callback) callback();
	}, delay);
};

moveX(btn, 100, 1000, () => {
	// 4th parameter, the callback function
	moveX(btn, 200, 1000, () => {
		moveX(btn, 300, 1000, () => {
			moveX(btn, 400, 1000, () => {});
		});
	});
});
