const { Engine, Render, Runner, World, Bodies } = Matter;
// World - Object that Contains all matter app context
// Engine - Reads current state of world object and calculates change in position
// Runner - runs the world and engine togethor 60fps
// Render - render changes on screen by engine update
// Bodies - access to creating shape elements

const cells = 3;
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: true,
		width: width,
		height: height
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Rectangle border Walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
	Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
	Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];

World.add(world, walls);

const shuffle = (arr) => {
	let counter = arr.length;

	while (counter > 0) {
		const index = Math.floor(Math.random() * counter);

		counter--;
		const temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}
	return arr;
};

const grid = Array(cells)
	// 3 columns
	.fill(null)
	.map(() => Array(cells).fill(false));

const verticals = Array(cells)
	//
	.fill(null)
	.map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
	//
	.fill(null)
	.map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

// single step
const stepThroughCell = (row, column) => {
	if (grid[row][column]) {
		return;
	}

	grid[row][column] = true;

	const neighbors = shuffle([
		// near by cells
		[ row - 1, column, 'up' ],
		[ row, column + 1, 'right' ],
		[ row + 1, column, 'down' ],
		[ row, column - 1, 'left' ]
	]);

	for (let neighbor of neighbors) {
		// destructur within for loop
		const [ nextRow, NextColumn, direction ] = neighbor;
		if (nextRow < 0 || nextRow >= cells || NextColumn < 0 || NextColumn >= cells) {
			continue;
		}

		if (grid[nextRow][NextColumn]) {
			continue;
		}

		if (direction === 'left') {
			verticals[row][column - 1] = true;
		} else if (direction === 'right') {
			verticals[row][column] = true;
		} else if (direction === 'up') {
			horizontals[row - 1][column] = true;
		} else if (direction === 'down') {
			horizontals[row][column] = true;
		}
		stepThroughCell(nextRow, NextColumn);
	}
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
	row.forEach((open, columnIndex) => {
		if (open === true) {
			return;
		}

		const wall = Bodies.rectangle(
			columnIndex * unitLength + unitLength / 2,
			rowIndex * unitLength + unitLength,
			unitLength,
			10,
			{
				isStatic: true
			}
		);
		World.add(world, wall);
	});
});

verticals.forEach((row, rowIndex) => {
	row.forEach((columnIndex) => {});
});
