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
        <div class="restaurant-name-container">
            <label id="img-con" for="cart-button">
                <img class="cart-back" src="img/out-arrow.png" alt="out-cart-symbol">
            </label>
            <h3>Restaurant Container</h3>
        </div>
        <button class="location-container">
            <img src="img/place.png" alt="location-image">
            <h3>Add your Location</h3>
        </button>
        <div class="saved-container">
            <div class="img-con-saved">
                <img src="img/rupee (2).png" alt="saved-icon">
            </div>
            <h3>You have Saved ₹400 !</h3>
        </div>
        <div class="cart-items">
            <div class="timing">
                <div class="img-timing">
                    <img src="img/time-check.png" alt="clock-symbol">

                </div>
                <h3>Delivering in 20 mins</h3>
            </div>
            <div class="items-list">
                <div class="item">
                    <h4>Item Name</h4>
                    <div class="update-quantity">
                        <button class="decrement-quantity">-</button>
                        <h3>1</h3>
                        <button class="increment-quantity">+</button>
                    </div>
                    <div class="item-price">
                        <del>₹900</del>
                        <h3>₹400</h3>
                    </div>
                </div>
                <div class="item">
                    <h4>Item Name</h4>
                    <div class="update-quantity">
                        <button class="decrement-quantity">-</button>
                        <h3>1</h3>
                        <button class="increment-quantity">+</button>
                    </div>
                    <div class="item-price">
                        <del>₹900</del>
                        <h3>₹400</h3>
                    </div>
                </div>
                <div class="item">
                    <h4>Item Name</h4>
                    <div class="update-quantity">
                        <button class="decrement-quantity">-</button>
                        <h3>1</h3>
                        <button class="increment-quantity">+</button>
                    </div>
                    <div class="item-price">
                        <del>₹900</del>
                        <h3>₹400</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="coupons-container">
            <div class="coupon-heading">
                <h3>Apply Coupons to SAVE more !</h3>
            </div>
            <div class="coupon-card">
                <div class="coupon-img">
                    <img src="img/coupon.png" alt="coupon-img">
                </div>
                <div class="coupon">
                    <h4>Save ₹100 on this order !</h4>
                    <h4>View all coupons ></h4>
                </div>
                <button>Apply</button>
            </div>
        </div>
        <details>
            <summary class="bill-container">
                <div class="bill-img"><img src="img/invoice.png" alt="bill-image"></div>
                <div class="bill-saving">
                    <h3>To Pay</h3>
                    <h4>Saved ₹400 !</h4>
                </div>
                <div class="total-amount">
                    <del>₹900</del>
                    <h2>₹500</h2>
                </div>
                <div class="arrows">
                    <img src="img/arrow-down.png" alt="down-arrow">
                    <img src="img/up-arrow.png" alt="up-arrow">
                </div>
            </summary>
            <div class="order-summary">
                <div class="hotel-charges">
                    <h4>Hotel Charges</h4>
                    <div class="charges-summary">
                        <del>₹50</del>
                        <h3>FREE</h3>
                    </div>
                </div>
                <div class="delivery-charges">
                    <h4>Delivery Charges</h4>
                    <div class="charges-summary">
                        <del>₹50</del>
                        <h3>FREE</h3>
                    </div>
                </div>
                <div class="bill-container second-bill">
                    <div class="bill-saving">
                        <h3>Total Bill</h3>
                    </div>
                    <div class="total-amount second-total">
                        <del>₹900</del>
                        <h2>₹500</h2>
                    </div>
                </div>
            </div>

        </details>
        <div class="order-button">
            <div class="payment">
                <h3>Pay on Delivery (Cash / UPI)</h3>
            </div>
            <div class="but-con">
                <button>Order Now</button>
            </div>
        </div>
    </aside>
</div>