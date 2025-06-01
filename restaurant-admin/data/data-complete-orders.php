<?php
  include '../../data/conn.php';

  session_start();
  if(isset($_SESSION['rid'])){
    $resId = $_SESSION['rid'];
  }

  $today = date('Y-m-d');
  $sql = "SELECT * FROM orders WHERE status = 'delivered' AND res_status = 'delivered' AND res_id = $resId AND DATE(Time) = $today";

  $result = mysqli_query($conn, $sql);
  $orders = [];
  while($row = mysqli_fetch_assoc($result))
    $orders[] = $row;

  echo json_encode($orders);
?>