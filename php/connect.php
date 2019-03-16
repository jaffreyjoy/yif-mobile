<?php
$servername = "localhost";
$username = "id8987474_yif_mobile";
$password = "Lkjhg12345";
$dbname = "id8987474_yif_mobile";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";
?>