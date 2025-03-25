<?php
  include 'conn.php';
  session_start();
  $mobile = $_SESSION['mobile'];
  $ItemId = $_GET['itemId'];

  $sql = "SELECT quantity from cart where item_id = $ItemId AND mobile = $mobile";

  $result = mysqli_query($conn, $sql);
  
  $quantity = mysqli_fetch_assoc($result);
  
  echo json_encode($quantity);

  exit();