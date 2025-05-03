<?php
  include '../../data/conn.php';

  session_start();
  $mobile = $_SESSION['dmobile'];
  date_default_timezone_set('Asia/Kolkata');
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE orders SET delivered_time = '$date'
          WHERE dmobile = '$mobile' AND status = 'arrived'";
  mysqli_query($conn, $sql); 
?>