<?php
include 'conn.php';

if(isset($_GET['order-id']) && isset($_GET['stars'])){
  session_start();

  $_SESSION['order-id'] = $_GET['order-id'];
  $_SESSION['stars'] = $_GET['stars'];
}

elseif(isset($_POST['description'])){
  session_start();
  $description = $_POST['description'];
  echo $_SESSION['order-id'];
  $order_id =  $_SESSION['order-id'];
  $stars = $_SESSION['stars'];

  $sql = "INSERT INTO reviews (order_id, stars, description) VALUES ('$order_id', '$stars', '$description')";
  $result = mysqli_query($conn, $sql);

  header("Location: ../orderedDetails.php?order-id=$order_id");
}

elseif(isset($_GET['order-id'])){
  $order_id = $_GET['order-id'];
  $sql = "SELECT COUNT(*) FROM reviews WHERE order_id = '$order_id'";
  $result = mysqli_query($conn, $sql);
  $count = mysqli_fetch_array($result);

  $sql = "SELECT status FROM orders WHERE order_id = '$order_id'";
  $result = mysqli_query($conn, $sql);
  $status = mysqli_fetch_array($result);

  $response = [
    "count" => $count[0],
    "status" => $status[0]
  ];

  echo json_encode($response);
}
?>