<?php
include 'connect.php';

$user_type = $_POST["user_type"];
$username = $_POST["username"];
$password = $_POST["password"];
$email_id = $_POST["email_id"];
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$address = $_POST["address"];
$city = $_POST["city"];
$state = $_POST["state"];
$country = $_POST["country"];
$phone_no = $_POST["phone_no"];

if ($user_type == "0") { //organizers
	$table = "organizers";
}
else					 //participants
{
	$table = "participants";
}

//check if in db

$sql = "SELECT * FROM '{$table}' WHERE username = '$username'";
if($result->num_rows>0){						//username already present
   echo "Username already exists";
}
else
{
	//insert in db
	$sql = "INSERT INTO '{$table}' (`username`, `password`, `email_id`, `first_name`, `last_name`, `address`, `city`, `state`, `country`, `phone_no`) VALUES ('$username','$password','$email_id','$first_name','$last_name','$address','$city','$state','$country','$phone_no')";

	$result = $conn->query($select);
	if($result)
		echo "success";
	else
		echo "error";
}

?>