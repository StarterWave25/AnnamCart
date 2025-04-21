<?php
include 'conn.php';
if (isset($_GET['order-id'])) {
    $orderId = $_GET['order-id'];
    session_start();
    $name = $_SESSION['username'];
    $mobile = $_SESSION['mobile'];
    $sql = "SELECT * FROM delivery_agent WHERE status = 'active' ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($conn, $sql);
    $deliveryAgent = mysqli_fetch_assoc($result);

    if ($result) {
        $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE order_id = '$orderId'";
        $result = mysqli_query($conn, $sql);
        $orderDetails = mysqli_fetch_assoc($result);

        $sql = "INSERT INTO orders_status(order_id, dmobile, res_name, res_location, username, mobile, location, total, status) VALUES 
    ('$orderId', {$deliveryAgent['dmobile']}, '{$orderDetails['res_name']}', '{$orderDetails['res_location']}', '$name', $mobile, '{$orderDetails['location']}', {$orderDetails['total']}, 'pending')";

        mysqli_query($conn, $sql);

        echo json_encode($deliveryAgent['dmobile']);
    } else {
        echo json_encode("missed");
    }
} else {
    $sql = "SELECT COUNT(*) FROM delivery_agent WHERE status = 'active'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row['COUNT(*)']);
}
