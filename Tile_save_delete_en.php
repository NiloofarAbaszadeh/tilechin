<?php
include ('db.php');
if(isset($_POST)){

    ////////////////  delete item from program //////////////////////////////
    /// //////////////////////////////////////////////////////////////////////////
    $sku_search = $_POST['skudelete'];
    echo $sku_search;
    echo "<br/>\n";
    $B=strchr($sku_search,"\"");
    $B=strchr($B,"4");
    echo $B;
    echo "<br/>\n";
    ///////////////////////////////////delete json////////////////////////////////////////////
//    $file = file_get_contents('./products.json');
//    $data = json_decode($file, true);
//    unset($file);
//    $i=0;
//    foreach($data['hits'] as $item) {
//        if($B == $item['sku']){
//            unset($data['hits'][$i]);
//            echo "json delete";
//            echo "<br/>\n";
//        }
//        $i++;
//    }
//    file_put_contents('./products.json',json_encode($data,JSON_UNESCAPED_UNICODE));
//    unset($data);//release memory
//
//    ///////////////////////////////////delete txml////////////////////////////////////////////
//    $file = 'visualiser.xml';
//    $xmldata = simplexml_load_file($file);
//    foreach($xmldata->channel->item as $theUser){
//        if($theUser->sku == $B){
//            $dom = dom_import_simplexml($theUser);
//            $dom->parentNode->removeChild($dom);
//        }
//    }
//    $xmldata->asXml($file);
//    echo "xml delete";
//    echo "<br/>\n";

    /////////////////// delete database /////////////////////////////////
    mysqli_query($conn, "SET NAMES utf8");
    $sql = "DELETE FROM tile_xml_table  where sku=$B ";
    $result = mysqli_query($conn, $sql);
    if (! empty($result)) {
        echo(" Tile Deleted successfully") ;
    } else {
        $error_message = mysqli_error($conn) . "\n";
    }

/////////////////////////////////////delete image in tiles _c , _n ////////////////////////
    $filename = 'tiles/' .$B.'_c.png'   ;
    if (file_exists($filename)) {
        unlink($filename);
        echo 'File '.$filename.' has been deleted';
        echo "<br/>\n";
    } else {
        echo 'Could not delete '.$filename.', file does not exist';
        echo "<br/>\n";
    }
    $filename = 'tiles/' .$B.'_n.png'   ;
    if (file_exists($filename)) {
        unlink($filename);
        echo 'File '.$filename.' has been deleted';
        echo "<br/>\n";
    } else {
        echo 'Could not delete '.$filename.', file does not exist';
        echo "<br/>\n";
    }
    ///////////////////////////////////delete image in thubnami/tile ////////////////////////
    $filename = 'thumbnails/tiles/' .$B.'.jpg'   ;
    if (file_exists($filename)) {
        unlink($filename);
        echo 'File '.$filename.' has been deleted';
        echo "<br/>\n";
    } else {
        echo 'Could not delete '.$filename.', file does not exist';
        echo "<br/>\n";
    }




    header("Location: /Tile_Edit_en.php");

}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"  />
    <link href="css/All.css" rel="stylesheet" />
    <link href="css/fontawesome.min.css" rel="stylesheet"/>
    <link href="css/filter-style.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="favicons/favicon.ico">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <style>
        body {font-family: IRANSans !important;}
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 45%;
        }
    </style>
</head>
<body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
