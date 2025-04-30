<?php
try {
    include '../../data/conn.php';
    session_start();
    if (isset($_GET['dmobile'])) {
        $mobile = $_GET['dmobile'];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            $status = $input;
            $sql = "UPDATE delivery_agent SET status='$status' WHERE dmobile=$mobile";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo json_encode('Success');
            } else {
                echo json_encode('Failure');
            }
        } else {
            $sql = "SELECT status FROM delivery_agent WHERE dmobile=$mobile";
            $result = mysqli_query($conn, $sql);
            $status = mysqli_fetch_assoc($result);
            if ($status) {
                echo json_encode($status);
            } else {
                echo json_encode('Failure');
            }
        }
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
