<?php
include 'conn.php';
if (isset($conn)) {
    $sql = "SELECT * FROM search_items";
    $result = mysqli_query($conn, $sql);
    $items = [];

    if (isset($_GET['query'])) {
        $query = trim($_GET['query']);
        $search = "%{$query}%";
        $stmt = mysqli_prepare($conn, "SELECT restaurants.*, items.* FROM restaurants JOIN items ON restaurants.res_id = items.res_id WHERE items.item_name LIKE ?");
        mysqli_stmt_bind_param($stmt, "s", $search);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        // $sql = "SELECT restaurants.*, items.* FROM restaurants JOIN items ON restaurants.res_id = items.res_id WHERE items.item_name LIKE '%$query%'";
        // $result = mysqli_query($conn, $sql);
    }

    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    echo json_encode($items);
}

else{
    echo json_encode("Something went wrong !");
}
