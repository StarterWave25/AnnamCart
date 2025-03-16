async function getCart() {
    let total = 0, dummyTotal = 0;
    let cartItemsResponse = await fetch('data/data-cart.php');
    let cartItems = await cartItemsResponse.json();
    console.log(cartItems);

    let cartHTML = '';
    let cartItemListHTML = '';
    cartItems.forEach((item) => {
        total += getItemPrice(item.quantity, item.price);
        dummyTotal += getItemPrice(item.quantity, item.dprice);
        cartHTML = `
        <div class="restaurant-name-container">
            <label id="img-con" for="cart-button">
                <img class="cart-back" src="img/out-arrow.png" alt="out-cart-symbol">
            </label>
            <h3>${item.res_name}</h3>
        </div>
        <button class="location-container">
            <img src="img/place.png" alt="location-image">
            <h3>Add your Location</h3>
        </button>
        <div class="saved-container">
            <div class="img-con-saved">
                <img src="img/rupee (2).png" alt="saved-icon">
            </div>
            <h3>You have Saved ₹${dummyTotal-total} !</h3>
        </div>
        <div class="cart-items">
            <div class="timing">
                <div class="img-timing">
                    <img src="img/time-check.png" alt="clock-symbol">
                </div>
                <h3>Delivering in 20 mins</h3>
            </div>
            <div class="items-list">
                
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
                    <h4>Saved ${dummyTotal-total} !</h4>
                </div>
                <div class="total-amount">
                    <del>₹${dummyTotal}</del>
                    <h2>₹${total}</h2>
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
                        <del>₹${dummyTotal}</del>
                        <h2>₹${total}</h2>
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
        `;
        cartItemListHTML += `
            <div class="item">
                <h4>${item.item_name}</h4>
                <div class="update-quantity">
                    <button class="decrement-quantity">-</button>
                    <h3>${item.quantity}</h3>
                    <button class="increment-quantity">+</button>
                </div>
                <div class="item-price">
                    <del>₹${getItemPrice(item.quantity, item.dprice)}</del>
                    <h3>₹${getItemPrice(item.quantity, item.price)}</h3>
                </div>
            </div>
        `;
    });

    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML = cartHTML;

    const cartItemList = document.querySelector('.items-list');
    cartItemList.innerHTML = cartItemListHTML;
}

getCart();

function getItemPrice(quantity, price) {
    return quantity * price;
}