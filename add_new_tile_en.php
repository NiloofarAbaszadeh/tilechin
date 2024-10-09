<?php
include ('loginpage.php');
include ('db.php');

if(!isset($_SESSION['login_user'])){
    header("Location: index.php");
}
mysqli_query($conn, "SET NAMES utf8");
$sql = "SELECT * FROM `tile_xml_table` ORDER BY `sku` DESC 
   LIMIT 1";
$result = mysqli_query($conn, $sql);
while($row =$result->fetch_assoc()){
    $skusamplefirst = $row['sku'];
    $skusampl=$skusamplefirst + 5;

}
if(isset($_POST['submit'])){
    $sample="";
    $data="";
    echo ("New Tile Added successfully."."<br/>\n");
    $data = $_POST;
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
    $imageadress = 'thumbnails/tiles/' .$skusampl.'.jpg'   ;
//    $jsonitem = file_get_contents("./products.json");
//    $objitems = json_decode($jsonitem, true);
//    $hitslen = count($objitems['hits']);
//    echo ($hitslen);
//    echo "<br/>\n";
//    echo ($hitslen * 5);
//    echo "<br/>\n";
//    $sample = $objitems['hits'][0];
//    $skusampl=$sample['sku']+(5*$hitslen);
//    echo $sample['sku'];
//    echo "<br/>\n";
//    echo $skusampl;
//    echo "<br/>\n";


//    $skusample=(string)$skusampl;
//    $imageadress = 'thumbnails/tiles/' .$skusample.'.jpg'   ;
//    $sample['name'] = $data['name'];
//    $sample['cs_sample_price'] = $data['price'];
//    $sample['cs_type'] = $data['product_type'];
//    $sample['sku']= $skusample;
//    $sample['size'] = $data['size'];
//    $sample['brand'] = $data['brand'];
//    $sample['tenantid'] = $_SESSION['tenantid'];
//    $sample['samples_allowed'] = $data['product_type'];
//    $sample['_highlightResult']['name']['value'] = $data['name'];
//    $sample['_highlightResult']['cs_type']['value'] = $data['product_type'];
//    $sample['_highlightResult']['sku']['value'] = $skusample ;
//    $sample['_highlightResult']['filter_size']['value'] = $data['filter_size'] ;
//    $sample['_highlightResult']['filter_material']['value'] = $data['filter_material'] ;
//    $sample['_highlightResult']['finish']['value'] = $data['finish'] ;
//    $sample['_highlightResult']['product_type']['value']=$data['product_type'];
//    $sample['_highlightResult']['floor_or_wall']['value']=$data['product_type'];
//    $sample['_highlightResult']['filter_colour']['value'] = $data['filter_colour'];
//    $sample['_highlightResult']['size']['value'] = $data['size'];
//    $sample['_highlightResult']['samples_allowed']['value'] = $data['product_type'];
//    $sample['_highlightResult']['brand']['value'] = $data['brand'];
//    $sample['_highlightResult']['tenantid']['value'] = "001";
//
//
//    array_push($objitems['hits'],$sample);
//    $jsonData = json_encode($objitems, JSON_UNESCAPED_UNICODE);
//    file_put_contents('./products.json', $jsonData);

    //////////////// add in to xml file  /////////////
//    $array = str_split($data['size']);
//    $s=count($array);
//    $heigth="";
//    $width="";
//    if($s == "5"){
//        for($i=0; $i< 2; $i++){
//            $heigth = $heigth . $array[$i];
//        }
//        for($i=3; $i< 5; $i++){
//            $width = $width . $array[$i];
//        }
//    }
//    elseif($s == "6"){
//        for($i=0; $i< 2; $i++){
//            $heigth = $heigth . $array[$i];
//        }
//        for($i=3; $i< 6; $i++){
//            $width = $width . $array[$i];
//        }
//    }
//    elseif ($s == "7"){
//        for($i=0; $i< 3; $i++){
//            $heigth = $heigth . $array[$i];
//        }
//        for($i=4; $i< 7; $i++){
//            $width = $width . $array[$i];
//        }
//    }
//    elseif ($s== "8"){
//        for($i=0; $i< 4; $i++){
//            $heigth = $heigth . $array[$i];
//        }
//        for($i=5; $i< 9; $i++){
//            $width = $width . $array[$i];
//        }
//    }
//    else{
//        echo("Error size");
//    }
//
//    $file = 'visualiser.xml';
//    $xml = simplexml_load_file($file);
//    $galleries = $xml-> channel;
//    $gallery = $galleries->addChild('item');
//    $gallery->addChild('sku', $skusample);
//    $gallery->addChild('name', $data['name']);
//    $gallery->addChild('size', $data['size']);
//    $gallery->addChild('height', $heigth);
//    $gallery->addChild('width', $width);
//    $gallery->addChild('price', $data [ 'price']);
//    $gallery->addChild('filter_colour', $data['filter_colour']);
//    $gallery->addChild('filter_material', $data['filter_material']);
//    $gallery->addChild('filter_size', "L");
//    $gallery->addChild('finish', $data['finish']);
//    $gallery->addChild('image', $imageadress);
//    $gallery->addChild('floor_or_wall', $data['product_type']);
//    $gallery->addChild('product_type', $data['product_type']);
//    $gallery->addChild('brand', $data['brand']);
//    $gallery->addChild('tenantid', $_SESSION['tenantid']);
//
//    $xml->asXML($file);
    ////////////////////////  add in to database /////////////////////////////////////
    mysqli_query($conn, "SET NAMES utf8");
    $sql = "INSERT INTO tile_xml_table (`sku`, `name`, `size`, `height`, `width`, `price`, `filter_colour`, `filter_material`, `filter_size`, `finish`, `image`, `floor_or_wall`, `product_type`, `brand`, `tenantid`) VALUES
  ('" . $skusampl . "','" . $data['name'] . "','" . $data['size'] . "','" . $heigth . "','" . $width . "','" . $data [ 'price'] . "','" . $data['filter_colour'] . "','" . $data['filter_material'] . "','" . $data['filter_size'] . "','" . $data['finish'] . "','" . $imageadress . "','" . $data['product_type'] . "','" . $data['product_type'] . "','" . $data['brand'] . "','" . $_SESSION['tenantid'] . "')";

    $result = mysqli_query($conn, $sql);
    if (empty($result)) {
        $error_message = mysqli_error($conn) . "\n";
    }

    ////////////////// upload  main file ////////////////////////
    $target_dir = "uploads/";
    $target_dir = "thumbnails/tiles/";
    $ba=$skusampl.".jpg";
    $target_file = $target_dir . basename($ba);
    move_uploaded_file($_FILES["fileToUpload1"]["tmp_name"], $target_file);

    $target_dir = "tiles/";
    $target_file = $target_dir .$skusampl.'_n.png' ;
    move_uploaded_file($_FILES["fileToUpload3"]["tmp_name"], $target_file);
    $target_file = $target_dir .$skusampl.'_c.png' ;
    move_uploaded_file($_FILES["fileToUpload2"]["tmp_name"], $target_file);

}
else{
    echo "";
}
?>
<!--<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">-->
<!--<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">-->
<!--<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>-->
<!DOCTYPE html>
<html >
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
        input{
            height: 34px;
            width: 100%;
        }
        .input-group-addon{
            border: 1px #ccc;
            border-radius: 0px;
        }
        .form-horizontal .control-label{
            text-align: left;
        }

        form h1 {
            font-size: 18px;
            background: #F6AA93 none repeat scroll 0% 0%;
            color: rgb(255, 255, 255);
            padding: 22px 25px;
            border-radius: 5px 5px 0px 0px;
            margin: auto;
            text-shadow: none;
            text-align:center;
        }
        .form-horizontal .control-label{
            text-align: right;
        }
        .bouton-contact{
            background-color: #81BDA4;
            color: #FFF;
            text-align: center;
            width: 20%;
            border:0;
            padding: 17px 25px;
            border-radius: 5px 5px 5px 5px;
            cursor: pointer;
            margin-top: 40px;
            font-size: 18px;
        }
        html,
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-family: IRANSans !important;
        }
        .backbtn{
            width: 10%;
            float: left;
        }
        .thumb-image {
            float: left;
            width: 100px;
            position: relative;
            padding: 5px;
        }
    </style>
