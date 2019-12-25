//

const getStats = (arr) => {
	// MAX: 5.0
	const MAX = Math.max(...arr);
	const MIN = Math.min(...arr);
	const SUM = arr.reduce((sum, r) => sum + r);
	const AVG = SUM / arr.length;

	return {
		MAX,
		MIN,
		SUM,
		AVG
	};
};

const REVIEWS = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

const STATS = getStats(REVIEWS);

console.log(STATS);
