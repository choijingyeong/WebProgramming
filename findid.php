<?php
$name = $_POST['name'];
$info = $_POST['info'];

$my_file = fopen("./data/account.json", "r");
$result = "false";

while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        if(strcmp($obj->username, $name) == 0 && strcmp($obj->email, $info) == 0 || strcmp($obj->phone, $info) == 0) {
            $result = $obj->id;
            break;
        }
    }
}

echo $result;
?>