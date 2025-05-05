<?php
  include '../../data/conn.php';

  session_start();
  if(isset($_GET['order-id'])){
    $orderId = $_GET['order-id'];
    $sql = "SELECT order_items.*, items.* FROM order_items JOIN items ON order_items.item_id = items.item_id WHERE order_id = '$orderId'";
    $result = mysqli_query($conn, $sql);
    $items = [];
    while($row = mysqli_fetch_assoc($result)){
      $items[] = $row;
    }

    echo json_encode($items);
  }
  else {
    if (isset($_SESSION['rname']) && isset($_SESSION['rid'])) {
      $restaurantId = $_SESSION['rid'];
      $sql = "SELECT * FROM orders WHERE res_id = $restaurantId AND status = 'accept'";
      $result = mysqli_query($conn, $sql);
      $orders = [];
      while($row = mysqli_fetch_assoc($result)){
        $orders[] = $row;
      }
  
      echo json_encode($orders);
    } else {
      echo json_encode(["error" => "Unauthorized access"]);
    }
  }

?>