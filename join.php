<?php
$id = $_POST["id"];
$pw = $_POST["pw"];
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];

$myfile = fopen("./data/account.json", "a+");
$person = array();

$person["id"] = $id;
$person["pw"] = $pw;
$person["username"] = $name;
$person["email"] = $email;
$person["phone"] = $phone;

fwrite($myfile, json_encode($person, JSON_UNESCAPED_UNICODE)."\n");
fclose($myfile);
?>