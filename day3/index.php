<?php
$file_path = "./input.txt";

// $inputfiles = readfile($file_path);
$inputfiles = file_get_contents($file_path);

// echo $inputfiles;

$inputArray = explode("\n", $inputfiles);

$stringLength = 0;
$firstHalf  = "";
$secondHalf = "";
$points = [];
for ($i=0; $i < sizeof($inputArray); $i++) {
    $stringLength = strlen($inputArray[$i]);

    $firstHalf = substr($inputArray[$i], 0, $stringLength / 2);
    $secondHalf = substr($inputArray[$i], ($stringLength / 2), $stringLength);

    // echo "<p>" .  $inputArray[$i] . "</p>";
    echo "<p>" .  $firstHalf . " . . . . . . . .   " . $secondHalf . "</p>";
    $letter = FindDuplicate($firstHalf, $secondHalf);
    echo ConvertLetterToNumber($letter);
    array_push($points, ConvertLetterToNumber($letter));
}

function FindDuplicate($firstHalf, $secondHalf)
{
    for ($i=0; $i < strlen($secondHalf); $i++) {
        // echo $firstHalf[$i];
        $itemDuplicate = strpos($secondHalf, $firstHalf[$i]);
        if ($itemDuplicate !== false) {
            echo strpos($secondHalf, $firstHalf[$i]) . $firstHalf[$i] . " ";
            return $firstHalf[$i];
        }
    }
    return null;
}

function ConvertLetterToNumber($letter) {
    $points = 0;
    $alpha_arr =  range("a", "z");
    $points = array_search(strtolower($letter), $alpha_arr) +1;
     if (ctype_upper($letter)) {
        $points += 26;
     }
    return $points;
}



echo "<p>" . array_sum($points). "</p>";
