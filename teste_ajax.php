<?php
$_POST['data'] = ( isset($_POST['data']) ) ? $_POST['data'] : null;
echo "EXISTE!";

if(!empty($_POST['data'])){
    echo "RECEBEU ";
    $data = $_POST['data'];
    echo "data: ".$data;
    //$fname = mktime() . ".txt";//generates random name
    $fname = "upload/teste2.txt";
    echo " arquivo: ".$fname;
    $file = fopen( $fname, 'w+');//creates new file
    echo " .".isset($file);
    $w = fwrite($file, $data);
    echo ". .".isset($w);
    echo ". ";
    //file_put_contents($fname, $data);
    fclose($file);
}
?>