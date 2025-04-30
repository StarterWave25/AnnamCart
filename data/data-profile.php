<?php
try {
    include 'conn.php';

    session_start();
    if (isset($_SESSION['mobile'])) {
        $mobile = $_SESSION['mobile'];

        if (isset($_GET['mode']) && $_GET['mode'] == 'getter') {
            /* $sql = "SELECT room_no, area, landmark FROM users WHERE mobile = $mobile";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result); */

            $stmt = mysqli_prepare($conn, "SELECT room_no, area, landmark FROM users WHERE mobile = ?");
            mysqli_stmt_bind_param($stmt, "i", $mobile);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
            echo json_encode($row);
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents("php://input"), true);
            $roomNo = $input['roomNo'];
            $area = $input['area'];
            $landmark = $input['landmark'];

            /* $sql = "UPDATE users SET room_no = '$roomNo', area = '$area', landmark = '$landmark' WHERE mobile = $mobile";

    $result = mysqli_query($conn, $sql);
    if ($result)
        echo json_encode(["room_no" => "$roomNo", "area" => "$area", "landmark" => "$landmark"]);
    else
        echo json_encode("failure"); */


            $stmt = mysqli_prepare($conn, "UPDATE users SET room_no = ?, area = ?, landmark = ? WHERE mobile = ?");
            mysqli_stmt_bind_param($stmt, "sssi", $roomNo, $area, $landmark, $mobile);

            if (mysqli_stmt_execute($stmt)) {
                echo json_encode([
                    "room_no" => $roomNo,
                    "area" => $area,
                    "landmark" => $landmark
                ]);
            } else {
                echo json_encode("failure");
            }
            mysqli_stmt_close($stmt);
        }
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
