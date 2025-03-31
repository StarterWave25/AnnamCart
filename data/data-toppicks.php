<?php
    include 'conn.php';

    $sql = "SELECT item_name, res_id FROM items WHERE ratings >= 4.5 LIMIT 6";
    $result = mysqli_query($conn, $sql);
    $topPicks = [];

    while($row = mysqli_fetch_assoc($result)){
        $topPicks[] = $row;
    }

    echo json_encode($topPicks);
?>