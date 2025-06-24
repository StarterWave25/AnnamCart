<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="icon" href="img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/popup.css">
    <link rel="stylesheet" href="styles/cart.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/headfoot.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>

<body>
    <header id="header"></header>

    <div class="restaurant-overlay"></div>
    <div class="changeItems-popup">
        <div class="info-touser">
            <div class="heading">
                <h2>Sorry, We are not available !</h2>
            </div>
            <p></p>
            <p>This website built only for tirumala.</p>
        </div>
        <div class="changeItems-btns">
            <a style="display: none;"><button style="display: none;"></button></a>
            <a><button class="close-btn">Close</button></a>
        </div>
    </div>

    <div class="addAddress-popup">
        <div class="info-touser">
            <div class="heading">
                <h2>Please add your address !</h2>
            </div>
        </div>
        <div class="changeItems-btns">
            <a style="display: none;"><button style="display: none;"></button></a>
            <a><button class="close-btn address-close">Close</button></a>
        </div>
    </div>

    <div class="addlocation-popup">
        <div class="info-touser">
            <div class="heading">
                <h2>Please add your live location first !</h2>
            </div>
        </div>
        <div class="changeItems-btns">
            <a><button class="login-btn no-btn no-btn1">No</button></a>
            <a><button class="signup-btn clear-btn location-addbtn">ADD</button></a>
        </div>
    </div>

    <div class="get-contact-info">
        <div class="heading-container">
            <h2 class="contact-heading">
                Add Your Address
            </h2>
            <button class="location-container" title="Add your live location">
                <img src="img/place_brown.png" alt="location-image">
            </button>
        </div>
        <div class="input-fields">
            <input type="text" placeholder="Room no, Flat no, Door no" class="address-room-no">
            <input type="text" placeholder="Area, Street, Place" class="address-area">
            <input type="text" placeholder="Landmark" class="address-landmark">
            <div class="save-change-btns">
                <button class="change-address">Change </button>
                <button class="save-address">Save</button>
            </div>
        </div>
        <div class="message">
            <h2>You have entered invalid details!</h2>
            <h2>
                <?php if (isset($_GET['error'])) {
                    echo $_GET['error'];
                } ?>
            </h2>
        </div>
    </div>

    <div class="popup-overlay">

    </div>
    <aside class="cart">
        <!--js code goes here -->
    </aside>
    <script src="scripts/cart.js"></script>
    <?php
    if (isset($_GET['order-id'])) {
        $order_id = $_GET['order-id'];
        echo "<script>
                reorderFromPrevious('$order_id');
            </script>";
    }
    ?>
</body>

</html>