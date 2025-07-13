<?php
  include 'conn.php';

  $sql = "SELECT item_id FROM most_ordered_items";
  $result = mysqli_query($conn, $sql);
  $items = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $items[] = $row['item_id'];
  }

  echo json_encode($items);
?>