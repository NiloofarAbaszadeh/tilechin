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
            border-radius: 4px;
        }
        .form-control{
            text-align: right;
        }
        .btn-primary  {
            width: 100px;}
        .btn-warning  {
            width: 100px;}
    </style>
</head>
<body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<div class="container">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
            <div class="panel-heading">
                <div class="panel-title" style="text-align: center;"><b>عضویت</b></div>
            </div>
            <div style="padding-top:30px" class="panel-body" >
                <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                <form method="post" action="add_user.php" class="inline" autocomplete="off" >
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="firstname" type="text" class="form-control" name="firstname" value="" placeholder="نام " required>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    </div>
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="lastname" type="text" class="form-control" name="lastname" value="" placeholder="نام خانوادگی" required>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    </div>
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="email" type="text" class="form-control" name="email" value="" placeholder="ایمیل">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-send"></i></span>
                    </div>
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="tenantid" type="text" class="form-control" name="tenantid" value="" placeholder="شناسه شرکت">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-cog"></i></span>
                    </div>
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="entername" type="text" class="form-control" name="entername" value="" placeholder="نام کاربری"required>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    </div>
                    <div style="margin-bottom: 25px" class="input-group">
                        <input id="enterpasswoed" type="password" class="form-control" name="enterpasswoed" placeholder="رمز عبور" required>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    </div>
                    <div style="margin-top:10px" class="form-group">
                        <div class="col-sm-12 controls">
                            <a id="btn-login" href="index.php" class="btn btn-warning inline" style="vertical-align: -webkit-baseline-middle;">انصراف</a>
                           <button id="btn-login" type="submit" class="btn btn-primary inline">ثبت  </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
</html>

