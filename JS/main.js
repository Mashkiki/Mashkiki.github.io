let D = ExpantaNum;

var points = D(0)
var c = D(1)
var rebirth = D(0)

function N(num) {
	if (num.lt(1e6)) return num.toString();
	if (num.lt("ee6"))
		return (
			Math.pow(10, num.log10().toNumber() % 1)
				.toFixed(2)
				.replace(/([0-9]+(.[0-9]+[1-9])?)(.?0+$)/, "$1") +
			"e" +
			num.log10().floor().toString()
		);
	if (num.lt("eee6")) return "e" + N(num.log10());
	return num.toString();
};

function updateGUI() {
	var virtualC = D.mul(c, D.add(rebirth, 1))
	document.getElementById("Points").textContent = "Points: " + " " + N(points)
	c = ExpantaNum.add(c, 0)
	document.getElementById("c").textContent = "Points/s: " + " " + N(virtualC)

	document.getElementById(0).textContent = "+" + N(D.mul(1,D.pow(10,0))) + " Points/s | " + N(D.mul(25,D.pow(12,0))) + " Points"
	document.getElementById(1).textContent = "+" + N(D.mul(1,D.pow(10,1))) + " Points/s | " + N(D.mul(25,D.pow(12,1))) + " Points"
	document.getElementById(2).textContent = "+" + N(D.mul(1,D.pow(10,2))) + " Points/s | " + N(D.mul(25,D.pow(12,2))) + " Points"
	document.getElementById(3).textContent = "+" + N(D.mul(1,D.pow(10,3))) + " Points/s | " + N(D.mul(25,D.pow(12,3))) + " Points"
	document.getElementById(4).textContent = "+" + N(D.mul(1,D.pow(10,4))) + " Points/s | " + N(D.mul(25,D.pow(12,4))) + " Points"
}

function Rebirth() {
	if (D.lte(1e6, points)) {
		points = 0
		c = 0
		rebirth = D.add(rebirth, 1)
	}
}

function btnClick() {
	points = D.add(points, D.mul(1, D.add(rebirth, 1)))
	if10Points()
}

function if10Points() {
	if (c >= 1) {
		document.getElementById("button").style.display = "none"
	}

	if (points >= 25) {
		document.getElementById("button").style.display = "none"
	}
}

function checkForRebirth() {
	if (D.lte(1e6, points)) {
		document.getElementById("rbBtn").style.display = "block"
	}

	if (D.lte(points, 1e6)) {
		document.getElementById("rbBtn").style.display = "none"
	}

	if (D.lte(1, rebirth)) {
		document.getElementById("rbBtn").style.display = "block"
		document.getElementById("rebirths").style.display = "block"
	}
}

function Click() {
    points = D.add(points, D.mul(c, D.add(rebirth, 1)))
	document.getElementById("Points").textContent = "Points: " + " " + N(points)
	document.getElementById("c").textContent = "Points/s: " + " " + N(c)
	document.getElementById("button").style.display = "block"
	rebirth = D.add(rebirth, 0)
}

function tick() {
	var virtualRebirth = D.add(rebirth, 1)
	if10Points()
	checkForRebirth()
	document.getElementById("rebirths").textContent = "Multiplier from rebirths: x" + N(virtualRebirth)
}

window.setInterval(function() {
    updateGUI()
}, 0.0001);
window.setInterval(function() {
    Click()
}, 1000);
window.setInterval(function() {
	tick()
}, 50);

window.onbeforeunload = closingCode;
function closingCode(){
   save()
   return null;
}