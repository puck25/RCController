<?php
$gyro = "gyroData";     
$alpha = $_POST['alpha'];
$beta = $_POST['beta'];
$gamma = $_POST['gamma'];

$file = "RCDATA.json";

$json = json_decode(file_get_contents($file), true);

$json[$gyro] = array("alpha" => $alpha, "beta" => $beta, "gamma" => $gamma);

file_put_contents($file, json_encode($json));


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>PHP Relay</title>
    </head>
    <body>
      <h1>Screen Relay</h1>
        <br>
          
    </body>
</html>
