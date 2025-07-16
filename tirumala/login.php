<?php
session_start();
if (isset($_SESSION['username']) &&  isset($_SESSION['mobile'])) {
    header('Location: index.html');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hurry! Login to AnnamCart and grab your favorite Tirumala meals. Track orders, reorder fast, and never miss a delivery again!">
    <title>Login</title>
    <link rel="icon" href="img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/headfoot.js"></script>
    <style>
        nav ul>li:first-child {
            opacity: 1;
        }

        .login {
            pointer-events: none;
            background: linear-gradient(130deg, var(--brown), #ff520271);
            color: var(--white);
            border: none;
        }

        .signup {
            border: 1px solid var(--brown);
            background: transparent;
            color: var(--brown);
        }
    </style>
</head>

<body>
    <header id="header"></header>
    <div class="login-main">
        <div class="login-container">
            <div class="login-head">
                <h2>LOGIN</h2>
                <h4>Namaskaram, Enter your mobile number to login your account !</h4>
            </div>
            <form action="data/auth-login.php" class="login-form" method="post">
                <div class="form-mobile">
                    <input type="tel" name="mobile" id="input-mobile" autofocus required pattern="[0-9]{10}" placeholder="Enter Mobile Number">
                    <span><?php if (isset($_GET['emob'])) {
                                echo $_GET['emob'];
                            } ?></span>
                    <div class="instruction-cont">
                        <a href="signup.php">Don't have an Account ? Create Now.</a>
                    </div>
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
    <script src="scripts/logsign.js"></script>
</body>

</html>