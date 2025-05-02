<?php
  include '../../data/conn.php';
  session_start();
  $dmobile = $_SESSION['dmobile'];
  $mode = $_GET['mode'];
  if($mode == 'cash'){
    $sql = "UPDATE orders SET ptype = 'cash' WHERE dmobile = $dmobile AND status = 'arrived'";
    mysqli_query($conn, $sql);
  }
  else{
    $sql = "UPDATE orders SET ptype = 'upi' WHERE dmobile = $dmobile AND status = 'arrived'";
    mysqli_query($conn, $sql);
  }
?>