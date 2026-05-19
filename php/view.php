<?php
$conn = new mysqli("localhost", "root", "", "hospital_db");

$result = $conn->query("SELECT * FROM messages");

while ($row = $result->fetch_assoc()) {
    echo "<h3>{$row['name']}</h3>";
    echo "<p>{$row['email']}</p>";
    echo "<p>{$row['message']}</p><hr>";
}
?>