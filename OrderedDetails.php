<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Orders</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <script src=""></script>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/index.css">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/footer.css">
  <link rel="stylesheet" href="styles/orderedDetails.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
  <header id="header"></header>
  <a href="myOrders.html" class="goback-btn"><img src="img/out-arrow.png" alt=""></a>
  <a class="goback-span" href="myOrders.html">My Orders</a>
  <div class="ordered-details">
    <!-- js code comes here -->
  </div>
  </div>
  <script>
    const orderId = '<?php echo $_GET['order-id']; ?>';
  </script>
  <script src="scripts/orderedDetails.js"></script>
</body>

</html>