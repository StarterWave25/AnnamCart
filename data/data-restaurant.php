<?php
  include 'conn.php';
  $restaurantId = $_GET['restaurant-id'];
  $sql = "SELECT restaurants.*, most_ordered_items.item_name FROM restaurants JOIN most_ordered_items ON restaurants.res_id = $restaurantId ";
  
  $result = mysqli_query($conn, $sql);
  $head = mysqli_fetch_assoc($result);

  $sql = " SELECT * FROM items WHERE $restaurantId = res_id ";

  $result = mysqli_query($conn, $sql);
  $body = [];
  while($row = mysqli_fetch_assoc($result)){
    $body[] = $row;
  }


  $sql = "SELECT * FROM cart";
  $result = mysqli_query($conn,$sql);
  $cart = [];
  while($row = mysqli_fetch_assoc($result)){
    $cart[] = $row;
  }

  $response = [
    "resHead" => $head,
    "resBody" => $body,
    "cart" => $cart
  ];
  
  echo json_encode($response);

exit();