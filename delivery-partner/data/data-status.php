<?php
include '../../data/conn.php';

session_start();
$mobile = $_SESSION['dmobile'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $status = $input;
    $sql = "UPDATE delivery_agent SET status='$status' WHERE dmobile=$mobile";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo json_encode('Success');
    }
    else{
        echo json_encode('Failure');
    }
}
