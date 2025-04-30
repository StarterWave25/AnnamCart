<?php
try {
    include 'conn.php';
    if (isset($conn)) {
        $sql = "SELECT restaurants.*,items.item_name FROM restaurants JOIN items ON restaurants.best_item = items.item_id";
        $result = mysqli_query($conn, $sql);
        $restaurants = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $restaurants[] = $row;
        }
        $topRestaurants = [$restaurants[0], $restaurants[1], $restaurants[2], $restaurants[3]];
        echo json_encode([$topRestaurants, $restaurants]);
    }
} catch (Exception $e) {
    echo "Something went wrong !";
}
