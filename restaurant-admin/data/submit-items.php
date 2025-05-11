<?php
include '../../data/conn.php';

if (isset($_POST['submit'])) {
  $item = $_POST['item-name'];
  $dprice = $_POST['orginal-price'];
  $price = $_POST['discount-price'];

  if ($item == '' || $dprice == '' || $price == '') {
    header("Location: ../add-food-item.php");
    exit;
  } else {
    session_start();
    if (isset($_SESSION['rid'])) {
      $resId = $_SESSION['rid'];
    } else {
      header("Location: ../add-food-item.php");
      exit;
    }
    $sql = "INSERT INTO items(item_name, res_id, price, dprice) VALUES ('$item', $resId, $price, $dprice)";
    $res = mysqli_query($conn, $sql);
    header("Location: ../add-food-item.php?message=succed");
  }
} else {
  header("Location: ../add-food-item.php");
  exit;
}
?>