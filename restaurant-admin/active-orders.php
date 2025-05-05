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
      <a href="accepted-orders.html" class="accept-ord"><button>Accepted Orders</button></a>
    </div>
    <div class="active-body">
      <!-- js code goes here  -->
      <div class="order-card">
        <div class="order-names">
          <h4>Customer Name</h4>
          <h4>Agent Name</h4>
        </div>

        <div class="order-items">
          <h5>Items</h5>
        </div>

        <div class="order-total">
          <h3>Total: ₹250</h3>
        </div>

        <div class="order-btns">
          <button class="reject-btn">Reject</button>
          <button class="accept-btn">Accept</button>
        </div>
      </div>
    </div>
  </div>
  <script>
    let resId = <?php echo json_encode($_GET['resId']); ?>;
  </script>
  <script src="script/orders.js"></script>
</body>
</html>