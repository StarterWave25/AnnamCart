<?php
include '../../data/conn.php';

session_start();
$dmobile = $_SESSION['dmobile'];
$mode = $_GET['mode'];
if ($mode == 'active') {
  $now = date('Y-m-d H:i:s');
  $today = date('Y-m-d');

  $sql = "INSERT INTO delivery_activity (dmobile, start_time, activity_date)
        VALUES ('$dmobile', '$now', '$today')";
  mysqli_query($conn, $sql);
} else {
  $now = date('Y-m-d H:i:s');

  $sql = "SELECT id, start_time FROM delivery_activity
        WHERE dmobile = '$dmobile' AND end_time IS NULL
        ORDER BY start_time DESC LIMIT 1";

  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);

  if ($row) {
    $id = $row['id'];
    $start = strtotime($row['start_time']);
    $end = strtotime($now);
    $duration = $end - $start;

    $update = "UPDATE delivery_activity
               SET end_time = '$now', duration_seconds = $duration
               WHERE id = $id";
    mysqli_query($conn, $update);
  }
}
?>