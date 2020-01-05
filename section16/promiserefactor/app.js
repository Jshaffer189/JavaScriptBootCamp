const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveX(btn, 200, 1000)
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.catch(({ bodyBoundary, elRight, amount }) => {
		console.log(`body is ${bodyBoundary}`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});

// moveX(btn, 100, 1000, () => {
// 	// 4th parameter, the callback function
// 	moveX(btn, 100, 1000, () => {
// 		moveX(btn, 100, 1000, () => {
// 			moveX(btn, 500, 1000, () => {});
// 		});
// 	});
// });
