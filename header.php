<link rel="icon" href="img/logo.png" type="image/x-icon">
<script>

    <?php session_start(); ?>
    const username = '<?php echo $_SESSION['username']; ?>';
    const headerUserMobile = <?php echo $_SESSION['mobile']; ?>;

    sessionStorage.setItem('userMobile', JSON.stringify(headerUserMobile));
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
        sessionStorage.removeItem('userMobile');
        sessionStorage.removeItem('mapsLink');
        logoutBtn.href = 'data/logout.php';
    });

    async function getCartQuantity() {
        let cartItems = await JSON.parse(localStorage.getItem(`storedItems-${headerUserMobile}`)) || [];
        const gotoCart = document.querySelector('.gotoCart-popup');
        let gotoHeading = document.querySelector('.goto-heading');

        const cartQuantityLabel = document.querySelector('.cart-label-quantity');
        if (cartItems.length > 0) {
            cartQuantityLabel.textContent = cartItems.length;
            gotoCart.style.top = '92%';
            if (cartItems.length === 1) {
                gotoHeading.innerHTML = '<span>1</span> Item Added';
            } else {
                gotoHeading.innerHTML = `<span>${cartItems.length}</span> Items Added`;
            }

        } else {
            cartQuantityLabel.textContent = '';
            gotoCart.style.top = '110%';
        }
    }

    getCartQuantity();
</script>

<div class="logo-container">
    <a href="index.html">
        <h1 class="for-gradient">AnnamCart</h1>
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
    <a href="cart.php" class="cart-label">
        <img src="img/cart.png" alt="">
        <h3>Cart</h3>
        <span class="cart-label-quantity"></span>
    </a>
</div>


<a href="cart.php" class="gotoCart-popup">
    <h2 class="goto-heading"></h2>
    <button>View Cart<img src="img/next.png" alt=""></button>
</a>