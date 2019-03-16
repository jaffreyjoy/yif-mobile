<?php
include 'connect.php';

$username = $_POST["username"];
$password = $_POST["password"];

class Response{
	var $user_type = -1;
	var $res;
}

$response = new Response;


$sql = "SELECT * FROM organizers WHERE username = '$username'&& password = '$password'";
$result = $conn->query($select);

if($result->num_rows>0){
	//organizer
	while($row = $result->fetch_assoc()){
        $ret = json_encode($row);
    }
    $response->res = $ret;
    $response->user_type = 0;
    echo json_encode($response);
    exit(0);
}

$sql = "SELECT * FROM participant WHERE username = '$username'&& password = '$password'";
$result = $conn->query($select);

if($result->num_rows>0){
	//organizer
	while($row = $result->fetch_assoc()){
        $ret = json_encode($row);
    }
    $response->res = $ret;
    $response->user_type = 1;
    echo json_encode($response);
    exit(0);
}

$sql = "SELECT * FROM admin WHERE username = '$username'&& password = '$password'";
$result = $conn->query($select);

if($result->num_rows>0){
	//organizer
	while($row = $result->fetch_assoc()){
        $ret = json_encode($row);
    }
    $response->res = $ret;
    $response->user_type = 2;
    echo json_encode($response);
    exit(0);
}
else
{
	echo "Invalid Username";
}

?>