<?php
include '../../data/conn.php';
session_start();

$mobile = $_SESSION['dmobile'];
$dname = $_SESSION['dname'];

if (isset($_GET['status'])) {
    $sql = "UPDATE orders SET status='picked' WHERE status='accept' AND dmobile=$mobile";
    mysqli_query($conn, $sql);
    echo json_encode('picked');
}

else if(isset($_GET['details'])){
    $sql = "SELECT total, order_id FROM orders WHERE dmobile=$mobile AND status='arrived'";
    $result = mysqli_query($conn, $sql);
    $details = mysqli_fetch_assoc($result);
    echo json_encode($details);
}

else{
    $sql = "SELECT * FROM orders WHERE dmobile = $mobile AND status='picked'";
    $result = mysqli_query($conn,$sql);
    $orderData = mysqli_fetch_assoc($result);
    echo json_encode($orderData);
}
