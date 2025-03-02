<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
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
            border: 1px solid var(--brown);
            background-color: var(--brown);
            color: var(--white);
        }
        .signup {
            background-color: transparent;
            color: var(--brown);
            border: 1px solid var(--brown);
        }
    </style>
</head>

<body>
    <header id="header"></header>
    <div class="login-main">
        <img src="img/chakra.png" alt="chakram">
        <div class="login-container">
            <div class="login-head">
                <h2>LOGIN</h2>
                <h4>Namaskaram, Enter your mobile number to login your account !</h4>
            </div>
            <form action="data/auth-login.php" class="login-form" method="post">
                <div class="form-mobile">
                    <input type="tel" name="mobile" id="input-mobile" required pattern="[0-9]{10}" placeholder="Enter Mobile Number">
                    <span><?php if(isset($_GET['emob'])) { echo $_GET['emob']; }?></span>
                    <div class="instruction-cont">
                        <a href="signup.php">Don't have an Account ? Create Now.</a>
                    </div>
                </div>
                <input type="submit" value="Log in" name="submit">
            </form>
            <div class="legal-container">
                <h5>Do you want to know ?</h5>
                <div class="legal-links">
                    <a href="">Privacy Policy</a>
                    <span>|</span>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
        </div>
        <img src="img/shanka.png" alt="shankam">
    </div>
    <img src="img/design.png" alt="design" class="design-img">
    <script src="scripts/logsign.js"></script>
</body>

</html>