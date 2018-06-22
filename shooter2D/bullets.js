var bullets = new Bullets();

function Bullets() {
	this.objects = [];
	this.maxID = 0;

	this.init = function (bullet) {
		bullet.vx = bullet.v * Math.cos(bullet.angle);
		bullet.vy = bullet.v * Math.sin(bullet.angle);
	}
	this.push = function (bullet) {

		this.init(bullet);

		var id = -1;
		//Search empty space
		while (this.objects[++id] != undefined);
		this.objects[id] = bullet;
		if (id > this.maxID) this.maxID = id;
	};

	this.update = function (dt) {
		for (var i = 0; i <= this.maxID; i++) {
			if (this.objects[i] == undefined) continue;

			var obj = this.objects[i];

			obj.x += obj.vx * dt;
			obj.y += obj.vy * dt;
			//Detect if on screen
			if (obj.x > 200 && obj.x < 300 && obj.y < 350 && obj.y > 50)
				delete this.objects[i];
			else if (obj.x > 500 && obj.x < 800 && obj.y < 400 && obj.y > 300)
				delete this.objects[i];
			else if (obj.x > 750 && obj.x < 1050 && obj.y < 200 && obj.y > 100)
				delete this.objects[i];
			else if (obj.x > 900 && obj.x < 1000 && obj.y < 600 && obj.y > 400)
				delete this.objects[i];
			if (obj.x < 0 || obj.y < 0 ||
				obj.x > width || obj.y > height ||
				obj.remove)
				delete this.objects[i];
			console.log(i + " " + obj.type + " " + obj.x + " " + obj.y);
			//ws.send(id + " " + obj.type + " " + obj.x + " " + obj.y);
		}
	}

	this.render = function (ctx) {
		ctx.fillStyle = "#000000";
		for (var i = 0; i < this.maxID; i++) {
			if (this.objects[i] == undefined) continue;

			var obj = this.objects[i];
			ctx.beginPath();
			ctx.arc(obj.x, obj.y, 2, 0, 6.28);
			ctx.fill();
		}
	};

	this.getSize = function () {
		var size = 0;
		for (var i = 0; i <= this.maxID; i++) {
			if (this.objects[i] == undefined) continue;
			size++;
		}
		return size;
	};

	this.getMinInfo = function (o) {
		var dist = 99999;
		var obj;
		for (var i = 0; i <= this.maxID; i++) {
			if (this.objects[i] == undefined) continue;
			var d = Math.sqrt(
				(o.x - this.objects[i].x) * (o.x - this.objects[i].x) +
				(o.y - this.objects[i].y) * (o.y - this.objects[i].y)
			);
			if (d < dist) {
				dist = d;
				obj = this.objects[i];
			}
		}
		return { dist: dist, object: obj };
	};

}

