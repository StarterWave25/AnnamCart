<?php
try {
    include '../../data/conn.php';
    if (isset($conn)) {
        session_start();
        if (isset($_SESSION['dmobile'])) {
            $mobile = $_SESSION['dmobile'];

            if (isset($_GET['status'])) {
                if ($_GET['status'] == 'arrived') {
                    $sql = "UPDATE orders SET status='arrived' WHERE status='picked' AND dmobile=$mobile";
                    mysqli_query($conn, $sql);
                    echo json_encode('arrived');
                } else if ($_GET['status'] == 'delivered') {
                    $sql = "UPDATE orders SET status='delivered',res_status='delivered' WHERE status='arrived' AND dmobile=$mobile";
                    mysqli_query($conn, $sql);
                    $sql = "UPDATE delivery_agent SET status='active' WHERE status='assigned' AND dmobile=$mobile";
                    mysqli_query($conn, $sql);
                    echo json_encode('delivered');

                    $sql = "UPDATE orders_status SET status='delivered' WHERE status='accept' AND dmobile=$mobile";
                    mysqli_query($conn, $sql);
                }
            }
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