</head>
<body>
<br/>
<div class="col-sm-12">
    <div>
        <form action="adminpage-en.php">
            <input type="submit" value="Back" class="btn btn-warning backbtn"/>
        </form>

    </div>
    <br/>
    <br/>
    <div class="container" id="addform" style="display: block">
        <form method="post" class="well form-horizontal"    id="addform" style="direction: rtl" enctype="multipart/form-data">
            <h1>Add New Tile</h1>
            <br/>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Name  </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <input type="text" name="name" id="name" required />

                        </div>
                    </div>
                    <label class="col-md-2 control-label">size  </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="size" id="inputSize" class="form-control selectpicker" required>
                                <?php
                                $sql = "SELECT name FROM tilesize ";
                                $sizetile = $conn->query($sql);
                                if ($sizetile->num_rows > 0) {
                                    while ($row = $sizetile->fetch_assoc()) {
                                        ?><option><?php
                                        echo  $row["name"]; ?></option>
                                        <?php
                                    }
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Colour</label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="filter_colour" id="inputColour" class="form-control selectpicker" required>
                                <?php
                                $sql = "SELECT id, name FROM tilecolour ";
                                $colortile = $conn->query($sql);
                                if ($colortile->num_rows > 0) {
                                    while ($row = $colortile->fetch_assoc()) {
                                            ?>
                                            <option ><?php echo  $row["name"]; ?></option>
                                            <?php
                                    }
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                    <label class="col-md-2 control-label">Price </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <input type="text" name="price" id="price" data-rule="required" data-msg=" Please Fill The field"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Material</label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="filter_material" id="inputMaterila" class="form-control selectpicker" required>
                                <?php
                                $sql = "SELECT name FROM tilematerial ";
                                $materialtile = $conn->query($sql);
                                if ($materialtile->num_rows > 0) {
                                    while ($row = $materialtile->fetch_assoc()) {
                                        ?>
                                            <option ><?php echo  $row["name"]; ?></option>
                                        <?php
                                    }
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                    <label class="col-md-2 control-label">Finish </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="finish" id="inputFinish" class="form-control selectpicker" required>
                                <?php
                                $sql = "SELECT name FROM tilefinish ";
                                $finishtile = $conn->query($sql);
                                if ($finishtile->num_rows > 0) {
                                    while ($row = $finishtile->fetch_assoc()) {
                                ?>
                                <option ><?php echo  $row["name"]; ?></option>
                                <?php
                                }
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label"> Brand </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="brand" id="inputType" class="form-control selectpicker" required>
                                <?php
                                $conn->query("set names utf8");
                                $sql = "SELECT name FROM tilecompany";
                                $companytile = $conn->query($sql);
                                if ($companytile->num_rows > 0) {
                                    while ($row = $companytile->fetch_assoc()) {
                                        ?><option><?php echo  $row["name"]; ?></option>
                                        <?php
                                    }
                                }
                                ?>
                            </select>

                        </div>
                    </div>
                    <label class="col-md-2 control-label">  Usage </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <select name="product_type" id="inputType" class="form-control selectpicker" required>
                                <?php
                                $sql = "SELECT name FROM tileusages ";
                                $usagetile = $conn->query($sql);
                                if ($usagetile->num_rows > 0) {
                                    while ($row = $usagetile->fetch_assoc()) {
                                ?>
                                <option ><?php echo  $row["name"]; ?></option>
                                <?php
                                }
                                }
                                ?>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Main Image  </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <div id="wrapper" style="margin-top: 20px;"><input name="fileToUpload1" id="fileUpload1" multiple="multiple" type="file" required/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 selectContainer" id="image-holder1">
                    </div>
                    <label class="col-md-1 control-label"></label>

                </div>
            </div>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Thubnail image   </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <div id="wrapper" style="margin-top: 20px;"><input name="fileToUpload2" id="fileUpload2" multiple="multiple" type="file" required/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 selectContainer" id="image-holder2">
                    </div>
                    <label class="col-md-1 control-label"></label>
                </div>
            </div>
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label"> Bump Image  </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <div id="wrapper" style="margin-top: 20px;"><input name="fileToUpload3" id="fileUpload3" multiple="multiple" type="file" required/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 selectContainer" id="image-holder3">
                    </div>
                    <label class="col-md-1 control-label"></label>
                </div>
            </div>
            <input type="text" name="filter_size" id="filter_size"  value="L" hidden="true" />
            <div class="form-group">
                <div class="col-md-12">
                    <button type="submit" name="submit" value="submit" class="bouton-contact" style="float: right;">Submit </button>
                </div>

            </div>
        </form>
    </div>
</div>
<script>
    $(document).ready(function() {
        $("#fileUpload1").on('change', function() {
            //Get count of selected files
            var countFiles = $(this)[0].files.length;
            var imgPath = $(this)[0].value;
            var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
            var image_holder = $("#image-holder1");
            image_holder.empty();
            if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
                if (typeof(FileReader) != "undefined") {
                    //loop for each file selected for uploaded.
                    for (var i = 0; i < countFiles; i++)
                    {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
                        }
                        image_holder.show();
                        reader.readAsDataURL($(this)[0].files[i]);
                    }
                } else {
                    alert("This browser does not support FileReader.");
                }
            } else {
                alert("Pls select only images");
            }
        });
        $("#fileUpload2").on('change', function() {
            //Get count of selected files
            var countFiles = $(this)[0].files.length;
            var imgPath = $(this)[0].value;
            var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
            var image_holder = $("#image-holder2");
            image_holder.empty();
            if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
                if (typeof(FileReader) != "undefined") {
                    //loop for each file selected for uploaded.
                    for (var i = 0; i < countFiles; i++)
                    {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
                        }
                        image_holder.show();
                        reader.readAsDataURL($(this)[0].files[i]);
                    }
                } else {
                    alert("This browser does not support FileReader.");
                }
            } else {
                alert("Pls select only images");
            }
        });
        $("#fileUpload3").on('change', function() {
            //Get count of selected files
            var countFiles = $(this)[0].files.length;
            var imgPath = $(this)[0].value;
            var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
            var image_holder = $("#image-holder3");
            image_holder.empty();
            if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
                if (typeof(FileReader) != "undefined") {
                    //loop for each file selected for uploaded.
                    for (var i = 0; i < countFiles; i++)
                    {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
                        }
                        image_holder.show();
                        reader.readAsDataURL($(this)[0].files[i]);
                    }
                } else {
                    alert("This browser does not support FileReader.");
                }
            } else {
                alert("Pls select only images");
            }
        });
    });
</script>
</body>
</html>
