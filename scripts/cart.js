const userMobile = sessionStorage.getItem('userMobile');
let total, dummyTotal, response, restaurantData, locationBtn, mapsLink;

async function getCart() {

    if (userMobile) {
        const request = await fetch('data/data-profile.php?mode=getter');
        const response = await request.json();

        if (response.room_no === '' && response.area === '' && response.landmark === '') {
            changeAddress();
        }
        else {
            getAddress(response);
        }
    }

    total = 0, dummyTotal = 0;
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
                let itemId = Number(resItem.item_id);
                if (itemId === item.itemId) {
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
                    <button class="order-now-button">Order Now</button>
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
            cartContainer.innerHTML =
                `<div class="cart-empty-container">
                <img src="img/empty-cart.png" class="cart-error-img">
                <p class="item-list-error">Your cart is empty :(</p>
                <a href="restaurants.html"><button>Browse Restaurants</button></a>
            </div>`;
            cartContainer.style.backgroundColor = 'white';
            cartContainer.style.justifyContent = 'center';
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
    const orderBtn = document.querySelector('.order-now-button');
    if (orderBtn) {
        orderBtn.addEventListener('click', orderFood);
    }

    locationBtn = document.querySelector('.location-container');
    mapsLink = JSON.parse(sessionStorage.getItem('mapsLink'));
    if (locationBtn) {
        if (mapsLink) {
            locationBtn.innerHTML = `
                <img src="img/checked.png" alt="location-image">
                <h3>Location Added !</h3>`;
            locationBtn.style.pointerEvents = 'none';
        }
        else {
            locationBtn.addEventListener('click', getLocation);
        }
    }
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
    document.querySelector(`.wait-animation`).style.animation = 'waiter 0.5s alternate infinite linear';
    document.querySelector('.wait-animation').style.height = '2px';
    document.querySelector('.items-list').style.opacity = '0.5';
    document.querySelector('.items-list').style.pointerEvents = 'none';
    setTimeout(async () => {
        await getCart();
    }, 1000);
}

function getItemPrice(quantity, price) {
    return quantity * price;
}

const saveAddBtn = document.querySelector('.save-address');
saveAddBtn.addEventListener('click', sendAddress);

const changeAddBtn = document.querySelector('.change-address');
changeAddBtn.addEventListener('click', changeAddress);

const roomNo = document.querySelector('.address-room-no');
const area = document.querySelector('.address-area');
const landmark = document.querySelector('.address-landmark');

async function sendAddress() {
    let check = false;

    if (roomNo.value == '' || roomNo.value.length < 3 || area.value == '' || area.value.length < 3 || landmark.value == '' || landmark.value.length < 3) {
        check = false;
    } else {
        check = true;
    }

    if (check) {
        const request = await fetch('data/data-profile.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomNo: roomNo.value, area: area.value, landmark: landmark.value })
        });

        const response = await request.json();
        if (response.error === 'Error') {
            document.querySelector('.message').style.opacity = '1';
            setTimeout(() => {
                document.querySelector('.message').style.opacity = '0';
            }, 3000);
        }
        else {
            getAddress(response);
        }
    }
    else {
        document.querySelector('.message').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.message').style.opacity = '0';
        }, 3000);
    }
}

function getAddress(response) {
    roomNo.value = response.room_no;
    area.value = response.area;
    landmark.value = response.landmark;

    roomNo.setAttribute('readonly', 'true');
    area.setAttribute('readonly', 'true');
    landmark.setAttribute('readonly', 'true');

    saveAddBtn.style.pointerEvents = 'none';
    saveAddBtn.style.opacity = '.3';

    changeAddBtn.style.pointerEvents = 'all';
    changeAddBtn.style.opacity = '1';
}

function changeAddress() {
    changeAddBtn.style.pointerEvents = 'none';
    changeAddBtn.style.opacity = '0.3';

    roomNo.removeAttribute('readonly', 'true');
    area.removeAttribute('readonly', 'true');
    landmark.removeAttribute('readonly', 'true');

    roomNo.focus();
    saveAddBtn.style.pointerEvents = 'all';
    saveAddBtn.style.opacity = '1';
}

function generateOrderID() {
    const timestamp = Date.now().toString().slice(-6);
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `ORD${userMobile.slice(-4)}${randomStr}${timestamp}`;
}

async function orderFood() {

    let addressChecked = await checkAddAddress();

    if (addressChecked) {
        const cart = await getQuantityStorage();
        const orderId = generateOrderID();
        if (!mapsLink) {
            addLocationPopup();
        } else {
            const request = await fetch('data/data-send-orders.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ orderId, cart, total, dummyTotal, items: cart.length, resId: cart[0].restaurantId, mapsLink })
            });
            const response = await request.json();
            if (await response === 'Success') {
                await getAgentsCount(orderId);
            }
            else {
                confirm('Order Failed');
            }
        }
    }
}

