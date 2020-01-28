const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
// World - Object that Contains all matter app context
// Engine - Reads current state of world object and calculates change in position
// Runner - runs the world and engine togethor 60fps
// Render - render changes on screen by engine update
// Bodies - access to creating shape elements

const cellsHorizontal = 16;
const cellsVertical = 15;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
// vertical gravity off
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width: width,
		height: height
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
	Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
	Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

// Generate Maze

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

const grid = Array(cellsVertical)
	//
	.fill(null)
	.map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
	//
	.fill(null)
	.map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
	//
	.fill(null)
	.map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

// single step
const stepThroughCell = (row, column) => {
	// if row is cell is visted, return
	if (grid[row][column]) {
		return;
	}

	// Mark the cell is visited
	grid[row][column] = true;

	const neighbors = shuffle([
		// near by cells
		[ row - 1, column, 'up' ],
		[ row, column + 1, 'right' ],
		[ row + 1, column, 'down' ],
		[ row, column - 1, 'left' ]
	]);

	// random list of neighbors
	for (let neighbor of neighbors) {
		// destructur within for loop
		const [ nextRow, NextColumn, direction ] = neighbor;
		if (
			// if neighbor is out of bounds
			nextRow < 0 ||
			nextRow >= cellsVertical ||
			NextColumn < 0 ||
			NextColumn >= cellsHorizontal
		) {
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

// walls

horizontals.forEach((row, rowIndex) => {
	row.forEach((open, columnIndex) => {
		if (open === true) {
			return;
		}

		const wall = Bodies.rectangle(
			columnIndex * unitLengthX + unitLengthX / 2,
			rowIndex * unitLengthY + unitLengthY,
			unitLengthX,
			5,
			{
				label: 'wall',
				isStatic: true,
				render: {
					fillStyle: 'red'
				}
			}
		);
		World.add(world, wall);
	});
});

verticals.forEach((row, rowIndex) => {
	row.forEach((open, columnIndex) => {
		if (open) {
			return;
		}

		const wall = Bodies.rectangle(
			columnIndex * unitLengthX + unitLengthX,
			rowIndex * unitLengthY + unitLengthY / 2,
			5,
			unitLengthY,
			{
				label: 'wall',
				isStatic: true,
				render: {
					fillStyle: 'red'
				}
			}
		);
		World.add(world, wall);
	});
});

// Goal
const goal = Bodies.rectangle(
	//
	width - unitLengthX / 2,
	height - unitLengthY / 2,
	unitLengthX * 0.7,
	unitLengthY * 0.7,
	{
		label: 'goal',
		isStatic: true,
		render: {
			fillStyle: 'green'
		}
	}
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
	//
	unitLengthX / 2,
	unitLengthY / 2,
	ballRadius,
	{
		label: 'ball',
		render: {
			fillStyle: 'blue'
		}
	}
);

World.add(world, ball);

document.addEventListener('keydown', (event) => {
	const { x, y } = ball.velocity;

	if (event.keyCode === 87) {
		// up
		Body.setVelocity(ball, { x, y: y - 5 });
	}

	if (event.keyCode === 68) {
		// right
		Body.setVelocity(ball, { x: x + 5, y });
	}

	if (event.keyCode === 83) {
		// down
		Body.setVelocity(ball, { x, y: y + 5 });
	}

	if (event.keyCode === 65) {
		// left
		Body.setVelocity(ball, { x: x - 5, y });
	}
});

// Win Condition

Events.on(engine, 'collisionStart', (event) => {
	event.pairs.forEach((collision) => {
		const labels = [ 'ball', 'goal' ];
		if (
			//
			labels.includes(collision.bodyA.label) &&
			labels.includes(collision.bodyB.label)
		) {
			document.querySelector('.winner').classList.remove('hidden');
			world.gravity.y = 1;
			world.bodies.forEach((body) => {
				if (body.label === 'wall') {
					Body.setStatic(body, false);
				}
			});
		}
	});
});
