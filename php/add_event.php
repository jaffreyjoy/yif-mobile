<?php
include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$description = $data["description"];
$address = $data["address"];
$start_date = $data["start_date"];
$end_date = $data["end_date"];
$start_time = $data["start_time"];
$end_time = $data["end_time"];
$organizer_id = $data["organizer_id"];

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