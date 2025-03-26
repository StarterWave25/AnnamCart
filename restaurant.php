<?php
$restaurantId = $_GET['restaurant-id'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/restaurant.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <script src=""></script>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/footer.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
  <header id="header"></header>
  <div class="restaurant-main-container">
    <div class="restaurant-head">
      <!-- js-code-injected -->
    </div>

    <div class="restaurant-body">
      <!-- js-code-injected -->
    </div>
  </div>
  <footer id="footer"></footer>


  <script src="scripts/restaurant.js"></script>

  <script>
    const restaurantId = <?php echo $restaurantId; ?>;
    const userMobile = <?php session_start(); echo $_SESSION['mobile'];?>;
    getRestaurantData(restaurantId);
  </script>
</body>

</html>