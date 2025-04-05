<?php
    include '../../data/conn.php';
    session_start();
    $mobile = $_SESSION['dmobile'];
    $sql = "SELECT * FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);
    
?>