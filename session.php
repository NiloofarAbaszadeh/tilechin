<?php
include ('db.php');
session_start();// Starting Session
// Storing Session
$user_check=$_SESSION['login_user'];
// SQL Query To Fetch Complete Information Of User
$sql = "select username from login where username='$user_check' ";
$result = $conn->query($sql);
$login_session =$result['username'];
if(!isset($login_session)){
    $conn->close(); // Closing Connection
    header('Location: index.php'); // Redirecting To Home Page
}
?>