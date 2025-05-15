<?php
try {
    $conn = mysqli_connect("localhost", "root", "", "food_delivery");
    if (!$conn) {
        echo "Unexpected Error Occured ! ";
        exit(0);
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
