<?php
include '../../data/conn.php';
session_start();
if (isset($_SESSION['rid'])) {
  $resId = $_SESSION['rid'];
}

$sql = "SElECT * FROM items WHERE res_id = $resId";
$result = mysqli_query($conn, $sql);
$items = [];
while ($row = mysqli_fetch_assoc($result)) {
  $items[] = $row;
}

echo json_encode($items);
?>