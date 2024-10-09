<?php
include ('db.php');
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
        .btn{
            color: black;
            border: 1px solid #7c868f;
            background-color: ghostwhite;
            font-size: small;
        }

        .backbtn {
            color: #fff;
            background-color: #f0ad4e;
            border-color: #eea236;
            margin-top: 5px;
        }
        div h1 {
            font-size: 18px;
            background: #F6AA93 none repeat scroll 0% 0%;
            color: rgb(255, 255, 255);
            padding: 22px 25px;
            border-radius: 5px 5px 0px 0px;
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
        .btn-warning{
            border-radius: 5px 5px 5px 5px;
        }
    </style>
</head>
<body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script>
    document.getElementById("succ").style.display = "none";
    document.getElementById("fail").style.display = "none";
</script>
<div class="container col-sm-12">
    <div style="float: left;">
        <form action="adminpage-en.php">
            <input type="submit" value="Back" class="backbtn " style="border-radius: 5px 5px 5px 5px;"/>
        </form>
    </div>
</div>
<br/>
<div  class="welld" >
    <h1>Settings </h1>
</div>
<div class="col-sm-12">
    <div id="succ" style="display: none">
        <h5> Add successfully completed</h5>
    </div>
    <div id="fail" style="display: none">
        <h5> Deletion successfully completed</h5>
    </div>
</div>
<div class="container welld">
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit Size Item</h3>
        <hr>
        <div style="direction: rtl">
            <button onclick="add_new_size()" class="btn">Add New Item</button>
            <button onclick="delet_size()" class="btn">Delete Item</button>
        </div>
        <div id="addsize" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="size" name="size" placeholder="100x100">
                <?php
                if(isset($_POST['size'])) {
                    $size = $_POST['size'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tilesize`( `name`) VALUES ('$size') ";
                    $sizetile = $conn->query($sql);
                    if ($sizetile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>

                        <?php

                }
                ?>
                <br/>
                <button type="submit" class="btn-warning" style="margin-top: 5px">ADD</button>
            </form>
        </div>
        <div id="deletesize" style="display: none; direction: rtl; float: right;">
            <form  method="post" class="inline">
                <select class="form-control " id="sizedelet" name="sizedelet">
                    <?php
                    $servername = 'localhost';
                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tilesize ";
                    $sizetile = $conn->query($sql);
                    if ($sizetile->num_rows > 0) {
                        while ($row = $sizetile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Remove</button>
                <?php
                if(isset($_POST['sizedelet'])){
                    $delet=$_POST['sizedelet'];
                    $sql = "DELETE FROM `tilesize` WHERE name='$delet' ";
                    $sizetile = $conn->query($sql);
                    if($sizetile == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            </form>
        </div>
    </div>
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit Materila Item</h3>
        <hr>
        <div style="direction: rtl">
            <button onclick="add_new_material()" class="btn">Add New Item</button>
            <button onclick="delet_material()" class="btn">Delete Item</button>
        </div>
        <div id="addmaterial" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="material" name="material">
                <?php
                if(isset($_POST['material'])){
                    $material = $_POST['material'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tilematerial`( `name`) VALUES ('$material') ";
                    $materialtile = $conn->query($sql);
                    if($materialtile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>
                        <?php

                }
                ?>
                <br/>
                <button type="submit"  class="btn-warning" style="margin-top: 5px">Add</button>
            </form>
        </div>
        <div id="deletematerial" style="display: none; direction: rtl; float: right;">
            <form  method="post" class="inline">
                <select class="form-control " id="materialdelet" name="materialdelet">
                    <?php
                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tilematerial ";
                    $materialtile = $conn->query($sql);
                    if ($materialtile->num_rows > 0) {
                        while ($row = $materialtile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Remove</button>
                <?php
                if(isset($_POST['materialdelet'])){
                    $delet=$_POST['materialdelet'];
                    $sql = "DELETE FROM `tilematerial` WHERE name='$delet' ";
                    $materialtile = $conn->query($sql);
                    if($materialtile == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            </form>
        </div>
    </div>
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit brand item</h3>
        <div style="direction: rtl">
            <button onclick="add_new_brand()" class="btn">Add New item</button>
            <button onclick="delet_brand()" class="btn">Delete Item</button>
        </div>
        <div id="addbrand" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="brand" name="brand">
                <?php
                if(isset($_POST['brand'])){
                    $brand = $_POST['brand'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tilecompany`( `name`) VALUES ('$brand') ";
                    $brandtile = $conn->query($sql);
                    if($brandtile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>
                        <?php
                }
                ?>
                <br/>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Add</button>
            </form>
        </div>
        <div id="deletebrand" style="display: none; direction: rtl; float: right;">
            <form  method="post" class="inline">
                <select class="form-control " id="branddelet" name="branddelet">
                    <?php
                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tilecompany ";
                    $brandtile = $conn->query($sql);
                    if ($brandtile->num_rows > 0) {
                        while ($row = $brandtile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px" >Remove</button>
                <?php
                if(isset($_POST['branddelet'])){
                    $delet=$_POST['branddelet'];
                    $sql = "DELETE FROM `tilecompany` WHERE name='$delet' ";
                    $brandtile = $conn->query($sql);
                    if($brandtile == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            </form>
        </div>
    </div>
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit Colure Item</h3>
        <hr>
        <div style="direction: rtl">
            <button onclick="add_new_colour()" class="btn">Add New Item</button>
            <button onclick="delet_colour()" class="btn">Delete Item</button>
        </div>
        <div id="addcolour" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="colour" name="colour">
                <?php
                if(isset($_POST['colour'])){
                    $colour = $_POST['colour'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tilecolour`( `name`) VALUES ('$colour') ";
                    $colourtile = $conn->query($sql);
                    if($colourtile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>
                        <?php
                }
                ?>
                <br/>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Add</button>
            </form>
        </div>
        <div id="deletecolour" style="display: none; direction: rtl; float: right;">
            <form  method="post">
                <select class="form-control" id="colourdelet" name="colourdelet">
                    <?php

                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tilecolour ";
                    $colourtile = $conn->query($sql);
                    if ($colourtile->num_rows > 0) {
                        while ($row = $colourtile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px" >Remove</button>
                <?php
                if(isset($_POST['colourdelet'])){
                    $delet=$_POST['colourdelet'];
                    $sql = "DELETE FROM `tilecolour` WHERE name='$delet' ";
                    $colourtiles = $conn->query($sql);
                    if($colourtiles == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php

                }
                ?>
            </form>
        </div>
    </div>
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit Finish Item </h3>
        <hr>
        <div style="direction: rtl">
            <button onclick="add_new_finish()" class="btn">Add New Item</button>
            <button onclick="delet_finish()" class="btn">Delete Item</button>
        </div>
        <div id="addfinish" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="finish" name="finish">
                <?php
                if(isset($_POST['finish'])){
                    $finish = $_POST['finish'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tilefinish`( `name`) VALUES ('$finish') ";
                    $finishtile = $conn->query($sql);
                    if($finishtile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            <br/>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Add</button>
            </form>
        </div>
        <div id="deletefinish" style="display: none; direction: rtl; float: right;">
            <form  method="post">
                <select class="form-control" id="finishdelet" name="finishdelet">
                    <?php
                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tilefinish ";
                    $finishtile = $conn->query($sql);
                    if ($finishtile->num_rows > 0) {
                        while ($row = $finishtile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Remove</button>
                <?php
                if(isset($_POST['finishdelet'])){
                    $delet=$_POST['finishdelet'];
                    $sql = "DELETE FROM `tilefinish` WHERE name='$delet' ";
                    $finishtiles = $conn->query($sql);
                    if($finishtiles == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            </form>
        </div>    </div>
    <div class="col-sm-6">
        <h3 style="text-align: right">Edit Usage Item</h3>
        <hr>
        <div style="direction: rtl">
            <button onclick="add_new_usage()" class="btn">Add New Item</button>
            <button onclick="delet_usage()" class="btn">Delete Item</button>
        </div>
        <div id="addusage" style="display: none; direction: rtl;">
            <form  method="post">
                <input type="text" id="usage" name="usage">
                <?php
                if(isset($_POST['usage'])){
                    $usage = $_POST['usage'];
                    $tt = $conn->query("set names utf8");
                    $sql = "INSERT INTO `tileusages`( `name`) VALUES ('$usage') ";
                    $usagetile = $conn->query($sql);
                    if($usagetile == 1)
                        ?>
                        <script>
                            document.getElementById("succ").style.display = "block";
                        </script>
                        <?php
                }
                ?>
                <br/>
                <button type="submit" class="btn-warning" style="margin-top: 5px">Add</button>
            </form>
        </div>
        <div id="deleteusage" style="display: none; direction: rtl; float: right;">
            <form  method="post" class="inline">
                <select class="form-control " id="usagedelet" name="usagedelet">
                    <?php
                    $tt = $conn->query("set names utf8");;
                    $sql = "SELECT name FROM tileusages ";
                    $usagetile = $conn->query($sql);
                    if ($usagetile->num_rows > 0) {
                        while ($row = $usagetile->fetch_assoc()) {
                            ?><option><?php echo  $row["name"]; ?></option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <button type="submit" class="btn-warning" style="margin-top: 5px" >Remove</button>
                <?php
                if(isset($_POST['usagedelet'])){
                    $delet=$_POST['usagedelet'];
                    $sql = "DELETE FROM `tileusages` WHERE name='$delet' ";
                    $usagetile = $conn->query($sql);
                    if($usagetile == 1)
                        ?>
                        <script>
                            document.getElementById("fail").style.display = "block";
                        </script>
                        <?php
                }
                ?>
            </form>
        </div>
    </div>
</div>
<script>
    function add_new_usage() {
        if(document.getElementById("addusage").style.display == "none"){
            document.getElementById("addusage").style.display = 'block';
            document.getElementById("deleteusage").style.display = 'none';
        }
        else{
            document.getElementById("addusage").style.display = "none";
        }

    }
    function delet_usage() {
        if(document.getElementById("deleteusage").style.display == "none"){
            document.getElementById("deleteusage").style.display = 'block';
            document.getElementById("addusage").style.display = 'none';

        }
        else{
            document.getElementById("deleteusage").style.display = "none";
        }
    }
</script>
<script>
    function add_new_colour() {
        if(document.getElementById("addcolour").style.display == "none"){
            document.getElementById("addcolour").style.display = 'block';
            document.getElementById("deletecolour").style.display = 'none';
        }
        else{
            document.getElementById("addcolour").style.display = "none";
        }

    }
    function delet_colour() {
        if(document.getElementById("deletecolour").style.display == "none"){
            document.getElementById("deletecolour").style.display = 'block';
            document.getElementById("addcolour").style.display = 'none';

        }
        else{
            document.getElementById("deletecolour").style.display = "none";
        }
    }
</script>
<script>
    function add_new_finish() {
        if(document.getElementById("addfinish").style.display == "none"){
            document.getElementById("addfinish").style.display = 'block';
            document.getElementById("deletefinish").style.display = 'none';
        }
        else{
            document.getElementById("addfinish").style.display = "none";
        }

    }
    function delet_finish() {
        if(document.getElementById("deletefinish").style.display == "none"){
            document.getElementById("deletefinish").style.display = 'block';
            document.getElementById("addfinish").style.display = 'none';

        }
        else{
            document.getElementById("deletefinish").style.display = "none";
        }
    }
</script>
<script>
    function add_new_size() {
        if(document.getElementById("addsize").style.display == "none"){
            document.getElementById("addsize").style.display = 'block';
            document.getElementById("deletesize").style.display = 'none';
        }
        else{
            document.getElementById("addsize").style.display = "none";
        }

    }
    function delet_size() {
        if(document.getElementById("deletesize").style.display == "none"){
            document.getElementById("deletesize").style.display = 'block';
            document.getElementById("addsize").style.display = 'none';

        }
        else{
            document.getElementById("deletesize").style.display = "none";
        }
    }
</script>
<script>
    function add_new_material() {
        if(document.getElementById("addmaterial").style.display == "none"){
            document.getElementById("addmaterial").style.display = 'block';
            document.getElementById("deletematerial").style.display = 'none';
        }
        else{
            document.getElementById("addmaterial").style.display = "none";
        }

    }
    function delet_material() {
        if(document.getElementById("deletematerial").style.display == "none"){
            document.getElementById("deletematerial").style.display = 'block';
            document.getElementById("addmaterial").style.display = 'none';

        }
        else{
            document.getElementById("deletematerial").style.display = "none";
        }
    }
</script>
<script>
    function add_new_brand() {
        if(document.getElementById("addbrand").style.display == "none"){
            document.getElementById("addbrand").style.display = 'block';
            document.getElementById("deletebrand").style.display = 'none';
        }
        else{
            document.getElementById("addbrand").style.display = "none";
        }

    }
    function delet_brand() {
        if(document.getElementById("deletebrand").style.display == "none"){
            document.getElementById("deletebrand").style.display = 'block';
            document.getElementById("addbrand").style.display = 'none';

        }
        else{
            document.getElementById("deletebrand").style.display = "none";
        }
    }
</script>
</body>
</html>
