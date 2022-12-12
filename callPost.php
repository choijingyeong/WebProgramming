<?php
$wid = $_POST["w_id"];
$myfile = fopen("./data/post.json", "r");

$find = array();
while(!feof($myfile)) {
    $my_line = fgets($myfile);
    $obj = json_decode($my_line);

    if($obj != "") {
        if(strcmp($obj->id, $wid) == 0) {
            $find["title"] = $obj->title;
            $find["prize"] = $obj->prize;
            $find["kg"] = $obj->kg;
            $find["img"] = $obj->img;
            break;         
        }
    }
}
fclose($myfile);
$find["writing"] = file_get_contents("./data/post/". $wid .".txt");

echo json_encode($find, JSON_UNESCAPED_UNICODE);
?>