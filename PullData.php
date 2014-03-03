<?php

$file = "RCDATA.json";
$json = file_get_contents($file);
$data = json_decode($json, true);
echo json_encode($data);
$beta = $data["beta"];
$gamma = $data["gamma"];
echo "<p></p>";
echo $beta;
echo "<p></p>";
echo $gamma;

$update = function($beta, $gamma){
shell_exec("/var/www/rctest.cgi $beta $gamma");
};

$update($beta, $gamma);


?>
