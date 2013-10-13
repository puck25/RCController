$(document).ready(function () {
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
        }
    });
})