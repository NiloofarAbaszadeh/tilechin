<?php
include ('loginpage.php');
include ('db.php');
if(isset($_SESSION['login_user'])){
//    $suser = $_SESSION['login_user'];
//    $tenandid_user = $_SESSION['tenantid'];
}




if(isset($_POST['sname'])){
    $sname=$_POST['sname'];
}

if(isset($_POST['stype'])){
    $stype=explode(",",$_POST['stype']);
    $typelength=count($stype);
}else{
    $typelength=0;
}

if(isset($_POST['scolour'])){
    $scolour=explode(",",$_POST['scolour']);
    $colourlength = count($scolour);
}
else{
    $colourlength=0;
}
if(isset($_POST['ssize'])){
    $ssize=explode(",",$_POST['ssize']);
    $tilesizelength =count($ssize);
}
else{
    $tilesizelength=0;
}
/// feature not add in to search filter ////////////
/// //////////////////////////////////////////////////
if(isset($_POST['sfinish'])) {
    $sfinish = explode(",", $_POST['sfinish']);
    $finishlength = count($sfinish);
}
else{
    $finishlength = 0;
}

if(isset($_POST['smate'])){
    $smate=explode(",",$_POST['smate']);
    $matelength = count($smate);

}else{
  $matelength =0;
}
///// delet this ////////////
//if(isset($_POST['spfe'])){
//    $spfe=explode(",",$_POST['spfe']);
//    $spfelength = count($spfe); }else { $spfelength = 0;
//}
//if(isset($_POST['sthin'])){
//    $sthin=explode(",",$_POST['sthin']);
//    $thinlength = count($sthin);
// }
// else{
// $thonlength = 0 ;
//}
///////////////////////////////////////////////////////
/////////////// search   ///////////////////////

//$jsonitem = file_get_contents("./products.json");
//$objitems = json_decode($jsonitem, true);
//$hitslen = count($objitems['hits']);
$result[]="";
/////////////// load data from mysql table /////////////////


