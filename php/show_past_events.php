<?php
include 'connect.php';
$data = json_decode(file_get_contents("php://input"), true);

$id = $data["participant_id"];
$current_date = date("y-m-d");

class Response{
	var $number_of_rows = -1;
	var $event_details = array();
	var $attend_as =  array();
}

$response = new Response;

$sql = "SELECT * FROM events WHERE start_date < '$current_date' AND status = 1 AND id IN (SELECT event_id FROM attendees WHERE participant_id = '$id')";
$result = $conn->query($sql);

if ($result) {
	if($result->num_rows>0){
		$response->number_of_rows = $result->num_rows;
	    while($row = $result->fetch_assoc()){
   			array_push($response->event_details,$row);
   		}

		$sql1 = "SELECT attend_as FROM attendees WHERE participant_id = '$id' AND event_id IN (SELECT id FROM events WHERE start_date < '$current_date' AND status = 1)";
		$result1 = $conn->query($sql1);
		while($row = $result1->fetch_assoc()){
   			array_push($response->attend_as,$row);
   		}
		echo json_encode($response);
	}
	else
	{
		echo "No Past Events";
	}
}


?>