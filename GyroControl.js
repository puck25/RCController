if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function (eventData) {
      var LR = eventData.gamma;
      var FB = eventData.beta;
      var DIR = eventData.alpha;
	  ObjectMove(LR, FB, DIR);
      UpdateStats(LR, FB, DIR);
  }, false);
} else {
        alert("Not supported on your device or browser.  Sorry.");
}


function ObjectMove(LR, FB, DIR){
	var ball = document.getElementById("ballControll");
	document.getElementById("ballControll").style.webkitTransform = "rotate("+ FB +"deg)";
};


function UpdateStats(LR, FB, DIR){
    var alpha = document.getElementById("alpha");
    var beta = document.getElementById("beta");
    var gamma = document.getElementById("gamma");
    $(alpha).html("Aplha: " + Math.round(LR));
    $(beta).html("Beta: " + Math.round(FB));
    $(gamma).html("Gamma: " + Math.round(DIR));
};


