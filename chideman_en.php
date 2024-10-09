<?php
include ('loginpage.php');
include ('db.php');
if(!isset($_SESSION['login_user'])){
    header("Location: index.php");
}
$files = scandir('thumbnails/tiles/');
mysqli_query($conn, "SET NAMES utf8");
$sql = "SELECT * FROM tilesize  ";
$sizetile = $conn->query($sql);
if ($sizetile->num_rows > 0) {
    $size_length = $sizetile->num_rows;
}
$sql = "SELECT * FROM tilecolour ";
$colourtile = $conn->query($sql);
if ($colourtile->num_rows > 0) {
    $colour_length = $colourtile->num_rows;
}
$sql = "SELECT * FROM tilefinish ";
$finishtile = $conn->query($sql);
if ($finishtile->num_rows > 0) {
    $finish_length = $finishtile->num_rows;
}
$sql = "SELECT * FROM tilematerial ";
$materialtile = $conn->query($sql);
if ($materialtile->num_rows > 0) {
    $material_length = $materialtile->num_rows;
}
$sql = "SELECT * FROM tileusages ";
$usagetile = $conn->query($sql);
if ($usagetile->num_rows > 0) {
    $usage_length = $usagetile->num_rows;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>tilery.ir</title>
    <script src="js/jquery.easyPaginate.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"  />
    <link href="css/All-en.css" rel="stylesheet" />
    <link href="css/filter-style.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet" />

    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script>
    if("<?php echo $_SESSION['login_user']; ?>" == "admin") {
        $(document).ready(function () {
            $("#backlink").attr("href", "adminpage-en.php");

        });
    }
    else{

        $(document).ready(function () {
            $("#backlink").attr("href", "userpage_en.php");

        });
    }
</script>
<script>
    var res;
    var sizelen = "<?php echo ($size_length); ?>";
    sizelen = parseInt(sizelen, 10);
    var colourlen = "<?php echo ($colour_length); ?>";
    colourlen = parseInt(colourlen, 10);
    var finishlen = "<?php echo ($finish_length); ?>";
    finishlen = parseInt(finishlen, 10);
    var materiallen = "<?php echo ($material_length); ?>";
    materiallen = parseInt(materiallen, 10);
    var usagelen = "<?php echo ($usage_length); ?>";
    usagelen = parseInt(usagelen, 10);
    $(document).ready(function(){
        $("#submit").click(function(){
            jQuery('.loader-overlay').show();
            jQuery('.loader').show();
            var surname = $("#searchname").val();
            var stype='';
            for (var i=1;i<usagelen; i++)
            {
                var sstype = document.getElementById("type"+ i);
                if(sstype.checked == true) {
                    stype += sstype.value;
                    stype += ','
                    if(document.getElementById("type"+ i).value == 'Floor' ||document.getElementById("type"+ i).value == 'Wall' ){
                        stype+="Both";
                        stype+=',';
                    }
                }
            }
            var array = stype.split(",");
            var names = array;
            var uniqueNames = [];
            $.each(names, function(i, el){
                if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
            });
            stype = uniqueNames.toString();


            var scolour='';
            for (var i=1;i<colourlen; i++)
            {
                var sscolour = document.getElementById("color"+ i);
                if(sscolour.checked == true){
                    scolour+=sscolour.value;
                    scolour+=','
                }
            }
            var sfinish='';
            for (var i=1;i<finishlen; i++)
            {
                var ssfinish =document.getElementById("finish"+ i);
                if(ssfinish.checked == true){
                    sfinish+=ssfinish.value;
                    sfinish+=','
                }
            }
            var smate='';
            for (var i=1;i<materiallen; i++)
            {
                var ssmate = document.getElementById("mate"+ i);
                if(ssmate.checked == true){
                    smate+=ssmate.value;
                    smate+=','
                }
            }
            var ssize='';
            for (var i=1;i<sizelen; i++)
            {
                var sssize = document.getElementById("size"+ i);
                if(sssize.checked == true){
                    ssize+=sssize.value;
                    ssize+=','
                }
            }
            // var spfe='';
            // for (var i=1;i<11; i++)
            // {
            //     if(document.getElementById("spfe"+ i).checked){
            //         spfe+=document.getElementById("spfe"+ i).value;
            //         spfe+=','
            //     }
            // }
            // var sthin='';
            // for (var i=1;i<7; i++)
            // {
            //     if(document.getElementById("thin"+ i).checked){
            //         sthin+=document.getElementById("thin"+ i).value;
            //         sthin+=','
            //     }
            // }
            //, spfe : spfe , sthin : sthin

            var datastring = { sname : surname , stype :stype , scolour : scolour , sfinish : sfinish , smate : smate , ssize: ssize };
            $.ajax({
                type: "POST",
                url : "search.php",
                data : datastring,
                dataType: "json",
                success : function(result) {
                    $("#galleryimage").css('display', 'none');
                    $("#search-gallery").css('display' , 'block');
                    jQuery("#search-gallery").html("");
                    // console.log(result.length);
                    if(result.length >1) {
                        for (var h = 1; h < result.length; h++) {
                            var html2 = '<div class="col-xs-2"><div class="v-tile-thumbnail-container "><div style="cursor: pointer;" class="v-actiond sb-v-actiond" data-v-action="SelectTileSKU=' +
                                result[h].sku +
                                '"><img class="v-thumbnail v-tile-thumbnail zzimg-responsive" src="thumbnails/tiles/' +
                                result[h].sku +
                                '.jpg" alt="' + h + '"/></div><div class="vs-p-name "><p class="v-tile-thumbnail-text"><span><br>' + result[h].name + '<br/>' + result[h].size + 'mm<br>' + result[h].product_type + '<br> ' + result[h].brand + '<br><br></span></p></div></div></div>';

                            jQuery("#search-gallery").append(html);
                            $("#search-gallery").append(html2);

                        }
                        $(document).ready(function () {
                            $(".v-actiond").click(function () {

                                visualizer.action($(this).data("v-action"));
                            });
                        });

                    }
                    else{
                        var html = '<h4 style=text-align:center;"> عکسی یافت نشد</h4>';
                        $("#search-gallery").append(html);
                    }
                    jQuery('.loader-overlay').hide();
                    jQuery('.loader').hide();

                }

            });

        });

    })
</script>

<div class="v-page-container v-hide">

    <img src="" class="v-scene-render" />

    <canvas class="v-outlines-canvas" onClick="void(0);">
        <p>Your browser doesn't support canvas.</p>
    </canvas>

    <div class="v-header-container col-sm-12">
        <div class="col-sm-6" style="direction: ltr;margin-top: 5px;">
            <a class="btn btn-warning" href="logout_en.php" >Logout</a>
            <a class="btn btn-warning" id="backlink" href="" >  Back </a>
            Wellcome <b><?php if(isset($_SESSION['login_user'])){ echo $_SESSION['login_user'];} ?> </b>user
        </div>
        <div class="col-sm-6">
            <a href="#"><img class="v-main-logo" src="images/logo.png" /></a>
        </div>
    </div>

    <img src="" class="v-hide v-room" />

    <div class="sv-main-area">

        <div class="v-left-button-group">

            <div class="v-button-v-group">

                <div data-v-action="RoomsPopup" class="v-action v-icon-button v-rooms-button">
                    <span></span>
                    <p>Rooms</p>
                </div>


                <div data-v-action="TilesPopup" class="v-action v-icon-button v-tiles-button">
                    <span></span>
                    <p>Tiles</p>
                </div>
                <div data-v-action="GroutPopup" class="v-action v-icon-button v-grout-button">
                    <span></span>
                    <p>Grout</p>
                </div>


                <div data-v-action="PaintPopup" class="v-action v-icon-button v-paint-button">
                    <span></span>
                    <p>Paint</p>
                </div>


            </div>

            <div class="v-button-v-group">


                <div data-v-action="Undo" class="v-action v-icon-button v-undo-button">
                    <span></span>
                    <p>Undo</p>
                </div>


                <div data-v-action="Redo" class="v-action v-icon-button v-redo-button">
                    <span></span>
                    <p>Redo</p>
                </div>


                <div data-v-action="Clear" class="v-action v-icon-button v-clear-all-button">
                    <span></span>
                    <p>Clear All</p>
                </div>

            </div>

        </div>

        <div class="v-right-button-group">

            <div class="v-button-v-group">


                <div data-v-action="Save" class="v-action v-icon-button v-save-button">
                    <span></span>
                    <p>Save</p>
                </div>


                <div data-v-action="Print" class="v-action v-icon-button v-print-button">
                    <span></span>
                    <p>Print</p>
                </div>


                <!-- <div data-v-action="EmailPopup" class="v-action v-icon-button v-email-button">
                    <span></span>
                    <p>ایمیل</p>
                </div> -->


                <div data-v-action="SharePopup" class="v-action v-icon-button v-share-button">
                    <span></span>
                    <p>Share</p>
                </div>
            </div>

        </div>

        <div class="v-top-button-group">

            <div class="v-button-h-group">


                <div data-v-action="ToggleSingleTile" class="v-action v-icon-button v-single-tile-button">
                    <span></span>
                    <p>single</p>
                </div>


                <div data-v-action="ToggleRotateTile" class="v-action v-icon-button v-rotate-tile-button">
                    <span></span>
                    <p>Rotate</p>
                </div>


                <div data-v-action="PatternsPopup" class="v-action v-icon-button v-pattern-button">
                    <span></span>
                    <p>Pattern</p>
                </div>


                <div data-v-action="AddNewZone" class="v-action v-icon-button v-create-area-button">
                    <span></span>
                    <p>New Area</p>
                </div>

            </div>

        </div>

        <div>

            <div class="v-current-selections">
                <!--	<div class="v-selected-grout-thumbnail v-active" style="background-color: #[GROUTBGCOLOUR];"></div> -->
                <div class="v-selected-paint"></div>
                <div class="v-selected-grout">
                    <div class="v-selected-grout-inner"></div>
                </div>
                <img class="v-selected-tile-thumbnail v-action" src="images/template-placeholder.png" />
                <img class="v-selected-tile-thumbnail v-action" src="images/template-placeholder.png" />
                <img class="v-selected-tile-thumbnail v-action" src="images/template-placeholder.png" />
                <img class="v-selected-tile-thumbnail v-action" src="images/template-placeholder.png" />
                <img class="v-selected-tile-thumbnail v-action" src="images/template-placeholder.png" />
                <img class="v-selected-pattern-icon" src="images/template-placeholder.png" />
                <div class="v-tiling-mode-container">
                    <div class="v-single-tile-icon"></div>
                    <div class="v-rotate-tile-icon"></div>
                </div>
                <!--	<div class="v-single-tile-icon glyphicon glyphicon-stop" aria-hidden="true"></div>
                <div class="v-rotate-tile-icon glyphicon glyphicon-repeat" aria-hidden="true"></div>
                <img class="v-pattern-icon" src="images/pattern-diamond.png"></img>-->
            </div>
            <div class="v-edit-container v-hide">


                <div data-v-action="ToggleSingleTile" class="v-action v-icon-button v-single-tile-button">
                    <span></span>
                    <p>Single</p>
                </div>


                <div data-v-action="ToggleRotateTile" class="v-action v-icon-button v-rotate-tile-button">
                    <span></span>
                    <p>Rotate</p>
                </div>


                <div data-v-action="PatternsPopup" class="v-action v-icon-button v-pattern-button">
                    <span></span>
                    <p>Pattern</p>
                </div>


                <div data-v-action="CreateNewArea" class="v-action v-icon-button v-create-area-button">
                    <span></span>
                    <p>New Area</p>
                </div>


            </div>
            <div class="v-options-popup v-hide">

                <div class="v-main-fixed-area">
                    <div class="container">

                        <div class="row">
                            <div class="col-xs-1"></div>
                            <div class="col-xs-10">
                                <div class="v-options-popup-container">

                                    <div class="v-options-button-group">


                                        <div data-v-action="ToggleSingleTile" class="v-action v-icon-button v-single-tile-button">
                                            <span></span>
                                            <p>Single</p>
                                        </div>


                                        <div data-v-action="ToggleRotateTile" class="v-action v-icon-button v-rotate-tile-button">
                                            <span></span>
                                            <p>Rotate</p>
                                        </div>


                                        <div data-v-action="PatternsPopup" class="v-action v-icon-button v-pattern-button">
                                            <span></span>
                                            <p>Pattern</p>
                                        </div>


                                        <div data-v-action="AddNewZone" class="v-action v-icon-button v-create-area-button">
                                            <span></span>
                                            <p>New Area</p>
                                        </div>

                                    </div>

                                    <div class="v-options-button-group">


                                        <div data-v-action="Undo" class="v-action v-icon-button v-undo-button">
                                            <span></span>
                                            <p>Undo</p>
                                        </div>


                                        <div data-v-action="Redo" class="v-action v-icon-button v-redo-button">
                                            <span></span>
                                            <p>Redo</p>
                                        </div>


                                        <div data-v-action="Clear" class="v-action v-icon-button v-clear-all-button">
                                            <span></span>
                                            <p>Clear All</p>
                                        </div>

                                    </div>

                                    <div class="v-options-button-group">


                                        <div data-v-action="Save" class="v-action v-icon-button v-save-button">
                                            <span></span>
                                            <p>Save</p>
                                        </div>


                                        <div data-v-action="Print" class="v-action v-icon-button v-print-button">
                                            <span></span>
                                            <p>Print</p>
                                        </div>

                                        <div data-v-action="addnew" class="v-action v-icon-button v-print-button">
                                            <span></span>
                                            <p>addnew</p>
                                        </div>


                                        <div data-v-action="EmailPopup" class="v-action v-icon-button v-email-button">
                                            <span></span>
                                            <p>Email</p>
                                        </div>


                                        <div data-v-action="SharePopup" class="v-action v-icon-button v-share-button">
                                            <span></span>
                                            <p>Share</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-rooms-popup v-hide">

                <div id="v-room-popup-id" class="v-main-fixed-area">
                    <div class="container v-height-100">

                        <div class="row xxxxxv-top v-height-100">
                            <div class="col-xs-1"></div>
                            <div class="col-xs-10 v-height-100">
                                <div class="v-rooms-popup-container">

                                    <span data-v-action="ClosePopup" class="v-rooms-popup-close-icon v-action"></span>
                                    <p class="v-rooms-popup-title-text">select Room</p>

                                    <ul class="nav nav-tabs v-rooms-popup-tabs v-config-active-tabs">
                                        <div class="v-rooms-popup-tab-template">
                                            <li data-v-action="[ACTION]" class="v-actiond"><a href="#">[roomTypeText]</a></li>
                                        </div>
                                    </ul>

                                    <div class="v-room-thumbnails-container" id="thumbnails-containe" style="margin-top: 26px;">
                                        <div class="row v-room-thumbnails-inject">
                                            <div class="v-room-thumbnail-template">
                                                <div class="col-xs-3">
                                                    <div class="v-room-thumbnail-container [ACTIVE]">
                                                            <span data-v-action="DeleteSavedRoom=[SAVEDROOMINDEX]"
                                                                  class="[HIDE] v-room-delete-icon v-actiond "></span>
                                                        <img data-v-action="SelectRoomId=[ROOMID]" class="[ACsssTIVE] [DISABLED] v-actiond v-room-thumbnail zzimg-responsive "
                                                             src="thumbnails/rooms/template-placeholder.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-tiles-popup v-hide">

                <div id="v-tiles-popup-id" class="v-main-fixed-area">
                    <div class="container v-height-100">

                        <div class="row xxxxxv-top v-height-100">
                            <div class="col-xs-1"></div>
                            <div class="col-xs-10 v-height-100">
                                <div class="v-tiles-popup-container">

                                        <span data-v-action="ClosePopup" class="v-tiles-popup-close-icon v-action">

                                        </span>
                                    <div class="v-filters-container">
                                        <p class="v-tiles-popup-title-text">Select Filters</p>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="v-show-filters-button2 pull-right">
                                                    <button data-v-action="ShowFilteredTiles" class="[ACTIVE] btn btn-default v-button v-action"
                                                            type="submit">Show</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="v-filter-groups-list">
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="v-filter-group-template">
                                                        <div class="panel panel-default v-tile-filter-group">
                                                            <div class="panel-heading">[FILTERTITLE]</div>
                                                            <div class="panel-body v-filter-group-buttons-list">
                                                                <div class="v-filter-button-template">
                                                                    <button data-v-action="ToggleFilter=[tileProperty]|[filterValue]"
                                                                            class="[ACTIVE] btn btn-default v-filter-button v-actiond"
                                                                            type="submit">
                                                                        [FILTERBUTTONTEXT]
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="v-tile-selection">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <ul class="nav nav-tabs v-tiles-popup-tabs v-tiles-popup-tabs-inject">
                                                    <div class="v-tiles-popup-tab-template">
                                                        <li class="v-actiond" data-v-action="[ACTION]"><a href="#">[tileCategoryText]</a></li>
                                                    </div>
                                                </ul>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="v-show-filters-button1 pull-right">
                                                    <button data-v-action="ShowFilters" class="[ACTIVE] btn btn-default v-button v-action"
                                                            type="submit">Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="v-tile-thumbnails-container">
                                            <div style="display:-webkit-inline-box; vertical-align: middle;">
                                                <button onclick="showform()" class="btn btn-primary"  style="display: block">Advanced search</button>
                                                <button onclick="resetfilter()" class="btn btn-primary"  id="resetfilter" style="display: none"> Reset </button></div>
                                            <h4 style="text-align: center"><b> Select Tile </b></h4>
                                            <div id="searchform" style="display: none" >
                                                <form >
                                                    <div class="inner-addon right-addon">
                                                        <input style="text-align: right" type="text"index class="form-control" name="saerch[0]" id="searchname" placeholder="Search By Name">
                                                    </div>
                                                    <br>
                                                    <div class ="responsive" >
                                                        <table class="table  col-sm-12 " id="t01">
                                                            <thead  >
                                                            <th style="text-align: right" class="col-sm-1">Type</th>
                                                            <th style="text-align: right" class="col-sm-2">Colour</th>
                                                            <th style="text-align: right" class="col-sm-2" >Finish</th>
                                                            <th style="text-align: right" class="col-sm-2" >Material</th>
                                                            <th style="text-align: right" class="col-sm-2" >Size</th>
                                                            <!--                                                            <th style="text-align: right" class="col-sm-2" >ویژگی های خاص </th>-->
                                                            <!--                                                            <th style="text-align: right" class="col-sm-1" > ضخامت </th>-->
                                                            </thead>
                                                            <tbody >
                                                            <tr>
                                                                <td style="direction: rtl" class="col-sm-1">
                                                                    <?php
                                                                    while ($row = $usagetile->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox" name="saerch[type][]" value="<?php echo $row["name"]; ?>" id="type<?php echo  $row["id"]; ?>" ><?php echo  $row["name"]; ?><br>
                                                                        <?php
                                                                    }
                                                                    ?>

                                                                </td>
                                                                <td style="direction: rtl" class="col-sm-2">
                                                                    <?php
                                                                    while ($row = $colourtile->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox" name="saerch[colour][]" value="<?php echo $row["name"]; ?>" id="color<?php echo  $row["id"]; ?>" ><?php echo  $row["name"]; ?><br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <td style="direction: rtl" class="col-sm-2">
                                                                    <?php
                                                                    while ($row = $finishtile->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox" name="saerch[Finish][]" value="<?php echo $row["name"]; ?>" id="finish<?php echo  $row["id"]; ?>" ><?php echo  $row["name"]; ?><br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <td style="direction: rtl" class="col-sm-2">
                                                                    <?php
                                                                    while ($row = $materialtile->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox" name="saerch[colour][]" value="<?php echo $row["name"]; ?>" id="mate<?php echo  $row["id"]; ?>" ><?php echo  $row["name"]; ?><br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <td class="col-sm-2">
                                                                    <?php

                                                                    $size1 = floor($size_length/3);
                                                                    $size2 = 2*$size1;
                                                                    $sql1 = "SELECT * FROM tilesize ORDER BY `id` LIMIT 0, $size1";
                                                                    $sizetile1 = $conn->query($sql1);
                                                                    $sql2 = "SELECT * FROM tilesize ORDER BY  id LIMIT $size1 OFFSET $size1";
                                                                    $sizetile2 = $conn->query($sql2);
                                                                    $sql3 = "SELECT * FROM tilesize ORDER BY  id LIMIT $size1 OFFSET $size2";
                                                                    $sizetile3 = $conn->query($sql3);
                                                                    while ($row = $sizetile1->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox"
                                                                               name="saerch[Tilesize][]"
                                                                               value="<?php echo $row["name"]; ?>"
                                                                               id="size<?php echo $row["id"]; ?>"><?php echo $row["name"]; ?>
                                                                        <br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <?php
                                                                    while ($row = $sizetile2->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox"
                                                                               name="saerch[Tilesize][]"
                                                                               value="<?php echo $row["name"]; ?>"
                                                                               id="size<?php echo $row["id"]; ?>"><?php echo $row["name"]; ?>
                                                                        <br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <td>
                                                                    <?php
                                                                    while ($row = $sizetile3->fetch_assoc()) {
                                                                        ?>
                                                                        <input type="checkbox"
                                                                               name="saerch[Tilesize][]"
                                                                               value="<?php echo $row["name"]; ?>"
                                                                               id="size<?php echo $row["id"]; ?>"><?php echo $row["name"]; ?>
                                                                        <br>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </td>
                                                                <!--                                                                <td class="col-sm-2">-->
                                                                <!--                                                                    <table>-->
                                                                <!--                                                                        <tr>-->
                                                                <!--                                                                            <td>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Cracked Glaze" id="spfe1"> لعاب ترک خورده<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Feature Tiles" id="spfe2"> Feature Tile<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Hexagone" id="spfe3" > شش گوش<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Marble Effect" id="spfe4"> نماس سنگ مرمر<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Metallic" id="spfe5" > فلزی<br>-->
                                                                <!--                                                                            </td>-->
                                                                <!--                                                                            <td>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Outdoor" id="spfe6"> بیرونی <br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Slip Resistant" id="spfe7"> مقاوم در برابر لغزش<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Sparkle" id="spfe8"> درخشان<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Stone Effect" id="spfe9"> نمای سنگ<br>-->
                                                                <!--                                                                                <input type="checkbox" name="saerch[SpesialFeatures][]" value="Wood Effect" id="spfe10"> نمای چوب<br>-->
                                                                <!--                                                                            </td>-->
                                                                <!--                                                                        </tr>-->
                                                                <!--                                                                    </table>-->
                                                                <!--                                                                </td>-->
                                                                <!--                                                                <td class="col-sm-1">-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="2-4" id="thin1"> 2-4 <br>-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="4-6" id="thin2"> 4-6 <br>-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="6-8" id="thin3"> 6-8 <br>-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="8-10" id="thin4"> 8-10 <br>-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="10-12" id="thin5"> 10-12<br>-->
                                                                <!--                                                                    <input type="checkbox" name="saerch[Thickness][]" value="other" id="thin6"> other <br>-->
                                                                <!--                                                                </td>-->
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div style="text-align:-webkit-center">
                                                        <input name="submit" type="button" id="submit"  value="Search"  class="btn btn-primary">
                                                    </div>
                                                </form>
                                            </div>
                                            <hr/>
                                            <div class="products">
                                                <div style="text-align: center" >
                                                    <span> <button type="submit" name="nextsubmit" class="next btn-primary" id="nextsubmit" style="padding: 5px 5px 5px 5px; " disabled> Next </button>
                                                        <input  id="endimage" style="border: none; width: 25px;text-align: center;background-color: ivory" disabled>Page <input id="startimage" style="border: none;width: 25px; text-align: center;background-color: ivory"   disabled>from
                                                        <button type="submit" class="prev btn-primary" name="prevsubmit" id="prevsubmit" style="padding: 5px 5px 5px 5px; " disabled>Prev</button>
                                                     </span>
                                                    <br/>
                                                    <br/>
                                                </div>
                                                <div class="img-list">
                                                <div id="galleryimage" style="display: block">
                                                    <?php
                                                    mysqli_query($conn, "SET NAMES utf8");
                                                    $user_login_tenantid = $_SESSION['tenantid'];
                                                    $sql = "SELECT * FROM tile_xml_table WHERE tenantid ='$user_login_tenantid' ";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        while ($data = $result->fetch_assoc()) {
                                                            $xmlsku = $data['sku'];
                                                            $sku_search = $xmlsku;
                                                            $galleries = "thumbnails/tiles/" . $sku_search . ".jpg";
                                                            $gallerie_name = $data['name'];
                                                            $gallerie_size = $data['size'];
                                                            $galleries_type = $data['product_type'];
                                                            $galleries_brand = $data['brand'];
                                                            $tenantid = $data['tenantid'];
                                                            ?>
                                                            <div class="col-xs-2">
                                                                <div class="v-tile-thumbnail-container ">
                                                                    <div style="cursor: pointer;"
                                                                         class="v-actiond sb-v-actiond"
                                                                         data-v-action="SelectTileSKU=<?php echo $sku_search; ?>">
                                                                        <img class="v-thumbnail v-tile-thumbnail zzimg-responsive"
                                                                             src="<?php echo $galleries . "?"; ?>"
                                                                        >
                                                                    </div>
                                                                    <div class="vs-p-name">
                                                                        <p class="v-tile-thumbnail-text">
                                                                            <span><?php echo("<br/>\n" . $gallerie_name . "<br/>\n" . $gallerie_size . "mm" . "<br/>\n" . $galleries_type . "<br/>\n" . $galleries_brand) ?></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </div>
                                            </div>
                                            </div>
                                            <script>
                                                var start = 0;
                                                var nb = 12;
                                                var end = start + nb;
                                                var length = "<?php echo $result->num_rows; ?>";
                                                var list = $('.img-list div.col-xs-2');
                                                document.getElementById('endimage').value = Math.floor(length / nb)+1;
                                                document.getElementById('startimage').value = 1;
                                                var xnext =document.getElementById('nextsubmit');
                                                var xprev =document.getElementById('prevsubmit');
                                                xprev.disabled = true;
                                                xnext.disabled = false;

                                                list.hide().filter(':lt('+(end)+')').show();

                                                $('.prev, .next').click(function(e){
                                                    e.preventDefault();
                                                    //console.log(start);
                                                    if( $(this).hasClass('prev') ){
                                                        start -= nb;

                                                    } else {
                                                        xprev.disabled = false;
                                                        start += nb;


                                                    }

                                                    if( start < 0 || start >= length )
                                                    {   start = 0;
                                                        xprev.disabled = true;
                                                        xnext.disabled = false;
                                                    }
                                                    end = start + nb;

                                                    if( end >= length){
                                                        xnext.disabled = true;
                                                    }
                                                    else{
                                                        xnext.disabled = false;
                                                    }
                                                    document.getElementById('startimage').value = Math.floor(end / nb);
                                                    if(end >= length || end == length)
                                                        $('#nextsubmit').disabled = false;

                                                    //console.log(start);
                                                    //console.log(end);

                                                    if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
                                                    else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();
                                                });

                                            </script>
                                            <!--                                            <div id="searchimage" style="display: none">-->
                                            <!--                                            </div>-->
                                            <div id="search-gallery" style="display: none"></div>
                                            <div id="filters">
                                            </div>
                                            <div class="v-selected-filters-container">
                                                <div class="row">
                                                    <div class="col-xs-1"></div>
                                                    <div class="col-xs-10 text-center">
                                                        <div class="v-tile-filters-inject">
                                                            <div class="v-filter-on-button-template">
                                                                <button data-v-action="RemoveFilter=[tileProperty]|[filterValue]"
                                                                        class="btn btn-default v-filter-on-button v-actiond"
                                                                        type="submit">
                                                                    [FILTERONBUTTONTEXT] <span class="glyphicon glyphicon-remove"></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-1"></div>
                                                </div>
                                            </div>
                                            <div id="fuulpic" style="display: none">
                                                <h5 style="text-align: center"> آلبوم تصاویر </h5>
                                                <div id="products"></div>
                                                <div class="row v-tile-thumbnails-inject">
                                                    <div class="v-tile-thumbnail-template">
                                                        <div style="display: none;" class="col-xs-2">
                                                            <div data-v-action="SelectTileSKU=[SKU]" class="v-tile-thumbnail-container v-actiond [ACTIVE] [DISABLED]">
                                                                <img class="v-thumbnail v-tile-thumbnail zzimg-responsive"
                                                                     src="images/template-placeholder.png" />
                                                                <p class="v-tile-thumbnail-text"><span>[TILETHUMBNAILTEXT]</span></p>
                                                            </div>

                                                            <div class="vs-p-name">
                                                                <p class="v-tile-thumbnail-text"><span>[TILETHUMBNAILTEXT]</span></p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-paint-popup v-hide">

                <div id="v-paint-popup-id" class="v-main-fixed-area">
                    <div class="container v-height-100">

                        <div class="row xxxxv-top v-height-100">
                            <div class="col-xs-1"></div>


                            <div class="col-xs-10 v-height-100">
                                <div class="v-paint-popup-container">

                                    <span data-v-action="ClosePopup" class="v-paint-popup-close-icon v-action"></span>

                                    <p class="v-paint-popup-title-text">select Colour</p>

                                    <div class="v-paint-thumbnails-container">
                                        <div class="row v-paint-thumbnails-inject">
                                            <div class="col-xs-12">
                                                <div class="v-paint-thumbnail-template">
                                                    <div class="v-paint-thumbnail v-actiond [ACTIVE]" data-v-action="SelectPaint=[PAINTCOLOUR]"
                                                         style="background-color: red;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-paint-popup v-hide">

                <div id="v-paint-popup-id" class="v-main-fixed-area">
                    <div class="container v-height-100">

                        <div class="row xxxxv-top v-height-100">
                            <div class="col-xs-1"></div>


                            <div class="col-xs-10 v-height-100">
                                <div class="v-paint-popup-container">

                                    <span data-v-action="ClosePopup" class="v-paint-popup-close-icon v-action"></span>

                                    <p class="v-paint-popup-title-text">Select a Paint Colour</p>

                                    <div class="v-paint-thumbnails-container">
                                        <div class="row v-paint-thumbnails-inject">
                                            <div class="col-xs-12">
                                                <div class="v-paint-thumbnail-template">
                                                    <div class="v-paint-thumbnail v-actiond [ACTIVE]" data-v-action="SelectPaint=[PAINTCOLOUR]"
                                                         style="background-color: red;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-grout-popup v-hide">

                <div id="v-grout-popup-id" class="v-main-fixed-area">
                    <div class="container">

                        <div class="row v-top">
                            <div class="col-xs-1"></div>


                            <div class="col-xs-10">
                                <div class="v-grout-popup-container">

                                    <span data-v-action="ClosePopup" class="v-grout-popup-close-icon v-action"></span>

                                    <p class="v-grout-popup-title-text">Select a Grout Colour</p>

                                    <div class="v-grout-thumbnails-container">
                                        <div class="row v-grout-thumbnails-inject">
                                            <div class="v-grout-thumbnail-template">
                                                <div class="col-xs-2">
                                                    <div class="v-grout-thumbnail v-actiond [ACTIVE]" data-v-action="SelectGrout=[GROUTCOLOUR]"
                                                         style="background-color: red;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-xs-1"></div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="v-patterns-popup v-hide">

                <div id="v-pattern-popup-id" class="v-main-fixed-area">
                    <div class="container">

                        <div class="row v-top">
                            <div class="col-xs-3"></div>
                            <div class="col-xs-6">

                                <div class="v-patterns-popup-container">

                                    <span data-v-action="ClosePopup" class="v-patterns-popup-close-icon v-action"></span>
                                    <p class="v-patterns-popup-title-text">Select a Pattern</p>

                                    <div class="row">
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="Linear">
                                                <img data-v-action="SelectPattern=Linear" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-linear.png" />
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="Brick">
                                                <img data-v-action="SelectPattern=Brick" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-brick.png" />
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="Diamond">
                                                <img data-v-action="SelectPattern=Diamond" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-diamond.png" />
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="3/4BrickBond">
                                                <img data-v-action="SelectPattern=3/4BrickBond" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-34-brick-bond.png" />
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="Herringbone">
                                                <img data-v-action="SelectPattern=Herringbone" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-herringbone.png" />
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="v-pattern-thumbnail-container" data-v-pattern="BlockHerringbone">
                                                <img data-v-action="SelectPattern=BlockHerringbone" class="v-action v-pattern-thumbnail zimg-responsive"
                                                     src="images/pattern-block-herringbone.png" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-xs-3"></div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="v-email-popup v-hide">

                <div class="v-main-fixed-area">
                    <div class="container">

                        <div class="row v-top">
                            <div class="col-xs-3"></div>
                            <div class="col-xs-6">

                                <div class="v-email-popup-container">

                                    <span data-v-action="ClosePopup" class="v-email-popup-close-icon v-action"></span>
                                    <p class="v-patterns-popup-title-text">Email Your Room</p>

                                    <div class="row">
                                        <div class="col-xs-1"></div>
                                        <div class="col-xs-10">
                                            <div class="v-email-entry">
                                                <label>Your Name</label>
                                                <input type="text" data-v-action="EmailFrom" class="v-action-key form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-1"></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-1"></div>
                                        <div class="col-xs-10">
                                            <div class="v-email-entry">
                                                <label>Email To</label>
                                                <input type="text" data-v-action="EmailTo" class="v-action-key form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-1"></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-1"></div>
                                        <div class="col-xs-10">
                                            <div class="v-email-entry">
                                                <label>Message</label>
                                                <textarea data-v-action="EmailMessage" class="v-action-key form-control"
                                                          rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xs-1"></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="text-center">
                                                <button data-v-action="SendEmail" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">Send</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-xs-3"></div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="v-share-popup v-hide">

                <div class="v-main-fixed-area">
                    <div class="container">

                        <div class="row v-top">
                            <div class="col-xs-3"></div>
                            <div class="col-xs-6">

                                <div class="v-share-popup-container">

                                    <span data-v-action="ClosePopup" class="v-share-popup-close-icon v-action"></span>
                                    <p class="v-patterns-popup-title-text">Share to</p>

                                    <div class="v-share-buttons">
                                        <div class="row">

                                            <div class="col-xs-3"></div>
                                            <div class="col-xs-2">

                                                <div data-v-action="Facebook" class="v-action v-icon-button v-facebook-button">
                                                    <span></span>
                                                    <p>Facebook</p>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">

                                                <div data-v-action="Twitter" class="v-action v-icon-button v-twitter-button">
                                                    <span></span>
                                                    <p>Twitter</p>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">

                                                <div data-v-action="Pinterest" class="v-action v-icon-button v-pinterest-button">
                                                    <span></span>
                                                    <p>Pinterest</p>
                                                </div>
                                            </div>
                                            <div class="col-xs-3"></div>

                                        </div>
                                    </div>

                                    <div class="v-preparing-share v-hide row">
                                        <div class="col-xs-12">
                                            <div class="text-center">
                                               loading ....
                                            </div>
                                        </div>
                                    </div>

                                    <div class="v-share v-hide row">
                                        <div class="col-xs-12">
                                            <div class="text-center">
                                                <button data-v-action="SendShare" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">share</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-xs-3"></div>
                        </div>

                    </div>
                </div>
            </div>



            <div class="v-decorate-actions-popup v-hide">

                <div class="v-main-fixed-area">
                    <div class="container">

                        <div class="row v-top">
                            <div class="col-xs-4"></div>
                            <div class="col-xs-4">

                                <div class="v-decorate-actions-popup-container">

                                    <span data-v-action="ClosePopup" class="v-decorate-actions-popup-close-icon v-action"></span>
                                    <p class="v-decorate-actions-popup-title-text">What would you like to do</p>

                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-grout-zone">
                                                <button data-v-action="GroutZone" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Grout
                                                    Area
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-tile-zone">
                                                <button data-v-action="TileZone" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Tile
                                                    Area
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-edit-zone">
                                                <button data-v-action="EditZone" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Adjust
                                                    Area
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-delete-zone">
                                                <button data-v-action="DeleteZone" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Delete
                                                    Area
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-change-single-tile">
                                                <button data-v-action="ChangeSingleTile" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Change
                                                    Single Tile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-move-single-tile">
                                                <button data-v-action="MoveSingleTile" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">

                                                    Move
                                                    Single Tile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 text-center">
                                            <div class="v-decorate-action-button v-action-decorate-delete-single-tile">
                                                <button data-v-action="DeleteSingleTile" class="[ACTIVE] btn btn-default v-button v-action"
                                                        type="submit">
                                                    Delete
                                                    Single Tile
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xs-4"></div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>

</div>

<div class="v-message v-hide">send message</div>

<script type="text/javascript" src="js/RendererAll-min.js"></script>
<script type="text/javascript" src="js/TilingEngineAll-min.js"></script>
<script type="text/javascript" src="js/All-en.min.js"></script>
<script type="text/javascript" src="js/main.min.js"></script>
<div class="loader-overlay" style="display: none;"></div>


<div id="ajaxcartpro-progress" class="loader" style="display: none;">
    <img src="images/al.gif" alt="" />
    <p>Please wait...</p>
</div>
<script>
    function showform() {
        var x = document.getElementById("searchform");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("resetfilter").style.display = "block";
            // document.getElementById("searchimage").style.display = "none";
            $("#search-gallery").css('display' , 'none');


        } else {
            x.style.display = "none";
            document.getElementById("resetfilter").style.display = "none";
            document.getElementById("galleryimage").style.display = "block";
            $("#search-gallery").css('display' , 'none');
            resetfilter();



        }
    }
    function resetfilter() {
        document.getElementById("galleryimage").style.display = "block";
        // document.getElementById("searchimage").style.display = "none";
        $("#search-gallery").css('display' , 'none');

        document.getElementById("searchname").value = '';
        for(var i=1; i<5 ; i++) {
            document.getElementById('type'+i).checked = false;
        }
        for(var i=1; i<10 ; i++) {
            document.getElementById('color'+i).checked = false;
        }
        for(var i=1; i<8 ; i++) {
            document.getElementById('finish'+i).checked = false;
        }
        for(var i=1; i<11 ; i++) {
            document.getElementById('mate'+i).checked = false;
        }
        for(var i=1; i<19 ; i++) {
            document.getElementById('size'+i).checked = false;
        }
        for(var i=1; i<11 ; i++) {
            document.getElementById('spfe'+i).checked = false;
        }
        for(var i=1; i<7 ; i++) {
            document.getElementById('thin'+i).checked = false;
        }


    }
</script>

</body>

</html>