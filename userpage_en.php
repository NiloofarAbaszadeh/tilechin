<?php
include ('loginpage.php');
include ('db.php');
$tt = $conn->query("set names utf8");
$sql="SELECT *FROM `user`WHERE `tenantid` = '1'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result);
$comp=$row['tenantid'];

$result11 = mysqli_query($conn,"SELECT * FROM `companies`WHERE `tennantid` =$comp");
if($result11) {
    $row11 = mysqli_fetch_array($result11);
    $company = $row11['company_name'];
}
mysqli_close($conn);
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
            border-radius: 0px 0px 5px 5px;
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
        table td {
            background-color: #81BDA4;
            text-align: center;
        }
        a {
            color: black;}
        .well {
            height: 280px;}
    </style>
</head>
<body>
<br/>
<div class="col-sm-12">
    <div>
        <a  class="btn btn-warning backbtn" href="logout_en.php">Logout</a>

    </div>
    <br/>
    <br/>
    <div class="container" id="addform" style="display: block">
        Wellcome <b><?php if(isset($_SESSION['login_user'])){ echo $_SESSION['login_user'];} ?> </b>user
        <br/>
        <form  class="well form-horizontal"  id="addform" style="direction: rtl" enctype="multipart/form-data">
            <h1>User Panel</h1>
            <br/>
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <table class="table">
                    <td>
                        <a href="chideman_en.php"  > <b> Tile layout </b></a>
                    </td>
                    </tr>
                </table>
            </div>
            <div class="col-sm-3"></div>
        </form>
    </div>
</div>
</body>
</html>
