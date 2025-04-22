<?php 
  include '../../data/conn.php';

  session_start();
  $mobile = $_SESSION['dmobile'];

  $sql = "SELECT order_id, res_name, res_location, total FROM orders_status WHERE status = 'accept' AND dmobile = $mobile";
  $result = mysqli_query($conn, $sql);
  $details = mysqli_fetch_assoc($result);

  $sql = "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = '$details[order_id]'";
  $result = mysqli_query($conn, $sql);
  $items = [];
  while ($item = mysqli_fetch_assoc($result)) {
      $items[] = $item;
  }
  
  echo json_encode(["details"=>$details, "items"=>$items]);
?>