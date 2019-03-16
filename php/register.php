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
$phone_no = $data["phone_no"];

// $user_type = "0";
// $username = "b2";
// $password = "b1";
// $email_id = "b1";
// $first_name = "b1";
// $last_name = "b1";
// $address = "b1";
// $phone_no = "111";

// $city = $data["city"];
// $state = $data["state"];
// $country = $data["country"];

if ($user_type==0) {
	$table = "organizers";
}
else{
	$table = "participants";
}



$sql = "SELECT * FROM $table WHERE username = '$username'";
$result = $conn->query($sql);

if ($result) {
	if($result->num_rows>0){						//username already present
	   echo "username";
	   exit(0);
	}
}

$sql = "SELECT * FROM $table WHERE email_id = '$email_id'";
$result = $conn->query($sql);

if ($result) {
	if($result->num_rows>0){						//username already present
	   echo "email_id";
	   exit(0);
	}
}

$sql = "SELECT * FROM $table WHERE phone_no = '$phone_no'";
$result = $conn->query($sql);

if ($result) {
	if($result->num_rows>0){						//username already present
	   echo "phone_no";
	   exit(0);
	}
}

$sql = "INSERT INTO $table (username, password, email_id, first_name, last_name, address, phone_no) VALUES ('$username','$password','$email_id','$first_name','$last_name','$address','$phone_no')";

$result = $conn->query($sql);

if($result)
	echo "success";
else
	echo "fail";



?>