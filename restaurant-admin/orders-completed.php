<?php
session_start();
if (!isset($_SESSION['rname']) && !isset($_SESSION['rid'])) {
  header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/header-load.js" type="module"></script></script>
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/orders-completed.css">
</head>
<body>
   <header></header> 
   <div class="orders-container">
    <div class="order-head">
        <h2>Completed Orders</h2>
    </div>
    <div class="order-table">
        <table>
            <tr>
                <th>Order id</th>
                <th>Customer Name</th>
                <th>Agent Name</th>
                <th>Agent Mobile</th>
                <th>Total</th>
                <th>Time</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
           
            
        </table>
    </div>
   </div>
</body>
</html>