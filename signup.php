<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
    <link rel="icon" href="img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/signup.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/headfoot.js"></script>
</head>

<body>
    <header id="header"></header>
    <div class="signup-main">
        <img src="img/chakra.png" alt="chakram">
        <div class="signup-container">
            <div class="signup-head">
                <h2>SIGN UP</h2>
                <h4>Namaskaram, Enter your details to create your account !</h4>
            </div>
            <form action="data/auth-signup.php" class="signup-form" method="post">
                <div class="form-mobile">
                    <input type="text" name="name" id="input-name" required placeholder="Enter Your Name">
                    <span><?php if(isset($_GET['ename'])) { echo $_GET['ename']; }?></span>
                    <input type="tel" name="mobile" id="input-mobile" required placeholder="Enter Mobile Number" pattern="[0-9]{10}">
                    <span><?php if(isset($_GET['emob'])) { echo $_GET['emob']; }?></span>
                    <div class="instruction-cont">
                        <a href="login.php">Already have an Account ? Login Now.</a>
                    </div>
                </div>
                <input type="submit" value="Sign up" name="submit">
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