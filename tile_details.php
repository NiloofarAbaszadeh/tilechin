<?php

include ('db.php');
if(isset($_GET)) {

    $sku = $_GET['sku'];
    $results='';
    mysqli_query($conn, "SET NAMES utf8");
    $sql = "SELECT * FROM `tile_xml_table` WHERE sku='$sku'";
    $result = mysqli_query($conn, $sql);
    while($row =$result->fetch_assoc()) {
        $s = (array)$row;
        $s = implode("|",$s);
        var_dump($s);
    }
//    $file = 'visualiser.xml';
//    $xml = simplexml_load_file($file);
//    $s = $xml->channel->item;
//    $itemlength = count($s);
//    for ($i = 0; $i < $itemlength; $i++) {
//        $search=$xml->channel->item[$i]->sku;
//        if ($sku == $search) {
//            $results = $xml->channel->item[$i];
//        }
//    }
//    $s = (array)$results;
//    $s = implode("|",$s);
//    var_dump($s);
}

?>