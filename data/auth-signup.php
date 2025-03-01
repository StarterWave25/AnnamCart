<?php
include 'conn.php';
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
        $sql = "INSERT INTO users (mobile, name, email,address) VALUES ($mobile,'$name','','')";
        mysqli_query($conn, $sql);
        $_SESSION['username'] = $name;
        $_SESSION['mobile']=$mobile;
        $_SESSION['email']='';
        $_SESSION['address']='';
        header("Location: ../verify.html");
    } catch (mysqli_sql_exception $e) {
        header("Location: ../signup.php?emob=Your account already exists, Login Now !" . $e);
    }
} else if (!isset($_POST['submit'])) {
    header("Location: ../signup.php?emob=Access Denied !&ename=Access Denied !");
}
