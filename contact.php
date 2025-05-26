<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "food_delivery";

$conn = mysqli_connect($servername, $username, $password, $database);

$name = $_POST["user-name"];
$mobile_number = $_POST["mobilenumber"];
$issue = $_POST["issue"];
if (!preg_match("/^[6-9]\d{9}$/", $mobile_number)) {
  header("Location: contactus.php?error=invalidnumber");
  exit;
}
if (empty($name) || empty($mobile_number) || empty($issue)) {
  header("Location: contactus.php?error=empty");
  exit;
}
$sql = "INSERT INTO contact VALUES('$name','$mobile_number','$issue')";

$result = mysqli_query($conn, $sql);
header("Location: contactus.php?success=true");