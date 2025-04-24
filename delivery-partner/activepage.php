<?php
session_start();
if (!isset($_SESSION['dname']) && !isset($_SESSION['dmobile'])) {
    header("Location: index.php");
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
    <link rel="stylesheet" href="styles/activepage.css">
    <link rel="stylesheet" href="styles/index.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/orderdetails.css">
    <link rel="stylesheet" href="styles/customerdetails.css">
    <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>
</head>

<body>
    <header></header>
    <div class="order-details">
        <!-- js code goes when order accepted -->
    </div>
    <div class="ordercontainar">
        <!-- js code goes here -->
    </div>
    <div class="customer-deatils-container">
        <!--js code goes here -->
    </div>
    <script src="script/header.js"></script>
    <script type="module" src="script/get-order.js"></script>
</body>

</html>