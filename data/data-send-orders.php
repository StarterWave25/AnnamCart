<?php
try {
    include 'conn.php';
    session_start();
    if (isset($_SESSION['mobile']) && isset($_SESSION['username'])) {
        $mobile = $_SESSION['mobile'];
        $name = $_SESSION['username'];

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents("php://input"), true);

            $orderId = $input['orderId'];
            $cart = $input['cart'];
            $total = $input['total'];
            $dummyTotal = $input['dummyTotal'];
            $items = $input['items'];
            $resId = $input['resId'];
            $location = $input['mapsLink'];

            $stmt = mysqli_prepare($conn, "INSERT INTO orders (order_id, mobile, username, res_id, items, total, dtotal, location, status) 
            VALUES (?,?,?,?,?,?,?,?,?)");
            mysqli_stmt_bind_param($stmt, "sisiiiiss", $orderId, $mobile, $name, $resId, $items, $total, $dummyTotal, $location, 'pending');
            mysqli_stmt_execute($stmt);

            // $sql = "INSERT INTO orders (order_id, mobile, username, res_id, items, total, dtotal, location, status)
            //         VALUES ('$orderId',$mobile,'$name',$resId,$items,$total,$dummyTotal,'$location','pending')";
            // mysqli_query($conn, $sql);

            $stmt = mysqli_prepare($conn, "SELECT item_id,price,dprice FROM items WHERE res_id = ?");
            mysqli_stmt_bind_param($stmt, "i", $resId);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);

            foreach ($cart as $cartItem) {
                mysqli_data_seek($result, 0);
                while ($row = mysqli_fetch_assoc($result)) {
                    if ($row['item_id'] == $cartItem['itemId']) {
                        $stmt = mysqli_prepare($conn, "INSERT INTO order_items (order_id, item_id, quantity,price,dprice) 
                    VALUES ('$orderId',{$cartItem['itemId']},{$cartItem['quantity']},{$row['price']},{$row['dprice']})");
                        mysqli_stmt_bind_param($stmt, "siiii", $orderId, $cartItem['itemId'], $cartItem['quantity'], $row['price'], $row['dprice']);
                        // $query = "INSERT INTO order_items (order_id, item_id, quantity,price,dprice) 
                        //     VALUES ('$orderId',{$cartItem['itemId']},{$cartItem['quantity']},{$row['price']},{$row['dprice']})";
                        break;
                    }
                }
                mysqli_stmt_execute($stmt);
                //mysqli_query($conn, $query);
            }
            echo json_encode('Success');
        } else {
            echo json_encode('Failure');
        }
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
