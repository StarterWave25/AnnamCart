<?php
try {
    include 'conn.php';
    session_start();
    if (isset($_SESSION['mobile']) && isset($_GET['itemId'])) {

        $mobile = $_SESSION['mobile'];
        $ItemId = $_GET['itemId'];

        /* $sql = "SELECT quantity from cart where item_id = $ItemId AND mobile = $mobile";
        $result = mysqli_query($conn, $sql);
        $quantity = mysqli_fetch_assoc($result); */

        $stmt = mysqli_prepare($conn, "SELECT quantity FROM cart WHERE item_id = ? AND mobile = ?");
        mysqli_stmt_bind_param($stmt, "ii", $ItemId, $mobile);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $quantity = mysqli_fetch_assoc($result);

        echo json_encode($quantity);
        exit();
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
