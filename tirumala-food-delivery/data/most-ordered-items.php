<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        $sql = "SELECT restaurants.*,most_ordered_items.* FROM restaurants JOIN most_ordered_items ON restaurants.res_id = most_ordered_items.res_id LIMIT 4";
        $result = mysqli_query($conn, $sql);
        $items = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $items[] = $row;
        }
        echo json_encode($items);
    }
} catch (Exception $e) {
    echo json_encode("Something went wrong !");
}
