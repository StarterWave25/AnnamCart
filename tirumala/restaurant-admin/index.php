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
    <script src="script/header-load.js" type="module"></script>
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/index.css">
</head>

<body>
    <header></header>
    <div class="dashboard">
        <!-- js code geos here -->
    </div>
    <script>
        const rid = <?php echo $_SESSION['rid']; ?>;
    </script>
    <script src="script/update-status.js" type="module"></script>
    <script src="script/dashboard.js"></script>
</body>

</html>