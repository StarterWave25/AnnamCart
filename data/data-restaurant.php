<?php
include 'conn.php';
session_start();

$restaurantId = $_GET['restaurant-id'];

/* $sql = "SELECT restaurants.*, most_ordered_items.item_name FROM restaurants JOIN most_ordered_items ON restaurants.res_id = $restaurantId ";
$result = mysqli_query($conn, $sql);
$head = mysqli_fetch_assoc($result); */

$stmt = mysqli_prepare($conn, "SELECT restaurants.*, most_ordered_items.item_name FROM restaurants JOIN most_ordered_items ON restaurants.res_id = ?");
mysqli_stmt_bind_param($stmt, "i", $restaurantId);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$head = mysqli_fetch_assoc($result);

/* $sql = " SELECT * FROM items WHERE $restaurantId = res_id ";
$result = mysqli_query($conn, $sql);
$body = [];
while ($row = mysqli_fetch_assoc($result)) {
  $body[] = $row;
} */

$stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE ? = res_id");
mysqli_stmt_bind_param($stmt, "i", $restaurantId);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$body = [];
while ($row = mysqli_fetch_assoc($result)) {
  $body[] = $row;
}
mysqli_stmt_close($stmt);
mysqli_close($conn);

$response = [
  "resHead" => $head,
  "resBody" => $body
];

if ($head && $body) {
  echo json_encode($response);
} else {
  echo json_encode("Sorry, you can't have access to this restaurant page !");
}


exit();
