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



if($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $itemId = $input['itemId'];
    $quantity = $input['quantity'];
    $sql = "INSERT INTO cart (mobile,item_id,quantity) VALUES ($mobile,$itemId,$quantity)";
    mysqli_query($conn,$sql);
}
