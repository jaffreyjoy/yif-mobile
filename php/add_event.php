<?php
include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$title = $_data["title"];
$description = $_data["description"];
$address = $_data["address"];
$start_date = $_data["start_date"];
$end_date = $_data["end_date"];
$start_time = $_data["start_time"];
$end_time = $_data["end_time"];
$organizer_id = $_data["organizer_id"];

// $city = $_data["city"];
// $state = $_data["state"];
// $country = $_data["country"];

$sql = "INSERT INTO events (title, description, address,start_date, end_date, start_time, end_time, organizer_id) VALUES ('$title','$description','$address','$start_date','$end_date','$start_time','$end_time','$organizer_id')";
$result = $conn->query($sql);

if ($result) 
    echo "success";
else
    echo "fail";


?>