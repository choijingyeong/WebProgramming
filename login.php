<?php
function test_input($data) {
    $data = ltrim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$id = test_input($_POST["id"]);
$pw = test_input($_POST["pw"]);

$isFind = false;
$my_file = fopen("./data/account.json", "r");

while(!feof($my_file)) {
    $my_line = fgets($my_file);

    $obj = json_decode($my_line);

    if($obj != "") {
        if(strcmp($obj->id, $id) == 0 && strcmp($obj->pw, $pw) == 0) {
            $isFind = true;
            echo $obj->username;
            break;
        }
    }
}
fclose($my_file);

if(!$isFind) {
    echo false;
}
?>