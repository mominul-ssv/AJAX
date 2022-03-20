<?php
include('dbConnection.php');
/**
 * [1] stripslashes function can be used to clean up data retrieved from
 *     a database or from an HTML form. 
 * 
 * [2] php://input - This is a read-only stream that allows us to read raw 
 *     data from the request body. It returns all the new raw data after the 
 *     HTTP-headers of the request, regardless of the content type.
 * 
 * [3] json_decode - It takes JSON string and converts it into a PHP object or 
 *     array, if true then associative array.
 */

$data = stripslashes(file_get_contents("php://input"));
$myData = json_decode($data, true);

$id = $myData['id'];
$name = $myData['name'];
$email = $myData['email'];
$password = $myData['password'];

// Insert or Update data
if (!empty($name) && !empty($email) && !empty($password)) {

  $sql = "INSERT INTO student(id, name, email, password) 
  VALUES('$id', '$name', '$email', '$password')
  ON DUPLICATE KEY UPDATE name='$name', email='$email', password='$password'";

  if ($conn->query($sql) == TRUE) {
    echo "Student saved successfully";
  } else {
    echo "Unable to save student";
  }
} else {
  echo "Fill all fields.";
}
