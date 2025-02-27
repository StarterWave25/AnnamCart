<?php
include 'conn.php';
$mobile = trim($_POST['mobile']);
session_start();
if (isset($_POST['submit'])) {
    if(strlen($mobile)!=10){
        header("Location: ../login.php?emob=Enter a valid mobile number");
    }
    try {
        $sql = "SELECT * FROM users WHERE mobile=$mobile";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if($row){
            $_SESSION['username']=$row['name'];
            header("Location: ../verify.html");
        }
        else{
            header("Location: ../login.php?emob=Your account does'nt exists, Signup Now !");
        }
    } catch (mysqli_sql_exception $e) {
        header("Location: ../login.php?emob=Your account does'nt exists, Signup Now !".$e);
    }
} 

else if (!isset($_POST['submit'])) {
    header("Location: ../login.php?emob=Access Denied !&ename=Access Denied !");
}