
var canvas,
	ctx,
	width,
	height,
	img_rock,
	background,
	hp,
	grade,
	refresh;

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
	healthbar = new Image();
	healthbar.src = './blood_red_bar.png';
	over = new Image();
	over.src = './gameover.png';


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

	refresh = setInterval(function () {
		updateGame(0.5);
		renderGame();
		drawhealth();
		renderobstacle();
	}, 10);
	this.gameover = function(){
		grade = targets.get_grade();
		ctx.drawImage(over,0,0, canvas.width,canvas.height);//endgame
		if(Math.abs(grade) < 100){
			ctx.fillText(grade,550,280);
		}
		else if(Math.abs(grade) < 1000){
			ctx.fillText(grade,540,280);
		}
		else if(Math.abs(grade) < 10000){
			ctx.fillText(grade,530,280);
		}
		else{
			ctx.fillText(grade,520,280);	
		}
		ctx.font = "60pt Arial";
	}
}

function updateGame(dt) {
	bullets.update(dt*0.02);
	targets.update(dt);
	player.update(dt);
	hp = targets.player_health();//main get playerhealth 若hp < 0 endgame
	if(hp <= 0){
		clearInterval(refresh);//重制interval 
		setInterval(function () {
		gameover();
	}, 10);
	}
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
function drawhealth(){
	ctx.drawImage(healthbar, 10, 700,hp*50, 20);
	console.log('123');
}