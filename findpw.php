<?php
$name = $_POST['name'];
$info = $_POST['info'];
$id = $_POST['id'];

$my_file = fopen("./data/account.json", "r");
$result = "false";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        if($obj->username == $name && $obj->email == $info|| $obj->phone == $info && $obj->id == $id) {
            $result = $obj->pw;
            break;
        }
    }
}

echo $result;
?>