<?php
include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $_data["event_id"];

$sql = "UPDATE events SET status = 0 WHERE id = '$id' ";
$result = $conn->query($sql);

if ($result) 
    echo "success";
else
    echo "fail";


?>