<?php
//Recebendo dados do material
$_POST['data'] = ( isset($_POST['data']) ) ? $_POST['data'] : null;

//Identificando usuário
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

$estudante_ip = get_client_ip();
$estudante_ip = str_replace(array(":"), '', $estudante_ip);

//Escrevendo em arquivo
if(!empty($_POST['data'])){
    $data = $_POST['data'];
    //$fname = $estudante_ip.".txt";
    $fname = "teste.txt";
    echo "Dado escrito no arquivo: ".$fname."\n";
    echo $data;
    $file = fopen( $fname, 'a+');
    fwrite($file, $data);
    fclose($file);
}

?>