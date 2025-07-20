<?php
try {
    include 'conn.php';
    session_start();
    session_destroy();
    header('Location: ../index.html');
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
