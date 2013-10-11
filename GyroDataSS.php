<?php
$gyro = "gyroData";     
$alpha = $_GET['gyroData']['ALPHA'];
$beta = $_GET['gyroData']['BETA'];
$gamma = $_GET['gyroData']['GAMMA'];

$file = "RCDATA.json";

$json = json_decode(file_get_contents($file), true);

$json[$gyro] = array("alpha" => $alpha, "beta" => $beta, "gamma" => $gamma);

file_put_contents($file, json_encode($json));

echo"Alpha Value = ".$alpha;
echo"<br>";
echo"Beta Value = ".$beta;
echo"<br>";
echo"Gamma Value = ".$gamma;

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
