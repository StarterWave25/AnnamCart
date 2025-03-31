<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <script src=""></script>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/popup.css">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/restaurant.css">
  <!-- <link rel="stylesheet" href="styles/footer.css"> -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
  <header id="header"></header>
  <?php
  if (isset($_GET['restaurant-id'])) {
    $restaurantId = $_GET['restaurant-id'];
  } else {
    echo "Sorry, you can't have access to this restaurant page !";
    exit(0);
  } ?>
  <div class="restaurant-overlay"></div>
  <div class="login-addItems-popup">
    <div class="close-btn">
      <div class="close-border">
        <p>x</p>
      </div>
    </div>
    <div class="info-touser">
      <div class="heading">
        <h2>To add items into Cart!</h2>
      </div>
      <p>Please Log in First.</p>
      <p>Don't have an account then, Sign Up now.</p>
    </div>
    <div class="signup-login-btns">
      <a href="login.php"><button class="login-btn">Login</button></a>
      <a href="signup.php"><button class="signup-btn">Sign Up</button></a>
    </div>
  </div>

  <div class="changeItems-popup">
    <div class="info-touser">
      <div class="heading">
        <h2>Cart update required !</h2>
      </div>
      <p>Your cart has items from another restaurant.</p>
      <p>Clear it to add new items?</p>
    </div>
    <div class="changeItems-btns">
      <a><button class="login-btn no-btn">No</button></a>
      <a><button class="signup-btn clear-btn">Clear</button></a>
    </div>
  </div>

  <div class="restaurant-main-container">
    <div class="restaurant-head">
      <!-- js-code-injected -->
    </div>

    <div class="restaurant-body">
      <!-- js-code-injected -->
    </div>
  </div>

  <!-- <footer id="footer"></footer> -->


  <script src="scripts/restaurant.js"></script>

  <script>
    const restaurantId = <?php echo $restaurantId; ?>;
    getRestaurantData(restaurantId);
  </script>
</body>

</html>