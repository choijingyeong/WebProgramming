<?php
$my_file = fopen("./data/post.json", "a+");
$title = $_POST["title"];
$prize = $_POST["prize"];
$kg = $_POST["kg"];
$writing = $_POST["writing"];
$img = $_POST["img"];

$obj = '';
while(!feof($my_file)) {
    $my_line = fgets($my_file);
    if(json_decode($my_line) != ""){
        $obj = json_decode($my_line);
    }
}

$id = 0;
if ($obj != '') {
    $id = ((int)(substr($obj->id, 1)) + 1);
}

$write = array();
$write["id"] = "w".$id;
$write["title"] = $title;
$write["prize"] = (int)$prize;
$write["kg"] = (int)$kg;
$write['img'] = $img;

fwrite($my_file, json_encode($write, JSON_UNESCAPED_UNICODE)."\n");
fclose($my_file);

$my_file = fopen("./data/post/w".$id.".txt", "a+");
fwrite($my_file, $writing);
fclose($my_file);

?>