var targets = new Targets();
var player_hp = 10;//初始化player health
var img = new Image();
	img.src = './1.png';
var grade = 10;//init grade
function Targets(){
	
	this.objects = [];
	this.maxID = 0;
	this.init = function(target){
		target.src = img_rock;
		target.vx = target.v * Math.cos(target.angle);
		target.vy = target.v * Math.sin(target.angle);
		target.hitAnimClock = -1;
		target.scale = 1;
		target.alpfa = 0;
		target.nextAlpfa = 1;
	}
	this.push = function(target){
		this.init(target);
		var i = -1;
		while(this.objects[++i] != undefined);
		this.objects[i] = target;
		if(this.maxID < i) this.maxID = i;
	};
	this.getSize = function(){
		var size = 0;
		for(var i = 0;i < this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			size++;
		}
		return size;
	};
	this.player_health = function(){//回傳playerhealth值
		return player_hp;
	};
	this.update = function(dt){
		console.log(grade);//retrun grade
		for(var i = 0;i < this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			var obj = this.objects[i];
			
			obj.x += obj.vx * dt;
			obj.y += obj.vy * dt;
			
			if(obj.alpfa != obj.nextAlpfa){
				obj.alpfa += (obj.nextAlpfa - obj.alpfa)/10
			}2
			
			if(obj.alpfa > 0.1){
				var info = bullets.getMinInfo(obj);
				var p_info = player.getMinInfo(obj);
				if(info.dist <= obj.size * obj.scale){     
					info.object.remove = true;
					grade = grade + 50;
					if(obj.hitAnimClock == -1)
						obj.hitAnimClock = 0;
				}
				else if(p_info.dist <= obj.size * obj.scale){
					p_info.object.remove = true;
					grade = grade-20;
					player_hp = player_hp - 0.5;
					if(obj.hitAnimClock == -1)
						obj.hitAnimClock = 0;
				}
			}
			if(obj.hitAnimClock != -1){
				obj.hitAnimClock += dt;
				if(obj.hitAnimClock >= 1){
					delete this.objects[i];
					continue;
				}
			}
			if(
				obj.x < 0 || obj.y < 0 ||
				obj.x > width || obj.y > height
				)
			delete this.objects[i];
		}
		
		if(this.getSize() < 10){
			this.push({
				x:Math.random()*width,
				y:Math.random()*height,
				v:5,
				angle:Math.random()*2*Math.PI,
				size:25,	
			});
		}
	};
	this.render = function(ctx){
		for(var i = 0;i < this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			
			var obj = this. objects[i];
			
			obj.scale = 1;
			if(obj.hitAnimClock != -1){
				obj.alpfa = 1 - obj.hitAnimClock*1.5;
				if(obj.alpfa < 0)obj.alpfa = 0;
				obj.scale = 1 + 2 * obj.hitAnimClock;
				obj.nextAlpfa = obj.alpfa;
			}
			pattern = ctx.createPattern(img,'repeat');
			ctx.fillStyle = pattern;
			ctx.globalAlpha=obj.alpfa;
			ctx.beginPath();
			ctx.arc(obj.x,obj.y,obj.size * obj.scale,0,6.28);
			ctx.fill();
			ctx.globalAlpha=1;
		}
	};
}