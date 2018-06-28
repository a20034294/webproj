var oUl1 = document.getElementById('id_list');
var oUl2 = document.getElementById('score_list');
var oBtn1 = document.getElementById('btn1');
var oBtn2 = document.getElementById('btn2');
var oTxt1 = document.getElementById('txt1');
//var oTxt2 = document.getElementById('txt2');
//oTxt2.hidden = true;

oBtn1.onclick = function () {
	var aLi1 = document.createElement('li');
	var aLi2 = document.createElement('li');
	aLi1.innerHTML = oTxt1.value;
	aLi2.innerHTML = "";
	oUl1.appendChild(aLi1);
	oUl2.appendChild(aLi2);
	playerName = aLi1.innerHTML;
	console.log(aLi1.innerHTML);
	oTxt1.hidden = true;
	//oTxt2.hidden = true;
	this.hidden = true;
};
oBtn2.onclick = function () {
	for (var i = 0; i < oUl1.childNodes.length; i++) {
		if (oUl1.children[i].innerHTML == oTxt1.value) {
			oUl1.removeChild(oUl1.children[i]);
			oUl2.removeChild(oUl2.children[i]);
			break;
		}
	}
	oTxt1.value = '';
	oTxt2.value = '';
	changeScore('andy', 500);
};
function changeScore(name, score) {
	for (var i = 0; i < oUl1.childNodes.length; i++) {
		if (oUl1.children[i].innerHTML == name) {
			oUl2.children[i].innerHTML = score;
			break;
		}
	}
};