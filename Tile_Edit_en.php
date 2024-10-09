<?php
include ('loginpage.php');
include ('db.php');
$tt = $conn->query("set names utf8");

if (!$conn) {
    die("Could not connect to server: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES utf8");
$sql = "SELECT * FROM `tile_xml_table` WHERE sku=''";
$result = mysqli_query($conn, $sql);
while($row =$result->fetch_assoc()) {
    $skusamplefirst = $row['sku'];
    $skusampl = $skusamplefirst + 5;
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.easyPaginate.js"></script>
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
    <!--    <!-- Latest compiled and minified CSS -->
    <!--    <link rel="stylesheet" href="css/bootstrap.min.css">-->
    <!---->
    <!--    <!-- jQuery library -->
    <!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
    <!---->
    <!--    <!-- Latest compiled JavaScript -->
    <!--    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>-->
    <style>
        body {font-family: IRANSans !important;}
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 45%;
        }
        .btn{
            color: black;
            border: 1px solid ghostwhite;
            background-color: ghostwhite;
            font-size: small;
        }


        .backbtn {
            color: #fff;
            background-color: #f0ad4e;
            border-color: #f0ad4e;
            margin-top: 5px;
        }
        div h1 {
            font-size: 18px;
            background: #F6AA93 none repeat scroll 0% 0%;
            color: rgb(255, 255, 255);
            padding: 22px 25px;
            border-radius: 5px 5px 5px 5x;
            margin: auto;
            text-shadow: none;
            text-align:center;
        }
        button {
            padding: 5px;
            font-size: small;
        }
        input {
            margin-top: 5px;
            padding: 5px 5px 5px 5px;
        }
        select{
            margin-right: 5px;
            margin-top: 5px;
        }
        .welld {
            min-height: 20px;
            padding: 19px;
            margin-bottom: 20px;
        }
        input[type=text], input[type=password] {
            width: 68%;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }


        /* Set a style for all buttons */
        /*button {*/
        /*background-color: #4CAF50;*/
        /*color: white;*/
        /*padding: 14px 20px;*/
        /*margin: 8px 0;*/
        /*border: none;*/
        /*cursor: pointer;*/
        /*width: 100%;*/
        /*}*/

        button:hover {
            opacity: 0.8;
        }

        /* Extra styles for the cancel button */
        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
        }

        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            padding-top: 60px;
        }

        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }
        .modal-content-delet {
            background-color: #fefefe;
            margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid #888;
            width: 50%; /* Could be more or less, depending on screen size */
        }

        /* The Close Button (x) */
        .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: red;
            cursor: pointer;
        }

        /* Add Zoom Animation */
        .animate {
            -webkit-animation: animatezoom 0.6s;
            animation: animatezoom 0.6s
        }

        @-webkit-keyframes animatezoom {
            from {-webkit-transform: scale(0)}
            to {-webkit-transform: scale(1)}
        }

        @keyframes animatezoom {
            from {transform: scale(0)}
            to {transform: scale(1)}
        }

        /* Change styles for span and cancel button on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
            .cancelbtn {
                width: 100%;
            }
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

        form{
            padding-bottom: 10px;
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
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<div class="container col-sm-12">
    <div style="float: left;">
        <form action="adminpage-en.php">
            <input type="submit" value="Back" class=" btn btn-warning backbtn " />
        </form>
    </div>
</div>
<br/>
<br/>
<div  class="welld" >
    <h1>Edit Tiles </h1>
</div>
<div style="text-align: center" >
   <span> <button type="submit" name="nextsubmit" class="next btn-primary" id="nextsubmit" style="padding: 5px 5px 5px 5px;border-radius: 5px 5px 5px 5px; " disabled>Next </button>
        <input id="endimage" style="border: none;width: 25px; text-align: center;background-color: ivory"   disabled>Page  <input  id="startimage" style="border: none; width: 25px;text-align: center;background-color: ivory" disabled>from
        <button type="submit" class="prev btn-primary" name="prevsubmit" id="prevsubmit" style="padding: 5px 5px 5px 5px;border-radius: 5px 5px 5px 5px; " disabled>Prev</button>
    </span>
    <br/>
    <br/>
</div>
<div id="galleryimage" style="display: block">
    <?php
    $I=0;
    mysqli_query($conn, "SET NAMES utf8");
    $user_login_tenantid = $_SESSION['tenantid'];
    $sql = "SELECT * FROM tile_xml_table WHERE tenantid ='$user_login_tenantid' ";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    while ($data = $result->fetch_assoc()) {
    $I++;
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
                     alt="<?php echo $I; ?>">
            </div>
            <div class="vs-p-name">
                <p class="v-tile-thumbnail-text">
                    <span><?php echo("<br/>\n" . $gallerie_name );?></span>
                    <span><input  class="hidden" name="sku" id="sku<?php echo $I-1;?>" value="<?php echo $sku_search;?>"/></span>
                    <br/>
                    <button onclick="showmodal(<?php echo $I-1;?>)" style="width:auto; padding: 2px 5px 2px 5px; border-radius: 5px 5px 5px 5px;" class="edite" >Edit </button>
                    <button onclick="showmodaldelete(<?php echo $I-1;?>)" style="width:auto; padding: 2px 10px 2px 10px; border-radius: 5px 5px 5px 5px;" class="delete">Delete </button>
                </p>
            </div>
        </div>
    </div>
    <?php
    }
    }
    ?>
</div>
<script>

    var start = 0;
    var nb = 12;
    var end = start + nb;
    var length = "<?php echo $itemlength; ?>";
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
        console.log(start);
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

        console.log(start);
        console.log(end);

        if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
        else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();
    });

</script>
<div id="id01" class="modal ">
    <form   class="modal-content animate form-horizontal" action="Tile_save_edit_en.php" method="post" enctype="multipart/form-data">
        <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <h1>Edit Tile</h1>
        <br/>
        <br/>
        <br/>
        <input id="idHolder" class="hidden" >
        <div class="container">
            <div class="row col-sm-12">
                <div class="form-group">
                    <label class="col-md-2 control-label">Name</label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <input type="text" name="name" id="name" required />

                        </div>
                    </div>
                    <label class="col-md-2 control-label">Size</label>
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
                    <label class="col-md-2 control-label">Price  </label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"></span>
                            <input type="text" name="price" id="price" />

                        </div>
                    </div>
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
                                        <option ><?php echo $row['name']; ?></option>
                                        <?php
                                    }
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                    <label class="col-md-2 control-label">Finish</label>
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
                                        <option ><?php echo $row['name']; ?></option>
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
                            <select name="brand" id="inputBrand" class="form-control selectpicker" required>
                                <?php
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
                    <label class="col-md-2 control-label">  usage </label>
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

            <div class="row col-sm-12" id="showimage"style="display: block">
                <div class="form-group">
                    <div class="col-md-2 selectContainer">
                        <div class="input-group">
                            <img class="thumb-image" id="fileUpload33" src="" style="display: block;"/>
                        </div>
                    </div>
                    <label class="col-md-2 control-label"> Bump Image </label>
                    <div class="col-md-2 selectContainer">
                        <div class="input-group">
                            <img class="thumb-image" id="fileUpload22" src="" style="display: block;"/>
                        </div>
                    </div>
                    <label class="col-md-2 control-label">Thubnail image </label>

                    <div class="col-md-2 selectContainer">
                        <div class="input-group">
                            <img class="thumb-image" id="fileUpload11" src="" style="display: block;"/>
                        </div>
                    </div>
                    <label class="col-md-2 control-label"> Main Image </label>
                    <br/>
                    <br/>
                    <br/>
                    <div class="col-md-2 selectContainer">
                        <div class="input-group">
<!--                            <button type="button" onclick="showeditimage()" class="btn-success" style="border-radius: 5px 5px 5px 5px; " >Edi Images</button>-->
                        </div>
                    </div>
                    <div class="col-md-2 selectContainer">
                        <div class="input-group">

                        </div>
                    </div>
                    <div class="col-md-2 selectContainer">
                        <div class="input-group">
                        </div>
                    </div>
                </div>
            </div>
            <div id="editimage" style="display: none;">
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

            </div>
            <input type="text" name="sku" id="sku" class="hidden" />
            <input type="text" name="editimageinput" id="editimageinput" class="hidden" >
                <div  id="butdisplay"style="display: block;"><button type="button"   onclick="showeditimage()" class="btn-success" style="float: left;border-radius: 5px 5px 5px 5px; margin-right: 5px;" >Edi Images</button></div>

                <div><button type="submit" class="btn-success " style="float: left; border-radius: 5px 5px 5px 5px; padding: 5px 10px 5px 10px" >Edit</button></div>
        </div>
    </form>
</div>
</div>
<div id="id02" class="modal ">
    <form   class="modal-content animate form-horizontal" action="Tile_save_delete_en.php" method="post" enctype="multipart/form-data" style="width: 40%">
        <div class="imgcontainer">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <h1>Remove Tile</h1>
        <br/>
        <br/>
        <br/>
        <input id="idHolder2" class="hidden" >
        <div class="container">
            <lable class="col-sm-6"></lable>
            <label class="col-md-6 control-label"> Confirm product removal by name1</label>
            <div class="form-group">
                <div class="col-md-9 selectContainer">
                    <div class="input-group">
                        <input type="text" name="name2" id="name2" style="border: none;text-align: center;" disabled />
                    </div>
                </div>
            </div>
            <input type="text" name="skudelete" id="skudelete" class="hidden" />
            <div class="form-group">
                <div class="col-md-9 selectContainer">
                    <button type="submit" class="btn-warning" style="; padding: 5px 25px 5px 25px;margin-right: 20%" >Delete</button>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </form>
</div>

<script>
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>
<script>
    var modal = document.getElementById('id02');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>
<script>
    function showmodal(i) {
        document.getElementById('id01').style.display='block';
        document.getElementById("showimage").style.display ="block";
        document.getElementById("editimage").style.display ="none";
        document.getElementById("editimageinput").value = "false";
        $("#fileUpload1").prop('required',false);
        $("#fileUpload2").prop('required',false);
        $("#fileUpload3").prop('required',false);

        var x = document.getElementsByName("sku")[i].id;
        var y = document.getElementById(x).value;
        document.getElementById('idHolder').value = y;
        var ssku = $("#idHolder").val();
        var datastring = { sku : ssku };
        $.ajax({
            type: "GET",
            url: "tile_details.php",
            data: datastring,
            success: function (result) {
                var res = result.split("|");
                document.getElementById('name').value= res[1];
                $("#inputSize").val(res[2]);
                document.getElementById('price').value= res[5];
                $("#inputColour").val(res[6]);
                $("#inputMaterila").val(res[7]);
                $("#inputFinish").val(res[9]);
                $("#inputType").val(res[11]);
                $("#inputBrand").val(res[13]);
                document.getElementById('sku').value= res[0];
                var str = res[0];
                str = str.substring(str.indexOf('"') + 1);
                var address1='/thumbnails/tiles/'+str+'.jpg';
                var address2='/tiles/'+str+'_c.png';
                var address3='/tiles/'+str+'_n.png';
                $('#fileUpload11').attr('src',address1 );
                $('#fileUpload22').attr('src',address2 );
                $('#fileUpload33').attr('src',address3 );
                $('#fileUpload1').attr('src',address1 );
            }
        });

    }
</script>
<script>
    function showmodaldelete(i) {
        document.getElementById('id02').style.display='block';
        var x = document.getElementsByName("sku")[i].id;
        var y = document.getElementById(x).value;
        document.getElementById('idHolder2').value = y;
        var ssku = $("#idHolder2").val();
        var datastring = { sku : ssku };
        $.ajax({
            type: "GET",
            url: "tile_details.php",
            data: datastring,
            success: function (result) {
                //console.log(result);
                var res = result.split("|");
                document.getElementById('name2').value= res[1];
                document.getElementById('skudelete').value= res[0];
            }
        });

    }
</script>
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
<script>
    function showeditimage() {
        document.getElementById("showimage").style.display ="none";
        document.getElementById("editimage").style.display ="block";
        document.getElementById('editimageinput').value= "true";
        $("#fileUpload1").prop('required',true);
        $("#fileUpload2").prop('required',true);
        $("#fileUpload3").prop('required',true);
        document.getElementById('butdisplay').style.display="none";

    }

</script>
</body>
</html>
