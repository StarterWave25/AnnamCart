<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        session_start();
        if (isset($_SESSION['mobile'])) {
            $mobile = $_SESSION['mobile'];


            if (isset($_GET['order-id'])) {
                $orderId = $_GET['order-id'];

                /* $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE order_id = '$orderId'";
    $result = mysqli_query($conn, $sql);
    $restaurant = mysqli_fetch_assoc($result); */
                $stmt = mysqli_prepare($conn, "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE order_id = ?");
                mysqli_stmt_bind_param($stmt, "s", $orderId);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $restaurant = mysqli_fetch_assoc($result);

                /* $sql = "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = '$orderId'";
    $result = mysqli_query($conn, $sql);
    $orderedItems = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $orderedItems[] = $row;
    } */
                $stmt = mysqli_prepare($conn, "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = ?");
                mysqli_stmt_bind_param($stmt, "s", $orderId);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $orderedItems = [];
                while ($row = mysqli_fetch_assoc($result)) {
                    $orderedItems[] = $row;
                }


                /* $sql = "SELECT area FROM users where mobile = $mobile";
    $result = mysqli_query($conn, $sql);
    $address = mysqli_fetch_assoc($result); */
                $stmt = mysqli_prepare($conn, "SELECT area FROM users WHERE mobile = ?");
                mysqli_stmt_bind_param($stmt, "i", $mobile);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $address = mysqli_fetch_assoc($result);

                mysqli_stmt_close($stmt);
                mysqli_close($conn);

                echo json_encode(['orderedItems' => $orderedItems, 'restaurant' => $restaurant, 'address' => $address]);
            } else {
                /* $sql = "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE mobile = $mobile ORDER BY time DESC";
    $result = mysqli_query($conn, $sql);
    $orders = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $orders[] = $row;
    } */

                $stmt = mysqli_prepare($conn, "SELECT orders.*, restaurants.* FROM orders JOIN restaurants ON orders.res_id = restaurants.res_id WHERE mobile = ? ORDER BY Time DESC");
                mysqli_stmt_bind_param($stmt, "i", $mobile);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $orders = [];
                while ($row = mysqli_fetch_assoc($result)) {
                    $orders[] = $row;
                }

                echo json_encode($orders);
            }
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
