<?php
try {
    include '../../data/conn.php';
    session_start();
    if (isset($conn) && isset($_SESSION['rid'])) {
        $rid = $_SESSION['rid'];
        if ($_GET['item-id']) {
            $itemId = $_GET['item-id'];
            $sql = "SELECT status FROM items WHERE item_id = $itemId";
            $result = mysqli_query($conn, $sql);
            $data = mysqli_fetch_assoc($result);

            if ($data['status'] == 'Available') {
                $sql = "UPDATE items SET status='Unavailable' WHERE item_id = $itemId";
                $newStatus = 'Unvailable';
            } else {
                $sql = "UPDATE items SET status='Available' WHERE item_id = $itemId";
                $newStatus = 'Available';
            }
            mysqli_query($conn, $sql);
            echo json_encode(["newStatus" => $newStatus]);
        }
    }
} catch (Exception) {
    echo 'Something went wrong !';
}
