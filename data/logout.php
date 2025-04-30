<?php
try {
    include 'conn.php';
    session_start();
    session_destroy();
    header('Location: ../index.html');
} catch (Exception $e) {
    echo "Something went wrong !";
}
