<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        $name = trim($_POST['name']);
        $mobile = trim($_POST['mobile']);
        session_start();
        if (isset($_POST['submit'])) {
            if (strlen($name) <= 2) {
                header("Location: ../signup.php?ename=Enter a valid name");
                exit();
            } else if (strlen($mobile) != 10) {
                header("Location: ../signup.php?emob=Enter a valid mobile number");
                exit();
            }
            try {
                $stmt = mysqli_prepare($conn, "INSERT INTO users (mobile, name) VALUES (?, ?)");
                mysqli_stmt_bind_param($stmt, "is", $mobile, $name);
                mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt);
                mysqli_close($conn);

                $_SESSION['username'] = $name;
                $_SESSION['mobile'] = $mobile;
                $_SESSION['email'] = '';
                $_SESSION['address'] = '';
                header("Location: ../verify.html");
            } catch (mysqli_sql_exception) {
                header("Location: ../signup.php?emob=Your account already exists, Login Now !");
            }
        } else if (!isset($_POST['submit'])) {
            header("Location: ../signup.php?emob=Access Denied !&ename=Access Denied !");
        }
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
