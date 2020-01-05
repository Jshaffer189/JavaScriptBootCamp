const btn = document.querySelector('button');

const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		} else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			// 4th parameter, the sucess callback func
			onSuccess();
		}
	}, delay);
};

moveX(btn, 100, 1000, () => {
	// 4th parameter, the callback function
	moveX(btn, 100, 1000, () => {
		moveX(btn, 100, 1000, () => {
			moveX(btn, 500, 1000, () => {});
		});
	});
});
