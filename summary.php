<?php
$my_file = fopen("./data/post.json", "r");

$result = "<span id='write'>글 쓰기</span>";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        $result .= "<section class='".$obj->id."' onclick='toBuy(event)' >";
        $result .= "<div><img class='".$obj->id."' src='./img/". $obj->img ."' alt='사진'></div>";
        $result .= "<div><h3 class='".$obj->id."'>". $obj->title ."</h3><br><br>";
        $result .= "<p class='".$obj->id."'>1kg당 ".$obj->prize."원<br>".$obj->kg."kg 단위로 판매 중</p></div>";
        $result .= "</section>";
    }
}

echo $result;
?>