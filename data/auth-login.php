<?php
try {
    include 'conn.php';
    $mobile = trim($_POST['mobile']);
    session_start();
    if (isset($_POST['submit'])) {
        if (!preg_match("/^\d{10}$/", $mobile)) {
            header("Location: ../login.php?emob=Enter a valid mobile number");
            exit();
        }
        try {
            $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE mobile = ?");
            mysqli_stmt_bind_param($stmt, "i", $mobile);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
            if ($row) {
                $_SESSION['username'] = $row['name'];
                $_SESSION['mobile'] = $row['mobile'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['address'] = $row['address'];
                header("Location: ../verify.html");
            } else {
                header("Location: ../login.php?emob=Your account does'nt exists, Signup Now !");
            }
        } catch (mysqli_sql_exception) {
            header("Location: ../login.php?emob=Your account doesn't exists, Signup Now !");
        }
    } else if (!isset($_POST['submit'])) {
        header("Location: ../login.php?emob=Access Denied !&ename=Access Denied !");
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
