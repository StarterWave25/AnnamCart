<?php
try {
    include '../../data/conn.php';
    $mobile = trim($_POST['mobile']);
    $password = trim($_POST['password']);
    session_start();

    if (!isset($_SESSION['dname']) && !isset($_SESSION['dmobile'])) {
        if (isset($_POST['submit'])) {
            if (!preg_match("/^\d{4}$/", $mobile)) {
                header("Location: ../login.php?emob=Enter a valid restaurant id");
                exit();
            }
            try {
                // $sql = "SELECT * FROM delivery_agent WHERE dmobile=$mobile AND dpassword='$password'";
                // $result = mysqli_query($conn, $sql);
                $stmt = mysqli_prepare($conn, "SELECT * FROM restaurants WHERE res_id=? AND password=?");
                mysqli_stmt_bind_param($stmt, "is", $mobile, $password);
                mysqli_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $row = mysqli_fetch_assoc($result);
                if ($row) {
                    $_SESSION['rname'] = $row['res_name'];
                    $_SESSION['rid'] = $row['res_id'];
                    header("Location: ../index.html");
                } else {
                    header("Location: ../login.php?ename=Your account doesn't exists !");
                }
            } catch (mysqli_sql_exception $e) {
                header("Location: ../login.php?ename=Your account doesn't exists !");
            }
        } else if (!isset($_POST['submit'])) {
            header("Location: ../login.php?emob=Access Denied !&ename=Access Denied !");
        }
    } else {
        header("Location: ../index.html");
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
