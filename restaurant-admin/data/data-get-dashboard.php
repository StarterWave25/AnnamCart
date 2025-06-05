<?php
include '../../data/conn.php';

if (isset($_GET['res-id'])) {
  $resId = $_GET['res-id'];
}

$sql = "SELECT res_name,offer,ratings FROM restaurants WHERE res_id = $resId";
$result = mysqli_query($conn, $sql);
$offer = mysqli_fetch_assoc($result); // extract just the offer value

$sql = "SELECT COUNT(*) as count FROM items WHERE res_id = $resId";
$result = mysqli_query($conn, $sql);
$noItems = mysqli_fetch_assoc($result)['count'];

$sql = "SELECT item_name FROM most_ordered_items WHERE res_id = $resId";
$result = mysqli_query($conn, $sql);
$mItem = mysqli_fetch_assoc($result)['item_name'];

$today = date('Y-m-d');
$sql = "SELECT total FROM orders WHERE res_id = $resId AND DATE(Time) = '$today' AND res_status='delivered'";
$result = mysqli_query($conn, $sql);
$total = [];
while ($row = mysqli_fetch_assoc($result)) {
  $total[] = $row['total'];
}


$response = [
  'offer' => $offer,
  'noItems' => $noItems,
  'mItem' => $mItem,
  'orders' => $total
];

echo json_encode($response);
