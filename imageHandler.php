<?php
	$postedImageFolder = dirname(__FILE__) . '/postedImages/';
	$basePathForFile = 'postedImages/';

    $theImage = current($_FILES);
	
	if (is_uploaded_file($theImage['tmp_name'])){
		$srcPathForEditor = $basePathForFile . $theImage['name'];
	    $filetowrite = $postedImageFolder . $theImage['name'];
	    if (move_uploaded_file($theImage['tmp_name'], $filetowrite)) {
	    	$jsonToReturn = array('location' => $srcPathForEditor);
	    	// echo json_encode($theImage);
	    	echo json_encode($jsonToReturn);
	    } else {
	    	echo 'FAILURE MOVING FILE TO postedImages DIRECTORY ON SERVER';
	    	// Notify editor that the upload failed
			header("HTTP/1.0 500 Server Error");	
	    }
	} else { 
		echo 'FAILURE ACCESSING UPLOADED FILE ON SERVER';
	    // Notify editor that the upload failed
		header("HTTP/1.0 500 Server Error");
	}
?>