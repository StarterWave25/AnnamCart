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
    <title>Sign Up</title>
    <meta name="description" content="Join AnnamCart now and order from the best restaurants in Tirumala! Sign up in seconds and get your first meal in 30 mins.">
    <link rel="icon" href="img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/signup.css">
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
            border: 1px solid var(--brown);
            background: transparent;
            color: var(--brown);
        }

        .signup {
            pointer-events: none;
            background: linear-gradient(130deg, var(--brown), #ff520271);
            color: var(--white);
            border: none;
        }
    </style>
</head>

<body>
    <header id="header"></header>
    <div class="signup-main">
        <div class="signup-container">
            <div class="signup-head">
                <h1>SIGN UP</h1>
                <h2>Namaskaram, Enter your details to create your account !</h2>
            </div>
            <form action="data/auth-signup.php" class="signup-form" method="post">
                <div class="form-mobile">
                    <input type="text" name="name" id="input-name" autofocus required placeholder="Enter Your Name" minlength="3">
                    <span><?php if (isset($_GET['ename'])) {
                                echo $_GET['ename'];
                            } ?></span>
                    <input type="tel" name="mobile" id="input-mobile" required placeholder="Enter Mobile Number" pattern="[0-9]{10}">
                    <span><?php if (isset($_GET['emob'])) {
                                echo $_GET['emob'];
                            } ?></span>
                    <div class="instruction-cont">
                        <a href="login.php">Already have an Account ? Login Now.</a>
                    </div>
                </div>
                <input type="submit" value="Sign up" name="submit">
            </form>
            <div class="legal-container">
                <h3>Do you want to know ?</h3>
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