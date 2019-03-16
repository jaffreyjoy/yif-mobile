<?php
include 'connect.php';

$username = $_POST["username"];
// $username = "a";

$select = "SELECT * FROM organizers WHERE username = '$username'";
$result = $conn->query($select);


class Response{
	var $user_type = -1;
	var $res;
}

$response = new Response;

if($result->num_rows>0){						//user is in organizer 0
    while($row = $result->fetch_assoc()){
        $ret = json_encode($row);
    }
    $response->res = $ret;
    $response->user_type = 0;
    echo json_encode($response);
}
else
{
	$select = "SELECT * FROM participants WHERE username = '$username'";
    $result = $conn->query($select);

    if($result->num_rows>0){						//user is in participant 1
        while($row = $result->fetch_assoc()){
       		$ret = json_encode($row);
	    }
	    $response->res = $ret;
	    $response->user_type = 1;
	    echo json_encode($response);
    }
    else if(true)
    {
    	$select = "SELECT * FROM admin WHERE username = '$username'";
	    $result = $conn->query($select);

	    if($result->num_rows>0){						//user is in admin 2
	        while($row = $result->fetch_assoc()){
       			$ret = json_encode($row);
		    }
		    $response->res = $ret;
		    $response->user_type = 2;
		    echo json_encode($response);
	    }
    }
    else
    {
    	//no such user exists
    	echo "Invalid User";
    }
}

?>