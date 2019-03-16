<?php
$servername = "localhost";
$username = "id8987474_yif_mobile";
$password = "Lkjhg12345";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>