<header>
    <div class="logo-container">
        <a href="../index.html">
            <div class="for-gradient">AnnamCart</div>
        </a>
    </div>
    <nav>
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="index.html">Restaurants</a></li>
            <li><a href="../contact-us.php">Contact us</a></li>
            <span></span>
        </ul>
    </nav>
    <div class="user-containar">
        <a href="../login.php" class="user-links"><button class="login">Log in</button></a>
        <a href="../signup.php" class="user-links"><button class="signup">Sign Up</button></a>
        <div class="user-profile">
            <img src="../img/user.png" alt="user profile icon">
            <h3 class="user-name"></h3>
            <div class="profile-menu">
                <a href="../profile.php">My Profile</a>
                <a href="../my-orders.php">My Orders</a>
                <a class="logout-btn">Log Out</a>
            </div>
        </div>
        <a href="../cart.php" class="cart-label">
            <img src="../img/cart.png" alt="cart symbol">
            <h3>Cart</h3>
            <span class="cart-label-quantity"></span>
        </a>
</header>

<!-- Mobile Bottom Navigation -->
<div class="mobile-bottom-nav">
    <div class="mobile-nav-items">
        <a href="../index.html" class="mobile-nav-item">
            <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Home</span>
        </a>
        <a href="index.html" class="mobile-nav-item">
            <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
            </svg>
            <span>Restaurants</span>
        </a>
        <a href="../login.php" class="mobile-nav-item mobile-login-link">
            <img src="../img/account_circle.svg" alt="user profile icon">
            <span>Login</span>
        </a>
        <a href="../cart.php" class="mobile-nav-item mobile-cart-link" style="display: none;">
            <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span>Cart</span>
            <span class="cart-quantity mobile-cart-quantity" style="display: none;"></span>
        </a>
    </div>
</div>

<a href="../cart.php" class="gotoCart-popup">
    <h2 class="goto-heading"></h2>
    <button>View&nbsp;Cart<img src="../img/next.png" alt="arrow symbol"></button>
</a>

<div class="logout-popup-overlay"></div>
<div class="logout-popup">
    <h2>Hold On, Govinda ?</h2>
    <p>Ayyo! You’re leaving already? Without tasting all the flavours of AnnamCart? Confirm once, Govinda!</p>
    <div class="logout-popup-buttons">
        <button class="logout-btn btn-yes">Yes, Logout</button>
        <button class="logout-btn btn-no">No, Stay</button>
    </div>
</div>

<script>
    // Simulate PHP session data for demo
    <?php session_start(); ?>
    const username = '<?php if (isset($_SESSION['username'])) {
                            echo $_SESSION['username'];
                        } else {
                            echo 'null';
                        } ?>';
    const headerUserMobile = <?php if (isset($_SESSION['mobile'])) {
                                    echo $_SESSION['mobile'];
                                } else {
                                    echo 0;
                                } ?>;

    if (headerUserMobile != 0) {
        sessionStorage.setItem('userMobile', JSON.stringify(headerUserMobile));
    }

    function initializeHeader() {
        if (username !== 'null' && headerUserMobile !== 0) {
            // User is logged in
            const userProfile = document.querySelector('.user-profile');
            const userLinks = document.querySelectorAll('.user-links');
            const cartBtn = document.querySelector('.cart-label');
            const userHeading = document.querySelector('.user-name');
            const mobileLoginLink = document.querySelector('.mobile-login-link');
            const mobileCartLink = document.querySelector('.mobile-cart-link');

            // Desktop view
            userProfile.style.display = 'flex';
            userHeading.textContent = username;
            cartBtn.style.display = 'flex';
            userLinks.forEach((link) => {
                link.style.display = 'none';
            });

            // Mobile view
            //mobileProfileIcon.style.display = 'flex';
            mobileLoginLink.style.display = 'none';
            mobileCartLink.style.display = 'flex';
            getCartQuantity();
        } else {
            // User is not logged in
            const mobileLoginLink = document.querySelector('.mobile-login-link');
            const mobileCartLink = document.querySelector('.mobile-cart-link');

            // Mobile view - show login, hide profile and cart
            mobileLoginLink.style.display = 'flex';
            mobileCartLink.style.display = 'none';
        }
    }

    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', () => {
        const popup = document.querySelector('.logout-popup');
        const overlay = document.querySelector('.logout-popup-overlay');
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        const yesBtn = document.querySelector('.btn-yes');
        const noBtn = document.querySelector('.btn-no');
        yesBtn.addEventListener('click', () => {
            sessionStorage.removeItem('userMobile');
            sessionStorage.removeItem('mapsLink');
            location.href = '../data/logout.php';
        })
        noBtn.addEventListener('click', () => {
            document.body.style.overflow = 'unset';
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });
    });

    async function getCartQuantity() {
        let cartItems = await JSON.parse(localStorage.getItem(`storedItems-${headerUserMobile}`)) || [];
        const gotoCart = document.querySelector('.gotoCart-popup');
        let gotoHeading = document.querySelector('.goto-heading');

        const cartQuantityLabel = document.querySelector('.cart-label-quantity');
        if (cartItems.length > 0) {
            cartQuantityLabel.textContent = cartItems.length;
            if (window.innerWidth <= 768) {
                gotoCart.style.bottom = '80px';
                gotoCart.style.animation = 'gotoCartMobani 0.4s ease-in-out';
            } else {
                gotoCart.style.bottom = '10px';
                gotoCart.style.animation = 'gotoCartAni 0.4s ease-in-out';
            }
            if (cartItems.length === 1) {
                gotoHeading.innerHTML = '<span>1</span> Item Added';
            } else {
                gotoHeading.innerHTML = `<span>${cartItems.length}</span> Items Added`;
            }

        } else {
            gotoCart.style.animation = 'none';
            gotoCart.style.bottom = '-100%';

        }
    }

    // Initialize everything
    initializeHeader();

    // Update cart quantity periodically (if needed)
    setInterval(getCartQuantity, 5000);
</script>