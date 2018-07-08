<?php
require("Randomizer.php");
$Randomizer  = new Pixeloution\Random\Randomizer;

$min = 1;
$max = 1000;
$data[0]=($Randomizer -> integer($min, $max));
echo $data[0];

?>