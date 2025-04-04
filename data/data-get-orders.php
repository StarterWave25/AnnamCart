<?php
include 'conn.php';

session_start();
$mobile = $_SESSION['mobile'];

if (isset($_GET['order-id'])) {
    $orderId = $_GET['order-id'];

    $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE order_id = '$orderId'";
    $result = mysqli_query($conn, $sql);
    $restaurant = mysqli_fetch_assoc($result);


    $sql = "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = '$orderId'";
    $result = mysqli_query($conn, $sql);
    $orderedItems = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $orderedItems[] = $row;
    }

    $sql = "SELECT area FROM users where mobile = $mobile";
    $result = mysqli_query($conn, $sql);
    $address = mysqli_fetch_assoc($result);

    echo json_encode(['orderedItems' => $orderedItems, 'restaurant' => $restaurant, 'address' => $address]);
} else {
    $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE mobile = $mobile ORDER BY time DESC";
    $result = mysqli_query($conn, $sql);
    $orders = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $orders[] = $row;
    }

    echo json_encode($orders);
}
