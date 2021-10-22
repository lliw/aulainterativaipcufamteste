<?php
$_POST['data'] = ( isset($_POST['data']) ) ? $_POST['data'] : null;
echo "EXISTE!";

echo " .";
echo exec('whoami');
echo ". .";
echo $_SERVER['HTTP_CLIENT_IP'];
echo ". .";

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

if(!empty($_POST['data'])){
    echo "RECEBEU ";
    $data = $_POST['data'];
    echo "data: ".$data;
    //$fname = mktime().".txt";//generates random name
    //$fname = "upload/teste2.txt";
    $fname = "upload/".$estudante_ip.mktime().exec('whoami').".txt";
    echo ", arquivo: ".$fname;
    $file = fopen( $fname, 'w+');//creates new file
    echo " .".isset($file);
    $w = fwrite($file, $data.mktime());
    echo ". .".isset($w);
    echo ". ";
    //file_put_contents($fname, $data);
    fclose($file);
}
?>