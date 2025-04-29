<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $element = $input['element'];
    $value = $input['value'];
    if ($element == 'profile-name') {
        $stmt = mysqli_prepare($conn, "UPDATE users SET name=? WHERE mobile=?");
        mysqli_stmt_bind_param($stmt, "si", $value, $mobile);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        $_SESSION['username'] = $value;
        $_SESSION['updated'] = 'Your Profile Updated Successfully !';
        echo json_encode("Success");
    } else if ($element == 'profile-mail') {
        $stmt = mysqli_prepare($conn, "UPDATE users SET email=? WHERE mobile=?");
        mysqli_stmt_bind_param($stmt, "si", $value, $mobile);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        $_SESSION['email'] = $value;
        $_SESSION['updated'] = 'Your Profile Updated Successfully !';
        echo json_encode("Success");
    } else {
        echo json_encode("Failed");
    }
} else {
    echo json_encode("Failed");
}

?>