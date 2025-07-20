<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="headfoot.js"></script>
    <link rel="icon" href="../img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="../styles/popup.css">
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="../styles/restaurant.css">
    <!-- <link rel="stylesheet" href="styles/footer.css"> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <style>
        nav ul>li:nth-child(2) {
            opacity: 1;
        }

        nav>ul span {
            left: 37.5%;
        }

        ul>li:hover~span {
            left: 4.3%;
        }
    </style>
</head>

<body>
    <header id="header"></header>
    <div class="restaurant-overlay"></div>
    <div class="login-addItems-popup">
        <div class="close-btn">
            <div class="close-border">
                <p>x</p>
            </div>
        </div>
        <div class="info-touser">
            <div class="popup-heading">
                <h2>To add items into Cart!</h2>
            </div>
            <p>Please Log in First.</p>
            <p>Don't have an account then, Sign Up now.</p>
        </div>
        <div class="signup-login-btns">
            <a href="../signup.php"><button class="signup-btn">Sign Up</button></a>
            <a href="../login.php"><button class="login-btn">Login</button></a>
        </div>
    </div>

    <div class="changeItems-popup">
        <div class="info-touser">
            <div class="popup-heading">
                <h2>Cart Update Required !</h2>
            </div>
            <p>Your cart has items from another restaurant.</p>
            <p>Clear it to add new items?</p>
        </div>
        <div class="changeItems-btns">
            <a><button class="login-btn no-btn">No</button></a>
            <a><button class="signup-btn clear-btn">Clear</button></a>
        </div>
    </div>

    <div class="restaurant-main-container">
        <noscript>Restaurant menu loading requires JavaScript. Please enable JS to view.</noscript>
        <div class="restaurant-head">
            <!-- js-code-injected -->
        </div>

        <div class="restaurant-body">
            <!-- js-code-injected -->
        </div>
    </div>

    <!-- <footer id="footer"></footer> -->


    <script src="../scripts/restaurant.js"></script>

    <script>
        const restaurantId = 6901;
        getRestaurantData(restaurantId);
    </script>
</body>

</html>