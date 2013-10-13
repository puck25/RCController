$(document).ready(function () {
    var dataoutput = function () {
        $.ajax({
            type: 'POST',
            url: 'PullData.php',
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                $('#alpha').html('Alpha: ' + data.alpha);
                $('#beta').html('Beta: ' + data.beta);
                $('#gamma').html('Gamma: ' + data.gamma);
                //document.getElementById("#alphaGraph").style.webkitTransform = "scale(10,"+ data.alpha +")";
                /*
                $('#alphaGraph').animate({height:data.alpha},40);
                $('#betaGraph').animate({height:data.beta},40);
                $('#gammaGraph').animate({height:data.gamma},40);
                */
            }
        });
        setTimeout(function () { dataoutput() }, 50);
    }
    dataoutput();
})