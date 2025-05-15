<?php
try {
    include '../../data/conn.php';
    $mobile = trim($_POST['mobile']);
    $password = trim($_POST['password']);
    session_start();

    if (!isset($_SESSION['dname']) && !isset($_SESSION['dmobile'])) {
        if (isset($_POST['submit'])) {
            if (!preg_match("/^\d{10}$/", $mobile)) {
                header("Location: ../login.php?emob=Enter a valid mobile number");
                exit();
            }
            try {
                // $sql = "SELECT * FROM delivery_agent WHERE dmobile=$mobile AND dpassword='$password'";
                // $result = mysqli_query($conn, $sql);
                $stmt = mysqli_prepare($conn, "SELECT * FROM delivery_agent WHERE dmobile=? AND dpassword=?");
                mysqli_stmt_bind_param($stmt, "is", $mobile, $password);
                mysqli_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $row = mysqli_fetch_assoc($result);
                if ($row) {
                    $_SESSION['dname'] = $row['dname'];
                    $_SESSION['dmobile'] = $row['dmobile'];
                    header("Location: ../home.php");
                } else {
                    header("Location: ../index.php?emob=Your account doesn't exists !");
                }
            } catch (mysqli_sql_exception $e) {
                header("Location: ../index.php?emob=Your account doesn't exists !");
            }
        } else if (!isset($_POST['submit'])) {
            header("Location: ../index.php?emob=Access Denied !&ename=Access Denied !");
        }
    } else {
        header("Location: ../home.php");
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
