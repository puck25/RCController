<?php 
echo "Data Loaded"; 
$alpha = $_POST['alpha'];
$beta = $_POST['beta'];
$gamma = $_POST['gamma'];

$file = "RCDATA.json";
$json = array("alpha" => $alpha, "beta" => $beta, "gamma" => $gamma);

file_put_contents($file, json_encode($json));

?>
