<?php

$file = "RCDATA.json";
$json = file_get_contents($file);
$data = json_decode($json, true);

echo json_encode($data);
?>

