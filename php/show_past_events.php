<?php
include 'connect.php';
$data = json_decode(file_get_contents("php://input"), true);

$id = $data["participant_id"];
$current_date = date("y-m-d");

class Response{
	var $number_of_rows = -1;
	var $event_details;
	var $attend_as;
}

$response = new Response;

$sql = "SELECT * FROM events WHERE start_date < '$current_date' AND status = 1 AND id IN (SELECT event_id FROM attendees WHERE participant_id = '$id')";
$result = $conn->query($sql);

if ($result) {
	if($result->num_rows>0){
		$response->number_of_rows = $result->num_rows;
	    $response->event_details = mysqli_fetch_all($result);

		$sql1 = "SELECT attend_as FROM attendees WHERE participant_id = '$id' AND event_id IN (SELECT id FROM events WHERE start_date < '$current_date' AND status = 1)";
		$result1 = $conn->query($sql1);

		$response->attend_as = mysqli_fetch_all($result1);		
		echo json_encode($response);
	}
	else
	{
		echo "No Past Events";
	}
}


?>