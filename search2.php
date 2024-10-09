<?php
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
//if(isset($_POST['sfinish'])){
//    $sfinish=explode(",",$_POST['sfinish']);
//    $finishlength=count($sfinish);
//else{
//    $finishlength = 0;
//}
//
//if(isset($_POST['smate'])){
//    $smate=explode(",",$_POST['smate']);
//    $matelength = count($smate));
//}else{
//  $matelength =0;
//}
//
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

    $jsonitem = file_get_contents("./products.json");
    $objitems = json_decode($jsonitem, true);
    $hitslen = count($objitems['hits']);
    $result[]="";


    ///////// only name entered ///////////
    if($sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength == 1  ) {
        for ($i = 0; $i < $hitslen; $i++) {
            if ( $objitems['hits'][$i]['name'] == $sname) {
                $result[] = $objitems['hits'][$i]['sku'];
            }
        }
    }
    /////// only type entered ///////////
    elseif($sname =="" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1  ) {
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                if ($objitems['hits'][$i]['cs_type'] == $stype[$j]) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    ///////// only colour entered ///////////
    elseif($sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1  ) {
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $colourlength; $j++) {
                if ($objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$j]) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    ///////// only size entered ///////////
    elseif($sname =="" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1  ) {
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $tilesizelength; $j++) {
                if ($objitems['hits'][$i]['size'] == $ssize[$j]) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    /////// name and type entered /////////////
    elseif ($sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength == 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                if ($objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['name'] == $sname) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    /////// name and size entered /////////////
    elseif ( $sname != "" && $typelength == 1 && $colourlength == 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $tilesizelength; $j++) {
                if ($objitems['hits'][$i]['size'] == $ssize[$j] && $objitems['hits'][$i]['name'] == $sname) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    /////// name and colour entered /////////////
    elseif ( $sname != "" && $typelength == 1 && $colourlength != 1 && $tilesizelength == 1){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $colourlength; $j++) {
                if ($objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$j] && $objitems['hits'][$i]['name'] == $sname) {
                    $result[] = $objitems['hits'][$i]['sku'];
                }
            }
        }
    }
    /////// type and size entered /////////////
    elseif ($sname == "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $tilesizelength; $k++ ) {
                    if ($objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['size'] == $ssize[$k]) {
                        $result[] = $objitems['hits'][$i]['sku'];
                    }
                }
            }
        }
    }
    ///// type and colour entered /////////////
    elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $colourlength; $k++ ) {
                    if ($objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$k]) {
                        $result[] = $objitems['hits'][$i]['sku'];
                    }
                }
            }
        }
    }
    /////// size and colour entered /////////////
    elseif ( $sname == "" && $typelength == 1 && $colourlength != 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $tilesizelength; $j++) {
                for($k = 0; $k < $colourlength; $k++ ) {
                    if ($objitems['hits'][$i]['size'] == $ssize[$j] && $objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$k]) {
                        $result[] = $objitems['hits'][$i]['sku'];
                    }
                }
            }
        }
    }
    /////// name and type and size entered /////////////
    elseif ( $sname != "" && $typelength != 1 && $colourlength == 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $tilesizelength; $k++ ) {
                    if ($objitems['hits'][$i]['name'] == $sname && $objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['size'] == $ssize[$k]) {
                        $result[] = $objitems['hits'][$i]['sku'];
                    }

                }
            }
        }
    }
    /////// name and type and colour entered /////////////
    elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength == 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $colourlength; $k++ ) {
                    if ($objitems['hits'][$i]['name'] == $sname && $objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$k]) {
                        $result[] = $objitems['hits'][$i]['sku'];
                    }

                }
            }
        }
    }
    /////// type and size and colour entered /////////////
    elseif ( $sname == "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $tilesizelength; $k++ ) {
                    for ($m = 0; $m < $colourlength; $m++) {
                        if ($objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['size'] == $ssize[$k] && $objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$m]) {
                            $result[] = $objitems['hits'][$i]['sku'];
                        }
                    }

                }
            }
        }
    }
    /////// name and type and size and colour entered /////////////
    elseif ( $sname != "" && $typelength != 1 && $colourlength != 1 && $tilesizelength != 1 ){
        for ($i = 0; $i < $hitslen; $i++) {
            for ($j = 0; $j < $typelength; $j++) {
                for($k = 0; $k < $tilesizelength; $k++ ) {
                    for ($m = 0; $m < $colourlength; $m++) {
                        if ($objitems['hits'][$i]['name'] == $sname && $objitems['hits'][$i]['cs_type'] == $stype[$j] && $objitems['hits'][$i]['size'] == $ssize[$k] && $objitems['hits'][$i]['_highlightResult']['filter_colour']['value'] == $scolour[$m]) {
                            $result[] = $objitems['hits'][$i]['sku'];
                        }
                    }

                }
            }
        }
    }
$resultlength = count($result);
if($resultlength === 1){
    var_dump("No Image Found");
    }
    elseif($resultlength !== 1) {
    var_dump(implode("|",$result));
    }
?>

