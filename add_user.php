<?php
include ('db.php');
if(isset($_POST)){
    $user= $_POST['entername'];
    $pass = $_POST['enterpasswoed'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email= $_POST['email'];
    $tenantid= $_POST['tenantid'];
    $sql = "INSERT INTO `user`(`username`, `password`, `tenantid`, `firstname`, `lastname`, `email`) VALUES ('$user','$pass','$tenantid','$firstname','$lastname','$email')";
    $result = $conn->query($sql);
    if($result == true){
        echo " کاربر جدید با موفقیت اضافه شد";
        header("Refresh: 1; URL=index.php");

    } else {
        echo " کاربر جدید اضافه نشد!";
        header("Refresh: 1; URL=add_new_user.php");

    }

    $conn->close();


}
else
    echo "چنین کاربری وجو ندارد";


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
</head>
</html>
