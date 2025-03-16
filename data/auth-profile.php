<?php
include 'conn.php';
session_start();
$mobile = $_SESSION['mobile'];

if($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $element = $input['element'];
    $value = $input['value'];
    if($element=='profile-name'){
        $sql = "UPDATE users SET name='$value' WHERE mobile='$mobile'";
        $result = mysqli_query($conn,$sql);
        $_SESSION['username']=$value;
        $_SESSION['updated']='Your Profile Updated Successfully !';
        echo json_encode("Success");
    }
    else if($element=='profile-mail'){
        $sql = "UPDATE users SET email='$value' WHERE mobile='$mobile'";
        $result = mysqli_query($conn,$sql);
        $_SESSION['email']=$value;
        $_SESSION['updated']='Your Profile Updated Successfully !';
        echo json_encode("Success");
    }
    else if($element=='profile-address'){
        $sql = "UPDATE users SET address='$value' WHERE mobile='$mobile'";
        $result = mysqli_query($conn,$sql);
        $_SESSION['address']=$value;
        $_SESSION['updated']='Your Profile Updated Successfully !';
        echo json_encode("Success");
    }
    else{
        echo json_encode("Failed");
    }
}


else{
    echo json_encode("Failed");
}

?>