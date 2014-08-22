<?php
	$name = $_POST["name"];
	$visitor_email = $POST["email"];
	$msg = $_POST["comment"];
	$from = "tmatate.act@gmail.com";
	$subject = "NEW FORM SUBMISSION";
	$body = "$name has sent you a message.\n.
	    email address: $visitor_email.\n
	    Here is the message:\n $msg";
	$to = "tmatate.act@gmail.com";
	$headers = "From: $from\r\n".;
	mail($to,$subject,$body,$headers);
?>