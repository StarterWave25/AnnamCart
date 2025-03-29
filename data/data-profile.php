<?php
include 'conn.php';

session_start();
$mobile = $_SESSION['mobile'];

if(isset($_GET['mode']) && $_GET['mode'] == 'getter'){
    $sql = "SELECT room_no, area, landmark FROM users WHERE mobile = $mobile";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $roomNo = $input['roomNo'];
    $area = $input['area'];
    $landmark = $input['landmark'];

    $sql = "UPDATE users SET room_no = '$roomNo', area = '$area', landmark = '$landmark' WHERE mobile = $mobile";

    $result = mysqli_query($conn, $sql);
    if ($result)
        echo json_encode(["room_no" => "$roomNo", "area" => "$area", "landmark" => "$landmark"]);
    else
        echo json_encode("failure");
}
