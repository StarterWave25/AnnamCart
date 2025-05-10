<?php
  include '../../data/conn.php';

  session_start();
  if(isset($_SESSION['rid'])){
    $resId = $_SESSION['rid'];
  }

  $sql = "SELECT * FROM orders WHERE status = 'delivered' AND res_status = 'delivered' AND res_id = $resId";

  $result = mysqli_query($conn, $sql);
  $orders = [];
  while($row = mysqli_fetch_assoc($result))
    $orders[] = $row;

  echo json_encode($orders);
?>