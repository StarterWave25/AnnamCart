<?php
session_start();
if (!isset($_SESSION['username']) &&  !isset($_SESSION['mobile'])) {
  header('Location: index.html');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Orders</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/footer.css">
  <link rel="stylesheet" href="styles/myOrders.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta name="robots" content="noindex, nofollow">
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
  <header id="header"></header>

  <div class="orders-heading">
    My Orders
  </div>

  <div class="orders-container">
    <!-- JS Code goes here -->
  </div>

  <script src="scripts/myOrders.js"></script>
</body>

</html>