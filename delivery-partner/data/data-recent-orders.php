<?php
include '../../data/conn.php';

session_start();
$dmobile = $_SESSION['dmobile'];
if(isset($_GET['mode'])) {
  $mode = $_GET['mode'];
}else{
  $mode = '';
}
if ($mode == 'recent') {
  $sql = "SELECT * FROM orders_status WHERE dmobile=$dmobile AND status = 'delivered' ORDER BY Time DESC LIMIT 2";
  $result = mysqli_query($conn, $sql);
  $orders = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $orders[] = $row;
  }

  echo json_encode($orders);
} else if ($mode == 'cash') {
  $sql = "SELECT total FROM orders WHERE DATE(Time) = CURDATE() AND dmobile=$dmobile AND status = 'delivered' AND ptype = 'cash' ORDER BY Time DESC";
  mysqli_query($conn, $sql);
  $result = mysqli_query($conn, $sql);
  $orders = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $orders[] = $row;
  }
  echo json_encode($orders);
} else if ($mode == 'time') {
  $dmobile = $_SESSION['dmobile'];
  $today = date('Y-m-d');

  $sql = "SELECT SUM(duration_seconds) AS total_active FROM delivery_activity
        WHERE dmobile = '$dmobile' AND activity_date = '$today'";

  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
  $seconds = $row['total_active'] ?? 0;

  // convert to HH:MM:SS
  $hours = floor($seconds / 3600);
  $minutes = floor(($seconds % 3600) / 60);
  $secs = $seconds % 60;

  $formatted = sprintf("%02d:%02d:%02d", $hours, $minutes, $secs);
  echo json_encode($formatted);
} else {
  $sql = "SELECT total FROM orders WHERE DATE(Time) = CURDATE() AND dmobile=$dmobile AND status = 'delivered' ORDER BY Time DESC";
  mysqli_query($conn, $sql);
  $result = mysqli_query($conn, $sql);
  $orders = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $orders[] = $row;
  }
  echo json_encode($orders);
}
?>