$response[] = array();
mysqli_query($conn, "SET NAMES utf8");
$user_login_tenantid = $_SESSION['tenantid'];
$sql = "SELECT * FROM tile_xml_table WHERE tenantid ='$user_login_tenantid' ";
$resultsql = $conn->query($sql);
if ($resultsql->num_rows > 0) {

    while ($data = $resultsql->fetch_object()) {
        $objitems[] = $data;
    }
    //var_dump($objitems[0]->sku);

}
$hitslen = sizeof($objitems);
///////// only name entered ///////////
if($sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1 ) {
    for ($i = 0; $i < $hitslen; $i++) {
        if ( $objitems[$i]->name == $sname) {
            $result[] = $objitems[$i];
        }
    }
}
/////// only type entered ///////////
elseif($sname =="" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1 ) {
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            if ($objitems[$i]->product_type == $stype[$j]) {
                $result[] = $objitems[$i];
            }
        }
    }
}
///////// only colour entered ///////////
elseif($sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1 ) {
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            if ($objitems[$i]->filter_colour == $scolour[$j]) {
                $result[] = $objitems[$i];
            }
        }
    }
}
///////// only size entered ///////////
elseif($sname =="" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ) {
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            if ($objitems[$i]->size == $ssize[$j]) {
                $result[] = $objitems[$i];
            }
        }
    }
}
///////// only finish entered ///////////
elseif($sname =="" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1) {
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            if ($objitems[$i]->finish == $sfinish[$j]) {
                $result[] = $objitems[$i];
            }
        }
    }
}
///////// only material entered ///////////
elseif($sname =="" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ) {
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            if ($objitems[$i]->filter_material == $smate[$j]) {
                $result[] = $objitems[$i];
            }
        }
    }
}
/////// name and type entered /////////////
elseif ($sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->name == $sname) {
                $result[] = $objitems[$i];
            }
        }
    }
}
/////// name and size entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->name == $sname) {
                $result[] = $objitems[$i];
            }
        }
    }
}
/////// name and colour entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            if ($objitems[$i]->filter_colour == $scolour[$j] && $objitems[$i]->name == $sname) {
                $result[] = $objitems[$i]->sku;
            }
        }
    }
}
/////// name and finish entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $finishlength; $j++) {
            if ($objitems[$i]->finish == $sfinish[$j] && $objitems[$i]->name == $sname) {
                $result[] = $objitems[$i]->sku;
            }
        }
    }
}
/////// name and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->name == $sname) {
                $result[] = $objitems[$i]->sku;
            }
        }
    }
}
/////// type and size entered /////////////
elseif ($sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
///// type and colour entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_colour == $scolour[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
///// type and finish entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->finish == $sfinish[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
///// type and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// size and colour entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_colour == $scolour[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// size and finish entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->finish == $sfinish[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// size and material entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// finish and colour entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $finishlength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                if ($objitems[$i]->finish == $sfinish[$j] && $objitems[$i]->filter_colour == $scolour[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// material and colour entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->filter_colour == $scolour[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// material and finish entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->finish == $sfinish[$k]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// name and type and size entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k]) {
                    $result[] = $objitems[$i];
                }

            }
        }
    }
}
/////// name and type and colour entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength == 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_colour == $scolour[$k]) {
                    $result[] = $objitems[$i];
                }

            }
        }
    }
}
/////// name and type and finish entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->finish == $sfinish[$k]) {
                    $result[] = $objitems[$i];
                }

            }
        }
    }
}
/////// name and type and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k]) {
                    $result[] = $objitems[$i];
                }

            }
        }
    }
}
/////// type and size and colour entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// type and finish and colour entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// type and material and colour entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// finish and size and colour entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $finishlength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->finish == $sfinish[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// material and size and colour entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// material and size and finish entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and colour and size entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// name and colour and finish entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->filter_colour == $scolour[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// name and colour and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->filter_colour == $scolour[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
//
/////// name and size and finish entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->size == $ssize[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// name and size and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->size == $ssize[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// name and finish and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $finishlength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                if ($objitems[$i]->name == $sname && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$j]) {
                    $result[] = $objitems[$i];
                }
            }
        }
    }
}
/////// type and finish and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $typelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->product_type == $stype[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }

}
/////// type and size and finish entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $typelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->product_type == $stype[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }

}
/////// type and size and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $typelength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    if ($objitems[$i]->size == $ssize[$j] && $objitems[$i]->product_type == $stype[$k] && $objitems[$i]->filter_material == $smate[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }

}
/////// coloure and finish and material entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $matelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->filter_material == $smate[$j] && $objitems[$i]->filter_colour == $scolour[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and size and colour entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and colour and finish entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and colour and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and size and colour and finish entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and size and colour and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and size and finish and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and finish and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and finish and size entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and type and material and size entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_material == $smate[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// name and colour and finish and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    if ($objitems[$i]->name == $sname && $objitems[$i]->filter_colour == $scolour[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                        $result[] = $objitems[$i];
                    }
                }

            }
        }
    }
}
/////// type and size and colour and finish entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $finishlength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    for ($n = 0; $n < $typelength; $n++) {
                        if ($objitems[$i]->product_type == $stype[$n] && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->finish == $sfinish[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// type and size and colour and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $colourlength; $m++) {
                    for ($n = 0; $n < $typelength; $n++) {
                        if ($objitems[$i]->product_type == $stype[$n] && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->filter_colour == $scolour[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// type and size and finish and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    for ($n = 0; $n < $typelength; $n++) {
                        if ($objitems[$i]->product_type == $stype[$n] && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// colour and size and finish and material entered /////////////
elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $tilesizelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    for ($n = 0; $n < $colourlength; $n++) {
                        if ($objitems[$i]->filter_colour == $scolour[$n] && $objitems[$i]->size == $ssize[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// colour and type and finish and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $matelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    for ($n = 0; $n < $colourlength; $n++) {
                        if ($objitems[$i]->filter_colour == $scolour[$n] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$k] && $objitems[$i]->finish == $sfinish[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// name and type and colour and size and finish entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength == 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $finishlength; $m++) {
                    for ($n = 0; $n < $colourlength; $n++) {
                        if ($objitems[$i]->name == $sname && $objitems[$i]->filter_colour == $scolour[$n] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->finish == $sfinish[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// name and type and colour and size and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength == 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $colourlength; $n++) {
                        if ($objitems[$i]->name == $sname && $objitems[$i]->filter_colour == $scolour[$n] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// name and  colour and size and finish and material entered /////////////
elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $colourlength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $finishlength; $n++) {
                        if ($objitems[$i]->name == $sname && $objitems[$i]->finish == $sfinish[$n] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->filter_colour == $scolour[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// name and  type and size and finish and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $tilesizelength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $finishlength; $n++) {
                        if ($objitems[$i]->name == $sname && $objitems[$i]->finish == $sfinish[$n] && $objitems[$i]->size == $ssize[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// name and  type and colour and finish and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $finishlength; $n++) {
                        if ($objitems[$i]->name == $sname && $objitems[$i]->finish == $sfinish[$n] && $objitems[$i]->filter_colour == $scolour[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                            $result[] = $objitems[$i];
                        }
                    }
                }

            }
        }
    }
}
/////// size and  type and colour and finish and material entered /////////////
elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $finishlength; $n++) {
                        for ($l = 0; $l < $tilesizelength; $l++) {
                            if ($objitems[$i]->size == $ssize[$l] && $objitems[$i]->finish == $sfinish[$n] && $objitems[$i]->filter_colour == $scolour[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                                $result[] = $objitems[$i];
                            }
                        }
                    }
                }

            }
        }
    }
}
/////// name and size and  type and colour and finish and material entered /////////////
elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 && $finishlength != 1 &&  $matelength != 1 ){
    for ($i = 0; $i < $hitslen; $i++) {
        for ($j = 0; $j < $typelength; $j++) {
            for($k = 0; $k < $colourlength; $k++ ) {
                for ($m = 0; $m < $matelength; $m++) {
                    for ($n = 0; $n < $finishlength; $n++) {
                        for ($l = 0; $l < $tilesizelength; $l++) {
                            if ($objitems[$i]->name == $sname && $objitems[$i]->size == $ssize[$l] && $objitems[$i]->finish == $sfinish[$n] && $objitems[$i]->filter_colour == $scolour[$k] && $objitems[$i]->product_type == $stype[$j] && $objitems[$i]->filter_material == $smate[$m]) {
                                $result[] = $objitems[$i];
                            }
                        }
                    }
                }

            }
        }
    }
}


echo (json_encode($result));

$conn->close();
?>

