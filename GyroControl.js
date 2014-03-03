if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function (eventData) {
      var GAMMA = eventData.gamma*2;
      var BETA = eventData.beta*8;
      var ALPHA = eventData.alpha;
      //ObjectMove(GAMMA, BETA, ALPHA);
	  UpdateStats(GAMMA, BETA, ALPHA);
	  PHPRelay(ALPHA, BETA, GAMMA);  
  }, false);
} else {
        alert("Not supported on your device or browser.  Sorry!");
}


/*
function ObjectMove(GAMMA, BETA, ALPHA){
	var ball = document.getElementById("ballControll");
	document.getElementById("ballControll").style.webkitTransform = "rotate("+ BETA +"deg)";
};
*/

function UpdateStats(GAMMA, BETA, ALPHA){
	console.log("Update");
    var alpha = document.getElementById("alpha");
    var beta = document.getElementById("beta");
    var gamma = document.getElementById("gamma");
    $(alpha).html("Alpha: " + Math.round(ALPHA));
    $(beta).html("Beta: " + Math.round(BETA));
    $(gamma).html("Gamma: " + Math.round(GAMMA));
	
};

function PHPRelay(ALPHA, BETA, GAMMA){
	console.log("Send Data");
    var alpharound = Math.round(ALPHA);
    var betaaround = Math.round(BETA);
    var gammaround = Math.round(GAMMA);
    //console.log(alpharound, betaaround, gammaround);
    $.ajax({
        type: "post",
        url: 'GyroDataSS.php',
        data:{"alpha":alpharound,"beta":betaaround,"gamma":gammaround},
                    success: function(data)
                    {
                        console.log(data);
                    },
                    error: function(xhr, ajaxOptions, thrownError)
		    {
			// Handle error
		    	console.log(xhr.responseText);
		    }

    });
	
	var dataoutput = function () {
        $.ajax({
            type: 'POST',
            url: 'PullData.php',
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                //$('#alpha').html('Alpha: ' + data.alpha);
                //$('#beta').html('Beta: ' + data.beta);
                //$('#gamma').html('Gamma: ' + data.gamma);
                //document.getElementById("#alphaGraph").style.webkitTransform = "scale(10,"+ data.alpha +")";
                /*
                $('#alphaGraph').animate({height:data.alpha},40);
                $('#betaGraph').animate({height:data.beta},40);
                $('#gammaGraph').animate({height:data.gamma},40);
                */
            }
        });
        setTimeout(function () { dataoutput() }, 200);
    }
    dataoutput();
	
}

