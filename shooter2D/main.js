
var canvas,
	ctx,
	width,
	height,
	img_rock,
	background;

function init() {

	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
	//img
	img_rock = new Image();
	img_rock.src = './spike 2.png';
	img_rock2 = new Image();
	img_rock2.src = './spike 1.png';
	background = new Image();
	background.src = './background.png';


	window.onkeydown = keyLogger.keyDownListener;
	window.onkeyup = keyLogger.keyUpListener;
	window.addEventListener('mousemove', (e) => {
		player.calculateAngle(e);
		keyLogger.mousefire(e);
	})
	//Init player
	player.x = width / 2;
	player.y = height * 2 / 3;

	//Main game loop

	setInterval(function () {
		updateGame(0.5);
		renderGame();
		renderobstacle();
	}, 10);

}

function updateGame(dt) {
	bullets.update(dt*0.02);
	targets.update(dt);
	player.update(dt);
}

function renderGame() {
	renderBackground();
	player.render(ctx);
	bullets.render(ctx);
	targets.render(ctx);
}
function renderBackground() {
	//ctx.fillStyle = "#c6c6c6";
	ctx.fillStyle = ctx.createPattern(background, 'repeat');
	ctx.fillRect(0, 0, width, height);

}
function renderobstacle() {
	//ctx.fillStyle = "rgb(150,150,0)";
	ctx.drawImage(img_rock, 200, 50, 100, 300);
	ctx.drawImage(img_rock2, 500, 300, 300, 100);
	ctx.drawImage(img_rock2, 750, 100, 300, 100);
	ctx.drawImage(img_rock, 900, 400, 100, 200);
}
