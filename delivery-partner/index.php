<?php
    session_start();
    if (isset($_SESSION['dname']) && isset($_SESSION['dmobile'])) {
        header("Location: home.php");
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="../styles/signup.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/header.js"></script>
    <style>
        .statechanger{
            display: none !important;
        }
    </style>
</head>

<body>
    <header></header>
    <div class="signup-main">
        <div class="signup-container">
            <div class="signup-head">
                <h2>LOGIN</h2>
                <h4>Namaskaram, Enter your details to login your account !</h4>
            </div>
            <form action="data/auth-login.php" class="signup-form" method="post">
                <div class="form-mobile">
                    <input type="tel" name="mobile" id="input-mobile" autofocus required placeholder="Enter Your Mobile Number" pattern="[0-9]{10}">
                    <span><?php if (isset($_GET['emob'])) {
                                echo $_GET['emob'];
                            } ?></span>
                    <input type="text" name="password" id="input-name" required placeholder="Enter Your Password" minlength="8">
                    <span><?php if (isset($_GET['ename'])) {
                                echo $_GET['ename'];
                            } ?></span>
                </div>
                <input type="submit" value="Log in" name="submit">
            </form>
            <div class="legal-container">
                <h5>Do you want to know ?</h5>
                <div class="legal-links">
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <span>|</span>
                    <a href="terms-conditions.html">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </div>
    <script></script>
</body>

</html>