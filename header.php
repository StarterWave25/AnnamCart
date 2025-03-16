<link rel="icon" href="img/logo.png" type="image/x-icon">
<script>
    <?php session_start(); ?>
    const username = '<?php echo $_SESSION['username']; ?>';
    if (username) {
        const userProfile = document.querySelector('.user-profile');
        const userLinks = document.querySelectorAll('.user-links');
        const cartBtn = document.querySelector('.cart-label');
        const userHeading = document.querySelector('.user-name');
        userProfile.style.display = 'flex';
        userHeading.textContent = username;
        cartBtn.style.display = 'flex';
        userLinks.forEach((link) => {
            link.style.display = 'none';
        });
    }

    //logout session
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', () => {
        logoutBtn.href = 'data/logout.php';
    });
</script>

<div class="logo-container">
    <a href="index.html">
        <h1>AnnamCart</h1>
    </a>
</div>
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="restaurants.html">Restaurants</a></li>
        <li><a href="contactus.html">Contact us</a></li>
        <span></span>
    </ul>
</nav>
<div class="user-containar">
    <a href="login.php" class="user-links"><button class="login">Log in </button></a>
    <a href="signup.php" class="user-links"><button class="signup">Sign Up</button></a>
    <div class="user-profile">
        <img src="img/user.png" alt="" srcset="">
        <h3 class="user-name"></h3>
        <div class="profile-menu">
            <a href="profile.php">My Profile</a>
            <a href="myOrders.html">My Orders</a>
            <a href="" class="logout-btn">Log Out</a>
        </div>
    </div>
    <label for="cart-button" class="cart-label">
        <img src="img/cart.png" alt="">
        <h3>Cart</h3>
    </label>
    <input type="checkbox" id="cart-button" class="check">
    <label class="overlay" for="cart-button"></label>
    <aside class="cart">
        <!--js code goes here -->
    </aside>
</div>

<script src="scripts/cart.js" type="module"></script>

