<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $itemId = $input['itemId'];
    $quantity = $input['quantity'];
    if ($quantity == 0) {
        $sql = "DELETE FROM cart WHERE mobile = $mobile AND item_id = $itemId";
    } else {
        $sql = "INSERT INTO cart (mobile,item_id,quantity) VALUES ($mobile,$itemId,$quantity) ON DUPLICATE KEY UPDATE quantity = $quantity";
    }
    mysqli_query($conn, $sql);
}

$sql = "SELECT cart.*,items.*,restaurants.* FROM cart JOIN items ON cart.item_id=items.item_id JOIN restaurants ON items.res_id = restaurants.res_id WHERE mobile=$mobile ORDER BY cart_id";
$result = mysqli_query($conn, $sql);
$items = [];

while ($row = mysqli_fetch_assoc($result)) {
    $items[] = $row;
}
echo json_encode($items);
