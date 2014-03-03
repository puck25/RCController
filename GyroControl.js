var centerbeta = 100; //where is the middle
var minbeta = '-600'; //right limit
var maxbeta = '600'; //left limit
var multbeta = 10; //factor to multiply the raw gyro figure by to get the desired rande of steering


var centergamma = 100;
var ajustmentgamma = 70; //what do we do to the angle to get to 0 an rest
var mingamma = 250; //backwards limit
var maxgamma = 400; //forward limit
var multgamma = 1; //factor to multiply the raw gyro figure by to get the desired rante os accalaration

window.lastbeta='0';
window.lastgamma='0';

$(function(){
  window.gyro = 'ready';
  alert('Ready -- Lets race !');
});

window.ondeviceorientation = function (event) {

    beta = centerbeta + (Math.round(event.beta * -1) * multbeta);
    if (beta >= maxbeta) {
        beta = maxbeta;
    }
    if (beta <= minbeta) {
        beta = minbeta;
    }
    gamma = event.gamma;
    gamma = ((Math.round(event.gamma) + ajustmentgamma) * multgamma) + centergamma;
    /*
    if (gamma >= maxgamma) {
        gamma = maxgamma;
    }
    if (gamma <= gamma) {
        gamma = mingamma;
    }
    */



    //stop sending the same command more than once
    send = 'N';
    if (window.lastbeta != beta) { send = 'Y' }
    if (window.lastgamma != gamma) { send = 'Y' }

    window.lastbeta = beta;
    window.lastgamma = gamma;

    if (window.gyro == 'ready' && send == 'Y') { //dont send another command until last one doone... its only a little pi
        window.gyro = 'notready';
        //  $.post("gyro.cgi", { beta: beta, gamma: gamma }, function(data) {
        //socket.emit('fromclient', { beta: beta, gamma: gamma } );
        window.gyro = 'ready';
        PHPRelay(beta, gamma);
        UpdateStats(beta, gamma);
        //    $('#info').text('Raw Beta: '+event.beta+' Send:'+beta);
        //    $('#info2').text('Raw Gamma: '+event.gamma+' Send:'+gamma + (Math.round(event.gamma)*multgamma));
        //  });
    }
}

function UpdateStats(GAMMA, BETA){
	console.log("Update");
    var beta = document.getElementById("beta");
    var gamma = document.getElementById("gamma");
    $(beta).html("Beta: " + BETA);
    $(gamma).html("Gamma: " + GAMMA);
	
};

function PHPRelay(BETA, GAMMA){
	console.log("Send Data");
    var betaaround = BETA;
    var gammaround = GAMMA;
    //console.log(alpharound, betaaround, gammaround);
    $.ajax({
        type: "post",
        url: 'GyroDataSS.php',
        data:{"beta":betaaround,"gamma":gammaround},
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
	
	/*var dataoutput = function () {
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
              
            }
        });
        setTimeout(function () { dataoutput() }, 200);
    }
    dataoutput();
	  */
}

