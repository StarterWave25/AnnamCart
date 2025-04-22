<?php
include '../../data/conn.php';
session_start();

$mobile = $_SESSION['dmobile'];
$dname = $_SESSION['dname'];

$ordStatus = '';
if (isset($_GET['confirm'])) {
    $ordStatus = $_GET['confirm'];
    if ($ordStatus == 'reject') {


        $sql = "SELECT mobile FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
        $result = mysqli_query($conn, $sql);
        $user_mobile = mysqli_fetch_assoc($result);

        $sql = "UPDATE orders_status SET status = 'reject' WHERE dmobile = $mobile AND status = 'pending'";
        $result = mysqli_query($conn, $sql);

        $sql = "UPDATE delivery_agent SET status='active' WHERE dmobile = $mobile";
        mysqli_query($conn,$sql);
        
        echo json_encode(["status"=>"reject", "mobile"=>"$user_mobile[mobile]"]);
    } else if ($ordStatus == 'accept') {
        $sql = "SELECT mobile FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
        $result = mysqli_query($conn, $sql);
        $user_mobile = mysqli_fetch_assoc($result);

        $sql = "UPDATE orders_status SET status = 'accept' WHERE dmobile = $mobile AND status = 'pending'";
        $result = mysqli_query($conn, $sql);

        $sql = "SELECT order_id FROM orders_status WHERE dmobile = $mobile AND status = 'accept'";
        $result = mysqli_query($conn, $sql);
        $orderId = mysqli_fetch_assoc($result);

        $sql = "UPDATE orders SET dname = '$dname', dmobile = $mobile, status = 'accept' WHERE order_id = '$orderId[order_id]'";
        $result = mysqli_query($conn, $sql);

        $sql = "UPDATE delivery_agent SET status='assigned' WHERE dmobile = $mobile";
        mysqli_query($conn,$sql);

        echo json_encode(["status"=>"accept", "mobile"=>"$user_mobile[mobile]"]);
    }
} else {
    $sql = "SELECT * FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
}
