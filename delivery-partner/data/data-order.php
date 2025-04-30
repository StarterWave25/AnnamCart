<?php
try {
    include '../../data/conn.php';
    session_start();
    if (isset($_SESSION['dmobile']) && $_SESSION['dname']) {
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
                mysqli_query($conn, $sql);

                echo json_encode(["status" => "reject", "mobile" => "$user_mobile[mobile]"]);
            } else if ($ordStatus == 'accept') {
                $sql = "SELECT mobile,order_id FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
                $result = mysqli_query($conn, $sql);
                $details = mysqli_fetch_assoc($result);

                $sql = "UPDATE orders_status SET status = 'accept' WHERE dmobile = $mobile AND status = 'pending'";
                mysqli_query($conn, $sql);

                $sql = "UPDATE orders SET dname = '$dname', dmobile = $mobile, status = 'accept' WHERE order_id = '{$details['order_id']}'";
                mysqli_query($conn, $sql);

                $sql = "UPDATE delivery_agent SET status='assigned' WHERE dmobile = $mobile";
                mysqli_query($conn, $sql);

                echo json_encode(["status" => "accept", "mobile" => "{$details['mobile']}"]);
            } else if ($ordStatus == 'prepare') {
                $sql = "SELECT mobile,order_id FROM orders_status WHERE dmobile = $mobile AND status = 'accept'";
                $result = mysqli_query($conn, $sql);
                $details = mysqli_fetch_assoc($result);
                echo json_encode($details);
            } else if ($ordStatus == 'picked') {
                $sql = "SELECT mobile FROM orders WHERE dmobile = $mobile AND status = 'picked'";
                $result = mysqli_query($conn, $sql);
                $details = mysqli_fetch_assoc($result);
                echo json_encode($details);
            } else if ($ordStatus == 'delivered') {
                $sql = "SELECT mobile, order_id FROM orders WHERE dmobile = $mobile AND status = 'delivered'";
                $result = mysqli_query($conn, $sql);
                $details = mysqli_fetch_assoc($result);
                echo json_encode($details);
            }
        } else {
            $sql = "SELECT * FROM orders_status WHERE dmobile = $mobile AND status = 'pending'";
            $result = mysqli_query($conn, $sql);
            $row = mysqli_fetch_assoc($result);

            $sql = "UPDATE delivery_agent SET status='requested' WHERE dmobile=$mobile";
            mysqli_query($conn, $sql);

            echo json_encode($row);
        }
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
