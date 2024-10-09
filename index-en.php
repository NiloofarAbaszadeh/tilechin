<?php
include('loginpage-en.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
    echo $_SESSION['login_user'];
    if($_SESSION['login_user'] == 'admin'){
        header("location: adminpage-en.php");
    }
    else{
        header("location: userpage_en.php");
    }

}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"  />
    <style>
        @font-face {
            font-family: IRANSansWeb;
            src: url(fonts/woff/IRANSansWeb.woff);
        }
        * {
            font-family: IRANSansWeb;
        }

        .panel-info>.panel-heading {
            color: black;
            background-color: #81BDA4;
            border-color: #81BDA4;
        }
        .panel-info {
            border-color: #81BDA4;
        }
        input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }

        button:hover {
            opacity: 0.8;
        }

        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
        }

        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
        }

        img.avatar {
            width: 40%;
            border-radius: 50%;
        }

        .container {
            padding: 16px;
        }

        span.psw {
            float: right;
            padding-top: 16px;
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
        .input-group-addon {
            padding: 19px 11px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            color: #555;
            text-align: center;
            background-color: white;
            border: 1px solid white;
            border-radius: 4px;}
        .btn-primary {
            width: 100px;}
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 45%;
        }
        a.disabled {
            pointer-events: none;
            cursor: default;
        }
        .input-group .form-control{
            margin-top: 0px;
        }

    </style>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.easyPaginate.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"  />
</head>
<body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<div class="container">
    <a  class="disabled" href="index-en.php" style="float: left;"><img src="images/en.jpg">EN</a>
    <a  href="index.php" style="float: left;"><img src="images/iran.png">PER</a>
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
            <div class="panel-heading">
                <div class="panel-title" style="text-align: center;"><b>LogIn</b></div>
                <!--                <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">فراموشی رمز عبور؟</a></div>-->
            </div>

            <div style="padding-top:30px" class="panel-body" >

                <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                <img class="center" src="images/anisalogo.jpg" />
                <br/>
                <br/>
                <br/>
                <form method="post" action="" id="loginform" class="form-horizontal" role="form">

                    <div style="margin-bottom: 25px" class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username">
                    </div>

                    <div style="margin-bottom: 25px" class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="login-password" type="password" class="form-control" name="password" placeholder="password">
                    </div>

                    <div style="margin-top:10px" class="form-group">
                        <!-- Button -->

                        <div class="col-sm-12 controls">
                            <input id="submit" name="submit" type="submit" value="Login" class="btn btn-primary">
                        </div>
                    </div>
                    <div class="form-group hidden">
                        <div class="col-md-12 control">
                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%;direction: rtl;" >
                                قبلا عضو نشده اید؟!
                                <a href="add_new_user.php">
                                    عضویت
                                </a>
                            </div>
                        </div>
                    </div>
                    <span><?php echo $error; ?></span>
                </form>



            </div>
        </div>
    </div>

</body>
</html>
