<?php
$id = $_POST['id'];
$num = $_POST['num'];
$user = $_POST['user'];

$my_file = fopen("./data/person/" . $user . ".json", "a+");

$arr = array();
$flag = false;
$result = "";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);

    if($obj != "") {
        if($obj->id == $id) {
            $obj->num = $obj->num + (int) $num;
            $flag = true;
        }
        $result .= json_encode($obj, JSON_UNESCAPED_UNICODE) . "\n";
    }
}
file_put_contents("./data/person/" . $user . ".json", $result);

if(!$flag){
    $arr['id'] = $id;
    $arr['num'] = (int)$num;
    
    fwrite($my_file, json_encode($arr, JSON_UNESCAPED_UNICODE));
}
?>