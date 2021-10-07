<?php
$_POST['data'] = ( isset($_POST['data']) ) ? $_POST['data'] : null;
echo "EXISTE!";

if(!empty($_POST['data'])){
    echo "RECEBEU";
    $data = $_POST['data'];
    echo $data;
    $fname = mktime() . ".txt";//generates random name
    echo $fname;
    $file = fopen( $fname, 'w');//creates new file
    echo isset($file);
    fwrite($file, $data);
    fclose($file);
}
?>