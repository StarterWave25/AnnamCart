<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];

$sql = "SELECT cart.*,items.*,restaurants.* FROM cart JOIN items ON cart.item_id=items.item_id JOIN restaurants ON items.res_id = restaurants.res_id WHERE mobile=$mobile";
$result = mysqli_query($conn,$sql);
$items = [];
while($row = mysqli_fetch_assoc($result)){
    $items[] = $row;
}
echo json_encode($items);