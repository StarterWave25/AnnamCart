<?php
include 'conn.php';
$sql = "SELECT restaurants.res_name,items.* FROM restaurants JOIN items ON restaurants.res_id=items.res_id";
$result = mysqli_query($conn, $sql);
$items = [];
while ($row = mysqli_fetch_assoc($result)) {
    $items[] = $row;
}

echo json_encode($items);
