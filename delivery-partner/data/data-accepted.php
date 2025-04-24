<?php 
  include '../../data/conn.php';

  session_start();
  $mobile = $_SESSION['dmobile'];

  $sql = "SELECT order_id, res_name, res_location, total FROM orders_status WHERE status = 'accept' AND dmobile = $mobile ORDER BY sno DESC";
  $result = mysqli_query($conn, $sql);
  $details = mysqli_fetch_assoc($result);

  $orderId = $details['order_id'];

  $sql = "SELECT status FROM orders WHERE dmobile=$mobile AND order_id='$orderId'";
  $result = mysqli_query($conn, $sql);
  $status = mysqli_fetch_assoc($result);

  $sql = "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = '$details[order_id]'";
  $result = mysqli_query($conn, $sql);
  $items = [];
  while ($item = mysqli_fetch_assoc($result)) {
      $items[] = $item;
  }
  
  echo json_encode(["details"=>$details,"status"=>$status['status'], "items"=>$items]);
?>