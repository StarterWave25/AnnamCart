<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "food_delivery";

$conn = mysqli_connect($servername, $username, $password, $database);

$name = $_POST["user-name"];
$mobile_number = $_POST["mobilenumber"];
$issue = $_POST["issue"];
$sql = "insert into contact values('$name','$mobile_number','$issue')";

$result = mysqli_query($conn, $sql);

echo " <html>
      <body>
        <h1>we will contact you in few mintiues</h1>
      </body>
  </html>";
