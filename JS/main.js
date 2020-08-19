let D = ExpantaNum;

var points = D(0)
var c = D(1)

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
	document.getElementById("Points").textContent = "Points: " + " " + N(points)
	c = ExpantaNum.add(c, 0)
	document.getElementById("c").textContent = "Points/s: " + " " + N(c)

	document.getElementById(0).textContent = "+" + N(D.mul(1,D.pow(10,0))) + " Points/s | " + N(D.mul(25,D.pow(12,0))) + " Points"
	document.getElementById(1).textContent = "+" + N(D.mul(1,D.pow(10,1))) + " Points/s | " + N(D.mul(25,D.pow(12,1))) + " Points"
	document.getElementById(2).textContent = "+" + N(D.mul(1,D.pow(10,2))) + " Points/s | " + N(D.mul(25,D.pow(12,2))) + " Points"
}

function Click() {
    points = D.add(points, c)
	document.getElementById("Points").textContent = "Points: " + " " + N(points)
	document.getElementById("c").textContent = "Points/s: " + " " + N(c)
}

window.setInterval(function() {
    updateGUI()
}, 0.0001);
window.setInterval(function() {
    Click()
}, 1000);

window.onbeforeunload = closingCode;
function closingCode(){
   save()
   return null;
}