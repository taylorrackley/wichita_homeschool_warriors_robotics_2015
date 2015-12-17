<?php
if ($_POST['submit']) {
    $contact = $_POST['contact'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if ($contact == 'team') {
        $to = 'taylorrack@sbcglobal.net';
    }
    else {
        $to = 'taylorrack@sbcglobal.net';
    }
	
	// Meta data for email 
    $headers = "From: $name <$email>". "\r\n";
    $headers .= "Reply-To: $name <$email>". "\r\n";
    $headers .= 'MIME-Version: 1.0'. "\r\n";
    $headers .= "Content-Type: text/plain". "\r\n";
    $headers .= "Content-Transfer-Encoding: 7bit". "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: http://whwrbest.com/contact/");
    }
    else {
        header("Location: google.com");
    }
}
// team@whwrbest.com team
// webmaster@whwrbest.com webmaster
?>
