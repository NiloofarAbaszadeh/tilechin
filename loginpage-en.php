<?php
include ('db.php');
session_start(); // Starting Session
$error=''; // Variable To Store Error Message
if(isset($_POST['submit'])) {
    if( (empty($_POST['username'])) || (empty($_POST['password'])) ){
        $error = " Fill in the fields";
    } else {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        $sql = "SELECT * FROM user WHERE username='$user' AND password='$pass'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if($row){
            $_SESSION['login_user'] = $row['username'];
            $_SESSION['user_login_role'] = $row['user_role'];
            $_SESSION['tenantid'] = $row['tenantid'];

            header("Refresh: 1; URL=index.php");
        } else {
            $error = "undifined user";
            header("Refresh: 1; URL=index.php");
        }


        $conn->close();
    }
}

?>

