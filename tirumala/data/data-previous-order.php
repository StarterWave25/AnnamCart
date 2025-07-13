<?php
  include 'conn.php';
  if(isset($_GET  ['order-id'])){
    $order_id = $_GET['order-id'];
  }

  $sql = "SELECT item_id, quantity FROM order_items WHERE order_id = '$order_id'";
  $result = mysqli_query($conn, $sql);
  $items = [];
  while($row = mysqli_fetch_assoc($result)){
    $items[] = $row;
  }

  $forResId =  $items[0]['item_id'];
  $sql = "SELECT res_id FROM items WHERE item_id = '$forResId'";
  $result = mysqli_query($conn, $sql);
  $resId = mysqli_fetch_assoc($result);

  $response = [
    "items" => $items,
    "restaurantId" => $resId
  ];

  echo json_encode($response);
?>