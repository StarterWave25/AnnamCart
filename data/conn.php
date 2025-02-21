<?php
    $conn = mysqli_connect("localhost", "root", "", "food_delivery");
    if (!$conn) {
        echo "Unexpected Error Occured ! ";
        exit(0);
    }
?>