async function getAgentsCount(orderId) {
    let request = await fetch('data/data-order-status.php');
    let count = await request.json();
    assigningDelivery(orderId);
}

async function assigningDelivery(orderId) {
    let request = await fetch(`data/data-order-status.php?order-id=${orderId}`);
    let response = await request.json();
    console.log(response);
    if (await response !== 'missed') {
        const socket = new WebSocket('ws://localhost:8080');
        socket.addEventListener('open', () => {
            console.log('Connection Succeed');
            socket.send(JSON.stringify({
                mobile: headerUserMobile,
                role: 'user'
            }));
        });

        socket.addEventListener('message', (event) => {
            let data = JSON.parse(event.data);
            if (data.from === 'agent' && data.status === 'reject') {
                assigningDelivery(orderId);
            }
            else if (data.from === 'restaurant' && data.status === 'reject') {
                confirm('Restaurant rejected order ! Please order after some time !');
            }
            else if (data.status === 'accept') {
                window.location.href = `OrderedDetails.php?order-id=${orderId}`;
            }
        });

        setTimeout(() => {
            socket.send(response);
        }, 1000);
    }
    else {
        assigningDelivery(orderId);
    }
}

async function getLocation() {

    return new Promise((resolve) => {
        let latitude, longitude;
        navigator.geolocation.getCurrentPosition(async (position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            mapsLink = generateMapsLink(latitude, longitude);
            sessionStorage.setItem('mapsLink', JSON.stringify(mapsLink));
            let city = await getCity(latitude, longitude);

            if (city) {
                locationBtn.innerHTML = `
                    <img src="img/checked.png" alt="location-image">
                    <h3>Location Added !</h3>
                `;
                locationBtn.style.pointerEvents = 'none';
                resolve();
            }
            else {
                notAvailable();
            }
        });
    });
}

function generateMapsLink(latitude, longitude) {
    let mapsLink = `https://www.google.com/maps/place/${latitude}+${longitude}`;
    return mapsLink;
}

async function getCity(Latitude, Longitude) {
    return new Promise(async (resolve) => {
        const apiKey = '28aacc286097ecf47b5355cb0594b8a2';
        // const response = await fetch(`https://apis.mappls.com/advancedmaps/v1/${apiKey}/rev_geocode?lat=${Latitude}&lng=${Longitude}`);
        // const data = await response.json();
        // const city = await data.results[0].city;
        const city = 'Tirupati';
        if (city === 'Tirupati') {
            resolve(true);
        }
        else {
            resolve(false);
        }
    });
}

function notAvailable() {
    document.querySelector('.restaurant-overlay').style.opacity = '1';
    document.querySelector('.restaurant-overlay').style.visibility = 'visible';
    document.querySelector('.changeItems-popup').style.opacity = '1';
    document.querySelector('.changeItems-popup').style.visibility = 'visible';
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.restaurant-overlay').style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
        document.querySelector('.changeItems-popup').style.opacity = '0';
        document.querySelector('.changeItems-popup').style.visibility = 'hidden';
    });
}

function addLocationPopup() {
    let popup = document.querySelector('.addlocation-popup');
    let noBtn = document.querySelector('.no-btn1');
    let locationAddBtn = document.querySelector('.location-addbtn');
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    document.querySelector('.restaurant-overlay').style.opacity = '1';
    document.querySelector('.restaurant-overlay').style.visibility = 'visible';
    noBtn.addEventListener('click', () => {
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
    });
    locationAddBtn.addEventListener('click', () => {
        locationAddBtn.innerHTML = 'Thank You';
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
        getLocation();
        setTimeout(() => {
            locationAddBtn.innerHTML = 'ADD';
        }, 1000);
    });
}

async function checkAddAddress() {
    const request = await fetch('data/data-profile.php?mode=getter');
    const response = await request.json();

    let popup = document.querySelector('.addAddress-popup');
    let backBlur = document.querySelector('.restaurant-overlay');

    if (response.room_no === '' && response.area === '' && response.landmark === '') {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';
        backBlur.style.visibility = 'visible';
        backBlur.style.opacity = '1';
        document.querySelector('.address-close').addEventListener('click', () => {
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0';
            backBlur.style.visibility = 'hidden';
            backBlur.style.opacity = '0';
            document.querySelector('.get-contact-info').style.backgroundColor = 'var(--lpeach)';
            setTimeout(() => {
                document.querySelector('.get-contact-info').style.backgroundColor = 'white';
            }, 400);
            setTimeout(() => {
                document.querySelector('.get-contact-info').style.backgroundColor = 'var(--lpeach)';
            }, 800);
            setTimeout(() => {
                document.querySelector('.get-contact-info').style.backgroundColor = 'white';
            }, 1200);
        });
        return false;
    }
    else return true;

}

