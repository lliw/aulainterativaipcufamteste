<?php
if(!empty($_POST['data'])){
    echo "RECEBEU";
    $data = $_POST['data'];
    $fname = mktime() . ".txt";//generates random name

    $file = fopen( $fname, 'w');//creates new file
    fwrite($file, $data);
    fclose($file);
}
?>