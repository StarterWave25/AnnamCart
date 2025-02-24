<?php
include 'conn.php';
$sql = "SELECT * FROM items";
$result = mysqli_query($conn,$sql);
$items = [];
if(isset($_GET['query'])){
    $query = $_GET['query'];
    $sql = "SELECT restaurants.res_name, items.* FROM restaurants JOIN items ON restaurants.res_id = items.res_id WHERE items.item_name LIKE '%$query%'";
    $result = mysqli_query($conn,$sql);
}
while($row = mysqli_fetch_assoc($result)){
    $items[] = $row;
}
echo json_encode($items);
