<?php
try {
    include '../../data/conn.php';
    if ($conn) {
        session_start();
        if (isset($_SESSION['rid'])) {
            $sql = "SELECT * FROM orders WHERE res_id = {$_SESSION['rid']} AND res_status = 'accept' AND status = 'accept'";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                $orders = [];
                $items = [];
                while ($row = mysqli_fetch_assoc($result)) {
                    $orders[] = $row;
                    $orderId = $row['order_id'];
                    $sql = "SELECT order_items.*,items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_items.order_id='$orderId'";
                    $result1 = mysqli_query($conn, $sql);
                    while ($item = mysqli_fetch_assoc($result1)) {
                        $items[] = $item;
                    }
                }
                echo json_encode(["orders" => $orders, "items" => $items]);
            } else {
                echo json_encode(["error" => "No orders found !"]);
            }
        } else {
            echo 'Something went wrong !';
        }
    } else {
        echo 'Something went wrong !';
    }
} catch (Exception $e) {
    echo 'Something went wrong !';
}
