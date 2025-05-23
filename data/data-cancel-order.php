<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        session_start();
        if (isset($_SESSION['mobile'])) {
            $mobile = $_SESSION['mobile'];

            if (isset($_GET['order-id'])) {
                $orderId = $_GET['order-id'];
                $sql = "UPDATE orders SET status='cancelled',res_status='cancelled' WHERE order_id='$orderId'";
                mysqli_query($conn, $sql);
                echo json_encode('Cancelled');
            }
        }
    }
} catch (Exception $e) {
    echo json_encode('Something went wrong !');
}
