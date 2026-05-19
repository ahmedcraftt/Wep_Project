<?php
$conn = new mysqli("localhost", "root", "6112005", "hospital_db");

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (name, email, message)
VALUES ('$name', '$email', '$message')";

$conn->query($sql);

echo "Saved successfully!";
?>