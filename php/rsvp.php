<?php
include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$going = $_data["going"];
$user_id = $_data["user_id"];
$event_id = $_data["event_id"];
$attend_as = $_data["attend_as"];

if ($going == 0) // not going
{
	$sql = "SELECT * FROM attendees WHERE participant_id = '$user_id' AND event_id='$event_id'";
	$result = $conn->query($sql);
	if ($result) { // row exists. delete it
		if ($result->num_rows>0) { // row exists. delete it
			$sql = "DELETE * FROM attendees WHERE participant_id = '$user_id' AND event_id='$event_id'";
			$result = $conn->query($sql);
			if ($result) 
			    echo "success";
			else
			    echo "fail";
		}
	}
}
else 			 // going
{
	$sql = "SELECT * FROM attendees WHERE participant_id = '$user_id' AND event_id='$event_id'";
	$result = $conn->query($sql);
	if ($result) { 
		if ($result->num_rows>0) { // row exists. check participant or volunteer
			$sql = "UPDATE attendees SET attend_as = '$attend_as'";
			$result = $conn->query($sql);
			if ($result) 
			    echo "success";
			else
			    echo "fail";
		}
		else
		{
			$sql = "INSERT INTO attendees (event_id,participant_id,attend_as) VALUES ('$event_id','$participant_id','$attend_as')";
			$result = $conn->query($sql);
			if ($result) 
			    echo "success";
			else
			    echo "fail";
		}
	}
}


$sql = "UPDATE events SET status = 0 WHERE id = '$id' ";
$result = $conn->query($sql);

if ($result) 
    echo "success";
else
    echo "fail";


?>