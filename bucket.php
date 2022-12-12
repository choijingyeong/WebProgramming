<?php
$user = $_POST["user"];
$my_file = fopen("./data/person/".$user.".json", "r");

$id_arr = array();
$index = 0;
while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    if($obj != ""){
        $id_arr[$index][0] = $obj->id;
        $id_arr[$index][1] = $obj->num;
        $index++;
    }
}
fclose($my_file);

$my_file = fopen("./data/post.json", "r");
$result = '<input type="button" class="btn" id="cancel" value="취소하기">';
$total_sum = 0;
while(!feof($my_file)) {
    $my_line = fgets($my_file);
    $obj = json_decode($my_line);
    $sum = 0;
    if($obj != ""){
        for($i=0; $i<count($id_arr); $i++) {
            if($id_arr[$i][0] == $obj->id) {
                $sum = ($obj->prize * $obj->kg) * $id_arr[$i][1];
                $total_sum += $sum;

                $result .= '<section class="sum-info">';
                $result .= '<div><img class="img" src="./img/'. $obj->img .'" alt="포도사진"></div>';
                $result .= '<div><input type="checkbox" name="check" value="' . $obj->id . '">';
                $result .= '<h3>' . $obj->title . '</h3><br>';
                $result .= '<p>1kg당 '.$obj->prize.'<br>'.$obj->kg.'kg 단위로 판매 중</p><br>';
                $result .= '<div> 수량: '. $id_arr[$i][1] .'</div><br>';
                $result .= '<span>가격 합계: </span><span id="'.$obj->id.'_sum">'.$sum.'</span>';
                $result .= '</div></section>';
            }
        }
    }
}
$result .= '<section class="total"><div><span>총 가격 합계: </span>';
$result .= '<span id="totalsum">'.$total_sum.'</span></div></section>';

echo $result;
?>