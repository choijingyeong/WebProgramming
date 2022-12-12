<?php
$file = $_FILES["file"]["tmp_name"];
$file_addr = "./img/".$_FILES["file"]["name"];

$file_upload = move_uploaded_file($file, $file_addr);
?>