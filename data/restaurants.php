<?php
include 'conn.php';
$sql = "SELECT restaurants.*,items.item_name FROM restaurants JOIN items ON restaurants.best_item = items.item_id";
$result = mysqli_query($conn, $sql);
$restaurants = [];
while ($row = mysqli_fetch_assoc($result)) {
    $restaurants[] = $row;
}
echo json_encode($restaurants);
