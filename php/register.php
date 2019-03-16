<?php
include 'connect.php';
$data = json_decode(file_get_contents("php://input"), true);


$user_type = $data["user_type"];
$username = $data["username"];
$password = $data["password"];
$email_id = $data["email_id"];
$first_name = $data["first_name"];
$last_name = $data["last_name"];
$address = $data["address"];
// $city = $data["city"];
// $state = $data["state"];
// $country = $data["country"];
$phone_no = $data["phone_no"];

if ($user_type == "0") { //organizers
	$table = "organizers";
}
else					 //participants
{
	$table = "participants";
}

//check if in db

$sql = "SELECT * FROM '{$table}' WHERE username = '$username'";
$result = $conn->query($select);

if ($result) {
	if($result->num_rows>0){						//username already present
	   echo "Username already exists";
	}
}
else
{
	//insert in db
	// $sql = "INSERT INTO '{$table}' (`username`, `password`, `email_id`, `first_name`, `last_name`, `address`, `city`, `state`, `country`, `phone_no`) VALUES ('$username','$password','$email_id','$first_name','$last_name','$address','$city','$state','$country','$phone_no')";

	$sql = "INSERT INTO '{$table}' (`username`, `password`, `email_id`, `first_name`, `last_name`, `address`, `phone_no`) VALUES ('$username','$password','$email_id','$first_name','$last_name','$address','$phone_no')";

	$result = $conn->query($select);
	if($result)
		echo "success";
	else
		echo "error";
}

?>