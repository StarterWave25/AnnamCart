
async function getCart() {
    let total = 0, dummyTotal = 0, response, restaurantData;
    let cartItems = await getQuantityStorage();
    if (await cartItems.length > 0) {
        response = await fetch(`data/data-restaurant.php?restaurant-id=${cartItems[0].restaurantId}`);
        restaurantData = await response.json();
    }
    let cartHTML = '';
    let cartItemListHTML = '';

    await cartItems.forEach(async (item) => {
        if (restaurantData) {
            await restaurantData.resBody.forEach((resItem) => {
                if (resItem.item_id === item.itemId) {
                    cartItemListHTML += `
                    <div class="item">
                        <h4>${resItem.item_name}</h4>
                        <div class="update-quantity">
                            <button class="decrement-quantity decrement-${item.itemId}">-</button>
                            <h3 class="quantity-${item.itemId}">${item.quantity}</h3>
                            <button class="increment-quantity increment-${item.itemId}">+</button>
                        </div>
                        <div class="item-price">
                            <del>₹${getItemPrice(item.quantity, resItem.dprice)}</del>
                            <h3>₹${getItemPrice(item.quantity, resItem.price)}</h3>
                        </div>
                    </div>`;
                    total += getItemPrice(item.quantity, resItem.price);
                    dummyTotal += getItemPrice(item.quantity, resItem.dprice);
                }
            });
        }

        setTimeout(() => {
            const minBtn = document.querySelector(`.decrement-${item.itemId}`);
            const maxBtn = document.querySelector(`.increment-${item.itemId}`);

            if (minBtn) {
                minBtn.addEventListener('click', async () => {
                    item.quantity--;
                    if (item.quantity >= 1) {
                        document.querySelector(`.quantity-${item.itemId}`).textContent = item.quantity;
                        setQuantityStorage(item.itemId, item.quantity, 6901);
                    }
                    else {
                        let cartItems = await getQuantityStorage();
                        cartItems.forEach((cartItem) => {
                            if (cartItem.itemId === item.itemId) {
                                cartItems.splice(cartItems.indexOf(cartItem), 1);
                            }
                        })
                        localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
                        getCartQuantity();
                    }
                    loadingCart();
                });
            }

            if (maxBtn) {
                maxBtn.addEventListener('click', async () => {
                    item.quantity++;
                    document.querySelector(`.quantity-${item.itemId}`).textContent = item.quantity;
                    setQuantityStorage(item.itemId, item.quantity, item.res_id);
                    loadingCart();
                });
            }
        }, 100);

    });

    function addCartHTML() {
        if (restaurantData) {
            cartHTML = `
            <div class="restaurant-name-container">
                <a id="img-con" href="restaurant.php?restaurant-id=${restaurantData.resHead.res_id}">
                    <img class="cart-back" src="img/out-arrow.png" alt="out-cart-symbol">
                </a>
                <h3>${restaurantData.resHead.res_name}</h3>
            </div>
            <button class="location-container">
                <img src="img/place.png" alt="location-image">
                <h3>Add your Location</h3>
            </button>
            <div class="saved-container">
                <div class="img-con-saved">
                    <img src="img/rupee (2).png" alt="saved-icon">
                </div>
                <h3>You have Saved ₹${dummyTotal - total} !</h3>
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
                <span class="wait-animation"></span>
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
                        <h4>Saved ${dummyTotal - total} !</h4>
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

        }
        const cartContainer = document.querySelector('.cart');
        cartContainer.innerHTML = cartHTML;

        const cartItemList = document.querySelector('.items-list');
        if (cartItems.length > 0) {
            cartItemList.innerHTML = cartItemListHTML;
        } else {
            cartContainer.innerHTML = `<p class="item-list-error">Your cart is empty :(</p>`;
        }
    }

    addCartHTML();

    /*
    let respondQuantity;
    async function getQuantity(itemId) {
        const response = await fetch(`data/data-quantity.php?itemId=${itemId}`);
        respondQuantity = await response.json();
        return respondQuantity.quantity;
    }

    async function sendItemData(itemId, quantity) {
        const postRequest = await fetch('data/data-cart.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ itemId, quantity })
        });

        const response = await postRequest.json();
    } */

}

getCart();

async function setQuantityStorage(itemId, quantity, restaurantId) {
    let cartItems = await getQuantityStorage() || [];
    let itemFound = false;
    cartItems.forEach((item) => {
        if (item.itemId === itemId) {
            itemFound = true;
            item.quantity = quantity;
            localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
        }
    });
    if (!itemFound) {
        cartItems.push({ itemId, quantity, restaurantId });
        localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
    }
    getCartQuantity();
}

async function getQuantityStorage() {
    let cartItems = await JSON.parse(localStorage.getItem(`storedItems-${userMobile}`)) || [];
    return cartItems;
}



async function loadingCart() {
    document.querySelector(`.wait-animation`).style.animation = 'waiter 0.6s alternate infinite linear';
    document.querySelector('.wait-animation').style.height = '2px';
    document.querySelector('.items-list').style.opacity = '0.5';
    document.querySelector('.items-list').style.pointerEvents = 'none';
    setTimeout(async () => {
        await getCart();
    }, 1200);
}

function getItemPrice(quantity, price) {
    return quantity * price;
}