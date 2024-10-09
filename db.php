<?php
///////////local info ////////////////
$servername = 'setarehtile.com';
$username = 'setarhtile';
$password = 'setarehtile';
$dbname = 'tilechin';
///////// host info//////////////////
//$servername = 'localhost';
//$username ='butsaloni_anisa';
//$password = 'VG9B7hwz';
//$dbname = 'butsaloni_anisa';
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>