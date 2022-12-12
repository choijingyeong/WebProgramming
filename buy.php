<?php
$id = $_POST["id"];
$my_file = fopen("./data/post.json", "r");
$result = "";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        if($obj->id == $id) {
            $result .= '<img id="grape" class="img" src="./img/' . $obj->img . '" alt="사진">';
            $result .= '<div><h3>' . $obj->title . '</h3><br><br>';
            $result .= '<p>1kg당 '.$obj->prize.'원<br>'.$obj->kg.'kg 단위부터 판매 중</p></div>';
            break;
        }
    }
}

echo $result;
?>