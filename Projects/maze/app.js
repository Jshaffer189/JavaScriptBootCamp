const { Engine, Render, Runner, World, Bodies } = Matter;
// Engine -
// Render -
// Runner -
// World - access to current app/game state
// Bodies - access to creating shape elements

const width = 600;
const height = 600;

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

// walls will be built by a two multi dimensional arrays
// vertical walls will allways have one less array than horizontal walls

// Grid array

const grid = Array(3)
	// 3 columns
	.fill(null)
	.map(() => Array(3).fill(false));
