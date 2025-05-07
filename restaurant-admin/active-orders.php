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
  <script src="script/header-load.js"></script>
  <link rel="stylesheet" href="../styles/header.css">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/orders.css">
</head>

<body>
  <header></header>
  <div class="active-container">
    <div class="active-head">
      <h2 class="heading">Active Orders</h2>
      <a href="accepted-orders.php" class="accept-ord"><button>Accepted Orders</button></a>
    </div>
    <div class="active-body">
      <!-- js code goes here  -->

    </div>
  </div>
  <?php
  $restaurantId = $_SESSION['rid'];
  ?>
  <script>
    const rid = <?php echo $restaurantId; ?>;
  </script>
  <script src="script/update-status.js" type="module"></script>
  <script src="script/active-orders.js" type="module"></script>
</body>

</html>