<?php
try {
    include '../../data/conn.php';
    if (isset($conn)) {
        session_start();
        $rid = $_SESSION['rid'];

        if (isset($_GET['check'])) {
            $sql = "SELECT status FROM restaurants WHERE res_id = $rid";
            $result = mysqli_query($conn, $sql);
            $status = mysqli_fetch_assoc($result);
            echo json_encode(["status" => $status['status']]);
        }
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $status = json_decode(file_get_contents('php://input'), true);
            $rid = $_GET['rid'];
            $sql = "UPDATE restaurants SET status = '$status' WHERE res_id = $rid";
            $result = mysqli_query($conn, $sql);
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
