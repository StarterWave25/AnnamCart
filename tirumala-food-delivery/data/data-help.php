<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        session_start();
        if (isset($_SESSION['mobile'])) {
            $mobile = $_SESSION['mobile'];

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $input = json_decode(file_get_contents("php://input"), true);

                $token = $input['tokenId'];
                $orderId = $input['orderId'];
                $modalId = $input['modalId'];
                $desc = $input['desc'];

                $stmt = mysqli_prepare($conn, "INSERT INTO orders_help (token, order_id, issue, description) VALUES (?,?,?,?)");
                mysqli_stmt_bind_param($stmt, "ssss", $token, $orderId, $modalId, $desc);
                mysqli_stmt_execute($stmt);

                echo json_encode('Success');
                
                mysqli_stmt_close($stmt);
                mysqli_close($conn);
            }
        }
    }
} catch (Exception $e) {
    echo 'Something went wrong !';
}
