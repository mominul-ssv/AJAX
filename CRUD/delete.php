<?php
include('dbConnection.php');
$data = stripslashes(file_get_contents("php://input"));
$myData = json_decode($data, true);
$id = $myData['sid'];


// Deleting student
if (!empty($id)) {
  $sql = "DELETE FROM student WHERE id = {$id}";
  if ($conn->query($sql) == TRUE) {
    echo "Student deleted successfully";
  } else {
    echo "Unable to delete student";
  }
} else {
  echo "Student id could not be fetched";
}
