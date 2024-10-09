<?php
include ('loginpage.php');
include ('db.php');
if(!isset($_SESSION['login_user'])){
    header("Location: index.php");
}

if(isset($_POST)){
    $data="";
    echo ("data successfull added"."<br/>\n");
    $data = $_POST;
    $sku_search = $_POST['sku'];
//        echo $sku_search;
//        echo "<br/>\n";
    $B=strchr($sku_search,"\"");
    $B=strchr($B,"4");
    $skusampl=$B;
    $skusample=(string)$skusampl;
    $array = str_split($data['size']);
    $s=count($array);
    $heigth="";
    $width="";
    $set =false;
    for ($i = 0; $i < $s;$i++){
        if($array[$i] != 'x'){
            if(!$set){
                $heigth.=$array[$i];
            }
            elseif ($set){
                $width.=$array[$i];
            }

        }
        if($array[$i] == 'x'){
            $set = true;

        }
    }
    $imageadress = 'thumbnails/tiles/' .$skusample.'.jpg'   ;
    if($_POST['editimageinput'] == "false"){ /////// don't delete image only change text file ///////////////
        //////////////// first delete item from program //////////////////////////////
        /// //////////////////////////////////////////////////////////////////////////
//        $sku_search = $_POST['sku'];
////        echo $sku_search;
////        echo "<br/>\n";
//        $B=strchr($sku_search,"\"");
//        $B=strchr($B,"4");
//        echo $B;
//        echo "<br/>\n";
        ///////////////////////////////////delete json////////////////////////////////////////////
//        $file = file_get_contents('./products.json');
//        $data = json_decode($file, true);
//        unset($file);
//        $i=0;
//        foreach($data['hits'] as $item) {
//            if($B == $item['sku']){
//                unset($data['hits'][$i]);
////                echo "json delete";
////                echo "<br/>\n";
//            }
//            $i++;
//        }
//        file_put_contents('./products.json',json_encode($data,JSON_UNESCAPED_UNICODE));
//        unset($data);//release memory

    ///////////////////////////////////delete xml////////////////////////////////////////////
//        $file = 'visualiser.xml';
//        $xmldata = simplexml_load_file($file);
//        foreach($xmldata->channel->item as $theUser){
//            if($theUser->sku == $B){
//                $dom = dom_import_simplexml($theUser);
//                $dom->parentNode->removeChild($dom);
//            }
//        }
//        $xmldata->asXml($file);
////        echo "xml delete";
////        echo "<br/>\n";
//



        ///////////////////// add new item with new value (edit) ////////////////////////
        /// /////////////////////////////////////////////////////////////////////////////

//        $jsonitem = file_get_contents("./products.json");
//        $objitems = json_decode($jsonitem, true);
//        $hitslen = count($objitems['hits']);
//        $sample = $objitems['hits'][0];
//        $skusampl=$B;
//        $skusample=(string)$skusampl;
//        $imageadress = 'thumbnails/tiles/' .$skusample.'.jpg'   ;
//        $sample['name'] = $data['name'];
//        $sample['cs_sample_price'] = $data['price'];
//        $sample['cs_type'] = $data['product_type'];
//        $sample['sku']= $skusample;
//        $sample['size'] = $data['size'];
//        $sample['brand'] = $data['brand'];
//        $sample['tenantid'] = $_SESSION['tenantid'];
//        $sample['samples_allowed'] = $data['product_type'];
//        $sample['_highlightResult']['name']['value'] = $data['name'];
//        $sample['_highlightResult']['cs_type']['value'] = $data['product_type'];
//        $sample['_highlightResult']['sku']['value'] = $skusample ;
//        $sample['_highlightResult']['filter_size']['value'] = $data['filter_size'] ;
//        $sample['_highlightResult']['filter_material']['value'] = $data['filter_material'] ;
//        $sample['_highlightResult']['finish']['value'] = $data['finish'] ;
//        $sample['_highlightResult']['product_type']['value']=$data['product_type'];
//        $sample['_highlightResult']['floor_or_wall']['value']=$data['product_type'];
//        $sample['_highlightResult']['filter_colour']['value'] = $data['filter_colour'];
//        $sample['_highlightResult']['size']['value'] = $data['size'];
//        $sample['_highlightResult']['samples_allowed']['value'] = $data['product_type'];
//        $sample['_highlightResult']['brand']['value'] = $data['brand'];
//        $sample['_highlightResult']['tenantid']['value'] = "001";
//
//
//        array_push($objitems['hits'],$sample);
//        $jsonData = json_encode($objitems, JSON_UNESCAPED_UNICODE);
//        file_put_contents('./products.json', $jsonData);

        //////////////// add in to xml file  /////////////
//        $array = str_split($data['size']);
//        $s=count($array);
//        $heigth="";
//        $width="";
//        if($s == "5"){
//            for($i=0; $i< 3; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=4; $i< 5; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        if($s == "6"){
//            for($i=0; $i< 3; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=4; $i< 7; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        if($s == "7"){
//            for($i=0; $i< 3; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=4; $i< 7; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        elseif ($s== "8"){
//            for($i=0; $i< 4; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=5; $i< 9; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        if($s == "9"){
//            for($i=0; $i< 3; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=4; $i< 7; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        else{
//            echo("Error");
//        }
//
//        $file = 'visualiser.xml';
//        $xml = simplexml_load_file($file);
//        $galleries = $xml-> channel;
//        $gallery = $galleries->addChild('item');
//        $gallery->addChild('sku', $skusample);
//        $gallery->addChild('name', $data['name']);
//        $gallery->addChild('size', $data['size']);
//        $gallery->addChild('height', $heigth);
//        $gallery->addChild('width', $width);
//        $gallery->addChild('price', $data [ 'price']);
//        $gallery->addChild('filter_colour', $data['filter_colour']);
//        $gallery->addChild('filter_material', $data['filter_material']);
//        $gallery->addChild('filter_size', $data['filter_size']);
//        $gallery->addChild('finish', $data['finish']);
//        $gallery->addChild('image', $imageadress);
//        $gallery->addChild('floor_or_wall', $data['product_type']);
//        $gallery->addChild('product_type', $data['product_type']);
//        $gallery->addChild('brand', $data['brand']);
//        $gallery->addChild('tenantid', $_SESSION['tenantid']);
//
//        $xml->asXML($file);
        //////////////////////// update database //////////////////////////////////

        mysqli_query($conn, "SET NAMES utf8");
//        $sql = "UPDATE tile_xml_table SET  name= $data['name'] , size = $data['size'],height=$heigth,width=$width,price=$data [ 'price'] ,filter_colour=$data['filter_colour'] ,filter_material=$data['filter_material'],filter_size=$data['filter_size'],finish=$data['finish'] ,image= $imageadress ,floor_or_wall=$data['product_type'],product_type=$data['product_type'],brand=$data['brand'],tenantid=$_SESSION['tenantid'] where sku=$skusample ";
        $sql = "DELETE FROM tile_xml_table  where sku=$skusample ";

        $result = mysqli_query($conn, $sql);
        if (! empty($result)) {
            //echo("محصول  با موفقیت از دیتابیس   حذف شد") ;
        } else {
            $error_message = mysqli_error($conn) . "\n";
        }
        mysqli_query($conn, "SET NAMES utf8");
        $sql1 = "INSERT INTO tile_xml_table (`sku`, `name`, `size`, `height`, `width`, `price`, `filter_colour`, `filter_material`, `filter_size`, `finish`, `image`, `floor_or_wall`, `product_type`, `brand`, `tenantid`) VALUES
  ('" . $skusample . "','" . $data['name'] . "','" . $data['size'] . "','" . $heigth . "','" . $width . "','" . $data [ 'price'] . "','" . $data['filter_colour'] . "','" . $data['filter_material'] . "','" . $data['filter_size'] . "','" . $data['finish'] . "','" . $imageadress . "','" . $data['product_type'] . "','" . $data['product_type'] . "','" . $data['brand'] . "','" . $_SESSION['tenantid'] . "' )";

        $result1 = mysqli_query($conn, $sql1);
        if (! empty($result1)) {
           // echo("محصول  با موفقیت در دیتابیس   ویرایش شد") ;
        } else {
            $error_message = mysqli_error($conn) . "\n";
        }


        //header("Location: /Tile_Edit.php");



    }
    if($_POST['editimageinput'] == "true"){  ///////  delete image and add new image and  change text file ///////////////

        //////////////// first delete item from program //////////////////////////////
        /// //////////////////////////////////////////////////////////////////////////
//        $sku_search = $_POST['sku'];
////        echo $sku_search;
////        echo "<br/>\n";
//        $B=strchr($sku_search,"\"");
//        $B=strchr($B,"4");
//        echo $B;
//        echo "<br/>\n";
        ///////////////////////////////////delete json////////////////////////////////////////////
//        $file = file_get_contents('./products.json');
//        $data = json_decode($file, true);
//        unset($file);
//        $i=0;
//        foreach($data['hits'] as $item) {
//            if($B == $item['sku']){
//                unset($data['hits'][$i]);
//               // echo "json delete";
//                //echo "<br/>\n";
//            }
//            $i++;
//        }
//        file_put_contents('./products.json',json_encode($data,JSON_UNESCAPED_UNICODE));
//        unset($data);//release memory
//
//    ///////////////////////////////////delete txml////////////////////////////////////////////
//        $file = 'visualiser.xml';
//        $xmldata = simplexml_load_file($file);
//        foreach($xmldata->channel->item as $theUser){
//            if($theUser->sku == $B){
//                $dom = dom_import_simplexml($theUser);
//                $dom->parentNode->removeChild($dom);
//            }
//        }
//        $xmldata->asXml($file);
       // echo "xml delete";
        //echo "<br/>\n";

/////////////////////////////////////delete image in tiles _c , _n ////////////////////////
        $filename = 'tiles/' .$B.'_c.png'   ;
        if (file_exists($filename)) {
            unlink($filename);
           // echo 'File '.$filename.' has been deleted';
           // echo "<br/>\n";
        } else {
           // echo 'Could not delete '.$filename.', file does not exist';
           // echo "<br/>\n";
        }
        $filename = 'tiles/' .$B.'_n.png'   ;
        if (file_exists($filename)) {
            unlink($filename);
           // echo 'File '.$filename.' has been deleted';
           // echo "<br/>\n";
        } else {
           // echo 'Could not delete '.$filename.', file does not exist';
           // echo "<br/>\n";
        }
        ///////////////////////////////////delete image in thubnami/tile ////////////////////////
        $filename = 'thumbnails/tiles/' .$B.'.jpg'   ;
        if (file_exists($filename)) {
            unlink($filename);
           // echo 'File '.$filename.' has been deleted';
            //echo "<br/>\n";
        } else {
           // echo 'Could not delete '.$filename.', file does not exist';
           // echo "<br/>\n";
        }

        ///////////////////// add new item with new value (edit) ////////////////////////
        /// /////////////////////////////////////////////////////////////////////////////
        $sample="";
        $data="";
        echo ("data successfull added"."<br/>\n");
        $data = $_POST;
//        $jsonitem = file_get_contents("./products.json");
//        $objitems = json_decode($jsonitem, true);
//        $hitslen = count($objitems['hits']);
//        $sample = $objitems['hits'][$hitslen-1];
//        $skusampl=$B;
//        $skusample=(string)$skusampl;
//        $imageadress = 'thumbnails/tiles/' .$skusample.'.jpg'   ;
//        $sample['name'] = $data['name'];
//        $sample['cs_sample_price'] = $data['price'];
//        $sample['cs_type'] = $data['product_type'];
//        $sample['sku']= $skusample;
//        $sample['size'] = $data['size'];
//        $sample['brand'] = $data['brand'];
//        $sample['tenantid'] = "001";
//        $sample['samples_allowed'] = $data['product_type'];
//        $sample['_highlightResult']['name']['value'] = $data['name'];
//        $sample['_highlightResult']['cs_type']['value'] = $data['product_type'];
//        $sample['_highlightResult']['sku']['value'] = $skusample ;
////    $sample['_highlightResult']['filter_size']['value'] = $data['filter_size'] ;
//        $sample['_highlightResult']['filter_material']['value'] = $data['filter_material'] ;
//        $sample['_highlightResult']['finish']['value'] = $data['finish'] ;
//        $sample['_highlightResult']['product_type']['value']=$data['product_type'];
//        $sample['_highlightResult']['floor_or_wall']['value']=$data['product_type'];
//        $sample['_highlightResult']['filter_colour']['value'] = $data['filter_colour'];
//        $sample['_highlightResult']['size']['value'] = $data['size'];
//        $sample['_highlightResult']['samples_allowed']['value'] = $data['product_type'];
//        $sample['_highlightResult']['brand']['value'] = $data['brand'];
//        $sample['_highlightResult']['tenantid']['value'] = "001";
//
//
//        array_push($objitems['hits'],$sample);
//        $jsonData = json_encode($objitems, JSON_UNESCAPED_UNICODE);
//        file_put_contents('./products.json', $jsonData);

        //////////////// add in to xml file  /////////////
//        $array = str_split($data['size']);
//        $s=count($array);
//        $heigth="";
//        $width="";
//        if($s == "7"){
//            for($i=0; $i< 3; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=4; $i< 7; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        elseif ($s== "8"){
//            for($i=0; $i< 4; $i++){
//                $heigth = $heigth . $array[$i];
//            }
//            for($i=5; $i< 9; $i++){
//                $width = $width . $array[$i];
//            }
//        }
//        else{
//            echo("Error");
//        }

//        $file = 'visualiser.xml';
//        $xml = simplexml_load_file($file);
//        $galleries = $xml-> channel;
//        $gallery = $galleries->addChild('item');
//        $gallery->addChild('sku', $skusample);
//        $gallery->addChild('name', $data['name']);
//        $gallery->addChild('size', $data['size']);
//        $gallery->addChild('height', $heigth);
//        $gallery->addChild('width', $width);
//        $gallery->addChild('price', $data [ 'price']);
//        $gallery->addChild('filter_colour', $data['filter_colour']);
//        $gallery->addChild('filter_material', $data['filter_material']);
//        $gallery->addChild('filter_size', "L");
//        $gallery->addChild('finish', $data['finish']);
//        $gallery->addChild('image', $imageadress);
//        $gallery->addChild('floor_or_wall', $data['product_type']);
//        $gallery->addChild('product_type', $data['product_type']);
//        $gallery->addChild('brand', $data['brand']);
//        $gallery->addChild('tenantid', "001");
//
//        $xml->asXML($file);

        ////////////////// upload  main file ////////////////////////
        // $target_dir = "uploads/";
        $target_dir = "thumbnails/tiles/";
        $ba=$skusample.".jpg";
        $target_file = $target_dir . basename($ba);
        move_uploaded_file($_FILES["fileToUpload1"]["tmp_name"], $target_file);

        $target_dir = "tiles/";
        $target_file = $target_dir .$skusample.'_n.png' ;
        move_uploaded_file($_FILES["fileToUpload3"]["tmp_name"], $target_file);
        $target_file = $target_dir .$skusample.'_c.png' ;
        move_uploaded_file($_FILES["fileToUpload2"]["tmp_name"], $target_file);

        //////////////////// updater data base /////////////////////////
        mysqli_query($conn, "SET NAMES utf8");
//        $sql = "UPDATE tile_xml_table SET  name= $data['name'] , size = $data['size'],height=$heigth,width=$width,price=$data [ 'price'] ,filter_colour=$data['filter_colour'] ,filter_material=$data['filter_material'],filter_size=$data['filter_size'],finish=$data['finish'] ,image= $imageadress ,floor_or_wall=$data['product_type'],product_type=$data['product_type'],brand=$data['brand'],tenantid=$_SESSION['tenantid'] where sku=$skusample ";
        $sql = "DELETE FROM tile_xml_table  where sku=$skusample ";

        $result = mysqli_query($conn, $sql);
        if (! empty($result)) {
            //echo("محصول  با موفقیت از دیتابیس   حذف شد") ;
        } else {
            $error_message = mysqli_error($conn) . "\n";
        }
        mysqli_query($conn, "SET NAMES utf8");
        $sql1 = "INSERT INTO tile_xml_table (`sku`, `name`, `size`, `height`, `width`, `price`, `filter_colour`, `filter_material`, `filter_size`, `finish`, `image`, `floor_or_wall`, `product_type`, `brand`, `tenantid`) VALUES
  ('" . $skusample . "','" . $data['name'] . "','" . $data['size'] . "','" . $heigth . "','" . $width . "','" . $data [ 'price'] . "','" . $data['filter_colour'] . "','" . $data['filter_material'] . "','" . $data['filter_size'] . "','" . $data['finish'] . "','" . $imageadress . "','" . $data['product_type'] . "','" . $data['product_type'] . "','" . $data['brand'] . "','" . $_SESSION['tenantid'] . "' )";

        $result1 = mysqli_query($conn, $sql1);
        if (! empty($result1)) {
           // echo("محصول  با موفقیت در دیتابیس   ویرایش شد") ;
        } else {
            $error_message = mysqli_error($conn) . "\n";
        }


        //header("Location: /Tile_Edit.php");



    }


   header("Location: /Tile_Edit.php");

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
