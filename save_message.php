<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $timestamp = date("Y-m-d H:i:s");

    $data = "Name: $name\nEmail: $email\nMessage: $message\nTimestamp: $timestamp\n\n";
    file_put_contents('messages.txt', $data, FILE_APPEND);

    echo "Takk for din melding!";
}
?>
