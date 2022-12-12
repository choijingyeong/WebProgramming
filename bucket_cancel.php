<?php
$user = $_POST["user"];
$arr = $_POST["arr"];
$my_file = fopen("./data/person/" . $user . ".json", "r");
$result = "";
while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    $flag = true;
    if($obj != ""){
        for($i=0; $i<count($arr); $i++) {
            if(strcmp($obj->id, $arr[$i]) == 0) {
                $flag = false;
            }
        }
        if($flag) {
            $result .= json_encode($obj, JSON_UNESCAPED_UNICODE) . "\n";
        }
    }
}
fclose($my_file);
file_put_contents("./data/person/" . $user . ".json", $result);

echo $result;
?>