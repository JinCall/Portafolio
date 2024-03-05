<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'santiagocaleee@gmail.com'; 
        $mail->Password   = 'apagztslitgqrsrh'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = '587';

        $mail->setFrom('santiagocaleee@gmail.com');
        $mail->addAddress($email, $name);

        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name $lName\nEmail: $email\nMessage: $message";

        $mail->send();

        echo 'success';
    } catch (Exception $e) {
        echo 'error';
    }
} else {
    echo 'invalid request';
}

Var_dump($_POST); return;
?>