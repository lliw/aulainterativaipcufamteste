<?php
$_POST['data'] = ( isset($_POST['data']) ) ? $_POST['data'] : null;
echo "EXISTE!";

if(!empty($_POST['data'])){
    echo "RECEBEU";
    $data = $_POST['data'];
    $fname = mktime() . ".txt";//generates random name

    $file = fopen( $fname, 'w');//creates new file
    fwrite($file, $data);
    fclose($file);
}
?>