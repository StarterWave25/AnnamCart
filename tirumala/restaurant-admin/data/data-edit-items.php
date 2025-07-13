<?php
try {
    include '../../data/conn.php';
    session_start();
    if (isset($conn) && isset($_SESSION['rid'])) {
        $rid = $_SESSION['rid'];

        if (isset($_GET['item-id'])) {
            $itemId = $_GET['item-id'];
            $sql = "SELECT * FROM items WHERE item_id = $itemId";
            $result = mysqli_query($conn, $sql);
            $data = mysqli_fetch_assoc($result);
            echo json_encode($data);
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            $itemId = $input['itemId'];
            $name = $input['itemName'];
            $price = $input['price'];
            $dprice = $input['dprice'];

            $stmt = mysqli_prepare($conn, "UPDATE items SET item_name = ?, price = ?, dprice = ? WHERE item_id = ?");
            mysqli_stmt_bind_param($stmt, "siii", $name, $price, $dprice, $itemId);
            mysqli_stmt_execute($stmt);

            echo json_encode("Success");
        }
    }
} catch (Exception $e) {
    echo json_encode('SOmething went wrong !');
}
