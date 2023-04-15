<?php
$file_path = "./input.txt";

$inputfiles = file_get_contents($file_path);


$inputArray = explode("\n", $inputfiles);

$stringLength = 0;
$firstHalf  = "";
$secondHalf = "";
$points = [];

for ($i = 0; $i < sizeof($inputArray); $i++) {
    $stringLength = strlen($inputArray[$i]);

    $firstHalf = substr($inputArray[$i], 0, $stringLength / 2);
    $secondHalf = substr($inputArray[$i], ($stringLength / 2), $stringLength);

    $letter = FindDuplicate($firstHalf, $secondHalf);
    array_push($points, ConvertLetterToNumber($letter));
}

function FindDuplicate($firstHalf, $secondHalf)
{
    for ($i = 0; $i < strlen($secondHalf); $i++) {
        $itemDuplicate = strpos($secondHalf, $firstHalf[$i]);
        if ($itemDuplicate !== false) {
            return $firstHalf[$i];
        }
    }
    return null;
}

function ConvertLetterToNumber($letter)
{
    $points = 0;
    $alpha_arr =  range("a", "z");
    $points = array_search(strtolower($letter), $alpha_arr) + 1;
    if (ctype_upper($letter)) {
        $points += 26;
    }
    return $points;
}
$threeArray = [];
$pointsPartTwo = [];
for ($i = 0; $i < sizeof($inputArray); $i++) {

    if (count($threeArray) < 3) {
        array_push($threeArray, $inputArray[$i]);
    }

    if (count($threeArray) == 3) {
        $letter = FindDuplicateThree($threeArray);
        array_push($pointsPartTwo, ConvertLetterToNumber($letter));
        $threeArray = [];
    }
}
function sorting($a, $b)
{
    return strlen($b) - strlen($a);
}

function FindDuplicateThree($array)
{
    usort($array, 'sorting');
    $longest = $array[0];
    for ($i = 0; $i < strlen($longest); $i++) {
        $itemDuplicate1 = strpos($array[1], $longest[$i]);
        $itemDuplicate2 = strpos($array[2], $longest[$i]);
        if ($itemDuplicate1 !== false && $itemDuplicate2 !== false) {
            return $longest[$i];
        }
    }
    return null;
}

echo "<p> Part 1: " . array_sum($points) . "</p>";
echo "<p> Part 2: " . array_sum($pointsPartTwo) . "</p>";
