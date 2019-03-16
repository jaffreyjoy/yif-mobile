<?php
include 'connect.php';
$data = json_decode(file_get_contents("php://input"), true);

$current_date = date("y-m-d");

$sql = "SELECT * FROM events WHERE start_date >= '$current_date' AND status = 1";
$result = $conn->query($sql);

$response=array();

if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
   		array_push($response,$row);
    }
    echo json_encode($response); 
}
else
{
	echo "No Upcomming Events";
}

?>