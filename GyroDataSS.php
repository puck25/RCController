<?php 
echo "Data Loaded"; 
$beta = $_POST['beta'];
$gamma = $_POST['gamma'];

$file = "RCDATA.json";
$json = array("beta" => $beta, "gamma" => $gamma);

file_put_contents($file, json_encode($json));

$update = function($beta, $gamma){
shell_exec("/var/www/rctest.cgi $beta $gamma");
};

$update($beta, $gamma);

?>
