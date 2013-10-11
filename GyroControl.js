if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function (eventData) {
      var GAMMA = eventData.gamma;
      var BETA = eventData.beta;
      var ALPHA = eventData.alpha;
      ObjectMove(GAMMA, BETA, ALPHA);
      UpdateStats(GAMMA, BETA, ALPHA);
      PHPRelay(ALPHA, BETA, GAMMA);
  }, false);
} else {
        alert("Not supported on your device or browser.  Sorry.");
}



function ObjectMove(GAMMA, BETA, ALPHA){
	var ball = document.getElementById("ballControll");
	document.getElementById("ballControll").style.webkitTransform = "rotate("+ BETA +"deg)";
};


function UpdateStats(GAMMA, BETA, ALPHA){
    var alpha = document.getElementById("alpha");
    var beta = document.getElementById("beta");
    var gamma = document.getElementById("gamma");
    $(alpha).html("Alpha: " + Math.round(ALPHA));
    $(beta).html("Beta: " + Math.round(BETA));
    $(gamma).html("Gamma: " + Math.round(GAMMA));
};

function PHPRelay(ALPHA, BETA, GAMMA){
    $.ajax({
        type: "GET",
        url: 'GyroDataSS.php',
        data: {"gyroData":{"alpha":ALPHA,"beta":BETA,"gamma":GAMMA}},
        contentType: "application/json",
                    success: function(data)
                    {
                        console.log("Gyro Data Sent to server");
                    },
                    error: function(error)
		    {
			// Handle error
		    	console.log(error);
		    }

    });
   } 