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
  <link rel="stylesheet" href="styles/orders.css">
</head>

<body>
  <header></header>
  <div class="active-container">
    <div class="active-head">
      <h2 class="heading">Accepted Orders</h2>
      <a href="active-orders.php" class="accept-ord"><button>Active Orders</button></a>
    </div>
    <div class="accepted-body">
      
    </div>
  </div>
  <script>
    const rid = <?php echo $_SESSION['rid']; ?>;
  </script>
  <script type="module" src="script/update-status.js"></script>
  <script type="module" src="script/accepted-orders.js"></script>
</body>

</html>