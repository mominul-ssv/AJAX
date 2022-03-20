<?php
include('dbConnection.php');

// When you click edit button, the below code gets executed
$data = stripslashes(file_get_contents("php://input"));
$myData = json_decode($data, true);
$id = $myData['sid'];

// Retrieve specific student information
$sql = "SELECT * FROM student WHERE id = {$id}";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

// Returning JSON format data as response to ajax call
echo json_encode($row);
