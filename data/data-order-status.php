<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        session_start();
        if (isset($_SESSION['username']) && isset($_SESSION['mobile'])) {
            $name = $_SESSION['username'];
            $mobile = $_SESSION['mobile'];

            if (isset($_GET['order-id'])) {
                $orderId = $_GET['order-id'];

                $sql = "SELECT * FROM delivery_agent WHERE status = 'active' ORDER BY RAND() LIMIT 1";
                $result = mysqli_query($conn, $sql);
                $deliveryAgent = mysqli_fetch_assoc($result);
                if (isset($deliveryAgent)) {
                    $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE order_id = '$orderId'";
                    $result = mysqli_query($conn, $sql);
                    $orderDetails = mysqli_fetch_assoc($result);

                    $sql = "INSERT INTO orders_status(order_id, dmobile, res_id, res_name, res_location, username, mobile, location, total, status) VALUES 
                    ('$orderId', {$deliveryAgent['dmobile']}, '{$orderDetails['res_id']}', '{$orderDetails['res_name']}', '{$orderDetails['res_location']}', '$name', $mobile, '{$orderDetails['location']}', {$orderDetails['total']}, 'pending')";

                    mysqli_query($conn, $sql);

                    echo json_encode($deliveryAgent['dmobile']);
                } else {
                    echo json_encode("missed");
                }
            } else if (isset($_GET['status-id'])) {
                $orderId = $_GET['status-id'];

                /* $sql = "SELECT status FROM orders WHERE order_id = '$orderId'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result); */

                $stmt = mysqli_prepare($conn, "SELECT status FROM orders WHERE order_id = ?");
                mysqli_stmt_bind_param($stmt, "s", $orderId);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $row = mysqli_fetch_assoc($result);

                echo json_encode($row);
            } else {
                $sql = "SELECT COUNT(*) FROM delivery_agent WHERE status = 'active'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                echo json_encode($row['COUNT(*)']);
            }
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
