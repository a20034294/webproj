// ws 用於將資料從 client 傳給 server
// ws2 用於將資料從 server 傳給 client
var ws = new WebSocket('ws://140.116.250.16:8764');
var ws2 = new WebSocket('ws://140.116.250.16:8765');

ws.onopen = function (evt) {// ws.onopen 就代表 ws 順利連上 server 會做的事
	console.log("ws Connection open ...");// 拜託不要在意他 他沒有作用
};
ws2.onopen = function (evt) {// ws.onopen 就代表 ws 順利連上 server 會做的事
	console.log("ws2 Connection open ...");// 拜託不要在意他 他沒有作用
};
ws.onclose = function (evt) {// 斷線時會做的事
	console.log("ws Connection closed.");
};
ws2.onclose = function (evt) {// 斷線時會做的事
	console.log("ws2 Connection closed.");
};
