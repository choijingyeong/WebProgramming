<?php
$my_file = fopen("./data/post.json", "r");
$result = "";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        $result .= "<span id='" . $obj->id . "' onclick='toBuy(event)'>" . $obj->title . "</span><br>";
    }
}

echo $result;

?>