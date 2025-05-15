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
    <link rel="stylesheet" href="styles/index.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/header.js"></script>
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/header.css">
</head>

<body>
    <header></header>
    <div class="agentdasbord">
        <div class="todaydasbord">
            <!-- js code goes here -->
        </div>
        <div class="prsentorders">
            <!-- js code geos here  -->
        </div>
    </div>

    <script src="script/home.js"></script>
</body>

</html>