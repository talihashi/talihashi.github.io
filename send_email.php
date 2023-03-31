<?php
if(isset($_POST['submit'])){
    $to = "talihashi@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New Message from Your Portfolio Website";

    $headers = "From: " . $name . " <" . $email . ">" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $body = "<html><body>";
    $body .= "<h2>New Message from Your Portfolio Website</h2>";
    $body .= "<p><b>Name:</b> " . $name . "</p>";
    $body .= "<p><b>Email:</b> " . $email . "</p>";
    $body .= "<p><b>Message:</b> " . $message . "</p>";
    $body .= "</body></html>";

    mail($to, $subject, $body, $headers);

    echo "Thank you for your message!";
}
?>