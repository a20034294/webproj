var player = new Player();
var	mousex;
var	mousey;
function Player(){
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.v = 0;
	this.angle = 0;
	this.lastShootTime = 0;
	this.stats = {maxV:100,dAngle:0.03,acc:2,shootDelayMs:100};
	this.update = function(dt){
		if(keyLogger.keyStatus.up){
			if(this.y < 362 && this.y >40 && this.x < 312 && this.x > 188)			
				this.y = this.y;
			else if(this.y < 412 && this.y >290 && this.x < 812 && this.x > 488)
				this.y = this.y;
			else if(this.y < 212 && this.y >90 && this.x < 1062 && this.x > 738)
				this.y = this.y;
			else if(this.y < 612 && this.y >390 && this.x < 1012 && this.x > 888)
				this.y = this.y;
			else
				this.y -= this.stats.acc;
		}
		if(keyLogger.keyStatus.down){
			if(this.y < 360 && this.y >37 && this.x < 312 && this.x > 188)
				this.y = this.y;
			else if(this.y < 410 && this.y >287 && this.x < 812 && this.x > 488)
				this.y = this.y;
			else if(this.y < 210 && this.y >87 && this.x < 1062 && this.x > 738)
				this.y = this.y;
			else if(this.y < 610 && this.y >387 && this.x < 1012 && this.x > 888)
				this.y = this.y;
			else
			this.y += this.stats.acc;
		}
		if(keyLogger.keyStatus.left){
			if(this.y < 360 && this.y >40 && this.x < 314 && this.x > 188)
				this.x = this.x;
			else if(this.y < 410 && this.y >290 && this.x < 814 && this.x > 488)
				this.x = this.x;
			else if(this.y < 210 && this.y >90 && this.x < 1064 && this.x > 738)
				this.x = this.x;
			else if(this.y < 610 && this.y >390 && this.x < 1014 && this.x > 888)
				this.x = this.x;
			else
				this.x -= this.stats.acc;
		}
		if(keyLogger.keyStatus.right){
			if(this.y < 360 && this.y >40 && this.x < 312 && this.x > 186)
				this.x = this.x;
			else if(this.y < 410 && this.y >290 && this.x < 812 && this.x > 486)
				this.x = this.x;
			else if(this.y < 210 && this.y >90 && this.x < 1062 && this.x > 736)
				this.x = this.x;
			else if(this.y < 610 && this.y >390 && this.x < 1012 && this.x > 886)
				this.x = this.x;
			else
			this.x += this.stats.acc;
			
		}

		var time = utils.getTime();
		if(keyLogger.keyStatus.fire &&
			time - this.lastShootTime >= this.stats.shootDelayMs){
			bullets.push({
				x:this.x,
				y:this.y,
				angle:this.angle,
				v:250
			});
			this.lastShootTime = time;
		}
		
	};
	this.calculateAngle = function(e){
		var mousex = e.clientX;
		var mousey = e.clientY;
		if((mousex-this.x) > 0){
      	this.angle = Math.atan((mousey-this.y)/(mousex-this.x));}
		else
		this.angle = Math.atan((mousey-this.y)/(mousex-this.x))+Math.PI;	
	};
	this.render = function(ctx){
		ctx.fillStyle="#FF0000";
		ctx.beginPath();
		ctx.arc(this.x,this.y,10,0,6.28);
		ctx.fill();
	
		ctx.strokeStyle="#FF0000";
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		var pointerLength = 25;
		ctx.lineTo(
			this.x + pointerLength * Math.cos(this.angle),
			this.y + pointerLength * Math.sin(this.angle)
			);
		ctx.stroke();
	};
	
}