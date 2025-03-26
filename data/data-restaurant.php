<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];
$restaurantId = $_GET['restaurant-id'];
$sql = "SELECT restaurants.*, most_ordered_items.item_name FROM restaurants JOIN most_ordered_items ON restaurants.res_id = $restaurantId ";

$result = mysqli_query($conn, $sql);
$head = mysqli_fetch_assoc($result);

$sql = " SELECT * FROM items WHERE $restaurantId = res_id ";

$result = mysqli_query($conn, $sql);
$body = [];
while ($row = mysqli_fetch_assoc($result)) {
  $body[] = $row;
}

$response = [
  "resHead" => $head,
  "resBody" => $body
];

echo json_encode($response);

exit();
