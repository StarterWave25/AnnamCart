<?php
try {
    include '../../data/conn.php';
    if (isset($conn)) {
        session_start();
        $rid = $_SESSION['rid'];

        $orderId = $_GET['order-id'];
        $status = $_GET['status'];

        if (isset($status)) {
            $sql = "UPDATE orders SET res_status='$status' WHERE order_id='$orderId'";
            mysqli_query($conn, $sql);

            $sql = "SELECT mobile,dmobile FROM orders WHERE order_id = '$orderId'";
            $result = mysqli_query($conn, $sql);
            $row = mysqli_fetch_assoc($result);

            echo json_encode(["status" => $status, "agentMobile" => $row['dmobile'], "userMobile" => $row['mobile']]);
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
