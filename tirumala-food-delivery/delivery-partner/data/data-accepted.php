<?php
try {
  include '../../data/conn.php';

  session_start();
  if (isset($_SESSION['dmobile'])) {
    $mobile = $_SESSION['dmobile'];
    if (isset($_GET['status'])) {
      $sql = "UPDATE delivery_agent SET status='waiting' WHERE dmobile = $mobile";
      mysqli_query($conn, $sql);
      echo json_encode(["status" => "waiting"]);
    } else if (isset($_GET['ready'])) {
      $sql = "SELECT * FROM orders WHERE dmobile = $mobile AND status='accept' AND NOT res_status = 'reject'";
      $result = mysqli_query($conn, $sql);
      $status = mysqli_fetch_assoc($result);
      echo json_encode(["status" => $status['res_status']]);
    } else {
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

      echo json_encode(["details" => $details, "status" => $status['status'], "items" => $items]);
    }
  }
} catch (Exception $e) {
  echo json_encode("Something went wrong !");
}
