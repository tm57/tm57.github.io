<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['comment'];

    $email_from = 'tmatate.act@gmail.com';//<== update the email address
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user".$name."\n".
        "Here is the message:\n".$message."\n";
        
    $to = "tmatate.act@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    //Send the email!
    mail($to,$email_subject,$email_body,$headers);
    //done. redirect to thank-you page 
       
    header('Location: thank-you.html');
?>