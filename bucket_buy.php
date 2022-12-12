<?php
$id = $_POST["id"];
$my_file = fopen("./data/person/" . $id . ".json", "r");
$arr = array();

while (!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if ($obj != "") {
        array_push($arr, $obj->id);
    }
}
fclose($my_file);

$my_file = fopen("./data/post.json", "r");
$result = "";
while (!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if ($obj != "") {
        for ($i = 0; $i < count($arr); $i++) {
            if (strcmp($obj->id, $arr[$i]) == 0) {
                $result .= '<section><img id="grape" class="img" src="./img/' . $obj->img . '" alt="사진">';
                $result .= '<div><h3>' . $obj->title . '</h3><br><br>';
                $result .= '<p>1kg당 ' . $obj->prize . '원<br>' . $obj->kg . 'kg 단위부터 판매 중</p></div></section>';
            }
        }
    }
}

echo $result;
?>