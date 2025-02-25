<?php
include 'conn.php';
$name = trim($_POST['name']);
$mobile = trim($_POST['mobile']);

if (isset($_POST['submit'])) {
    if(strlen($name)<=2){
        header("Location: ../signup.php?ename=Enter a valid name");
    }
    else if(strlen($mobile)!=10){
        header("Location: ../signup.php?emob=Enter a valid mobile number");
    }
    try {
        $sql = "INSERT INTO users (mobile, name) VALUES ($mobile,'$name')";
        mysqli_query($conn, $sql);
        header("Location: ../verify.html");
    } catch (mysqli_sql_exception $e) {
        header("Location: ../signup.php?emob=Your account already exists, Login Now !".$e);
    }
} 
else if (!isset($_POST['submit'])) {
    header("Location: ../signup.php?emob=Access Denied !&ename=Access Denied !");
}
