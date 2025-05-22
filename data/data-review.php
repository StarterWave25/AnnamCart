<?php
include 'conn.php';

if(isset($_GET['order-id'])){
  $order_id = $_GET['order-id'];
  $sql = "SELECT COUNT(*) FROM reviews WHERE order_id = '$order_id'";
  $result = mysqli_query($conn, $sql);
  $count = mysqli_fetch_array($result);

  echo json_encode($count[0]);
}
?>