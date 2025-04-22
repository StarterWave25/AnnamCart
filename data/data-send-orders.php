<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    $orderId = $input['orderId'];
    $cart = $input['cart'];
    $total = $input['total'];
    $dummyTotal = $input['dummyTotal'];
    $items = $input['items'];
    $resId = $input['resId'];
    $location = $input['mapsLink'];

    $sql = "INSERT INTO orders (order_id, mobile, res_id, items, total, dtotal, location, status) 
            VALUES ('$orderId',$mobile,$resId,$items,$total,$dummyTotal,'$location','pending')";
    mysqli_query($conn, $sql);

    $sql = "SELECT item_id,price,dprice FROM items WHERE res_id = $resId";
    $result = mysqli_query($conn, $sql);

    foreach ($cart as $cartItem) {
        mysqli_data_seek($result, 0);
        while ($row = mysqli_fetch_assoc($result)) {
            if ($row['item_id'] == $cartItem['itemId']) {
                $query = "INSERT INTO order_items (order_id, item_id, quantity,price,dprice) 
                    VALUES ('$orderId',{$cartItem['itemId']},{$cartItem['quantity']},{$row['price']},{$row['dprice']})";
                break;
            }
        }
        mysqli_query($conn, $query);
    }
    echo json_encode('Success');
} else {
    echo json_encode('Failure');
}
