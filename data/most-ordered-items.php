<?php
include 'conn.php';
$sql = "SELECT restaurants.res_name,most_ordered_items.* FROM restaurants JOIN most_ordered_items ON restaurants.res_id = most_ordered_items.res_id";
$result = mysqli_query($conn, $sql);
$items = [];
while ($row = mysqli_fetch_assoc($result)) {
    $items[] = $row;
}

echo json_encode($items);