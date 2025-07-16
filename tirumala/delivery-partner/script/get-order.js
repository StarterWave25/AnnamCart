import { connectToServer, getSocket, getState } from './dashboard.js';

window.addEventListener('load', setState);

async function setState() {
    let agentState = sessionStorage.getItem('status') || await getState();
    if (agentState === 'requested') {
        setTimeout(() => {
            const stateBtn = document.querySelector('.statechanger');
            stateBtn.textContent = 'Active';
            stateBtn.style.background = 'green';
            agentState = 'active';
        }, 100);
        getOrder();
    }
    else if (agentState === 'waiting') {
        connectToServer(true, 'waiting');
        getOrder();
        setWaitingState();
    }
    else if (agentState === 'assigned') {
        orderDetailsForAgent();
    }
    else {
        if (document.querySelector('.ordercontainar')) {
            document.querySelector('.ordercontainar').innerHTML = '<h4 class="waiting-intro">You are Waiting for Orders !</h4>';
            document.querySelector('.ordercontainar').style.display = 'flex';
        }
        if (document.querySelector('.customer-deatils-container')) {
            document.querySelector('.customer-deatils-container').style.display = 'none';
        }
    }
}

export async function getOrder() {
    const request = await fetch('data/data-order.php');
    const orderDetails = await request.json();
    console.log(orderDetails);
    if (orderDetails) {
        let orderHTML = `
        <div class="resutrantname-order">
            <div class="resturant-name-location">
                <p><img src="../img/store.png" alt="customer image" width="20"> ${orderDetails.res_name}</p>
            </div>
            <a href="${orderDetails.res_location}" target="_blank" class="resturant-name-location-button">
                <button><img src="../img/place.png" alt="customer image" width="20"> Location</button>
            </a>
        </div>
        <div class="customername-order">
            <div class="Coustomer-Name-Location">
                <p><img src="../img/customer.png" alt="customer image" width="20"> ${orderDetails.username}</p>
            </div>
            <a href="${orderDetails.location}" target="_blank" class="Coustomer-Name-Location-button">
                <button><img src="../img/place.png" alt="customer image" width="20"> Location</button>
            </a>

        </div>
        <div class="orderdetails">
            <div class="moneyfororder">
                <h3>₹${orderDetails.total} for Order</h3>
            </div>
            <div class="recject-accept">
                <div class="reject-offer">
                    <button class="Accept-button">Accept</button>
                </div>
                <div class="accept-offer">
                    <button class="reject-button">Reject</button>
                </div>
            </div>
        </div>
        `;
        if (document.querySelector('.ordercontainar'))
            document.querySelector('.ordercontainar').innerHTML = orderHTML;
        const rejectBtn = document.querySelector('.reject-button');
        rejectBtn.addEventListener('click', () => {
            setOrderStatus('reject');
        });

        const acceptBtn = document.querySelector('.Accept-button');
        acceptBtn.addEventListener('click', () => {
            setOrderStatus('accept');
        });
    }
    else {
        if (document.querySelector('.ordercontainar'))
            document.querySelector('.ordercontainar').innerHTML = '<h4 class="waiting-intro">You are Waiting for Orders !</h4>';
    }
}

async function setOrderStatus(status) {
    const request = await fetch(`data/data-order.php?confirm=${status}`);
    const response = await request.json();
    if (response.status == 'reject') {
        sessionStorage.setItem('status', 'active');
        let ws = getSocket();
        ws.send(JSON.stringify({ mobile: response.mobile, status: 'reject' }));
        setState();
    }
    else if (response.status == 'accept') {
        let ws = getSocket();
        ws.send(JSON.stringify({ mobile: response.mobile, status: 'accept', rid: response.resId }));
        const waitRequest = await fetch('data/data-accepted.php?status=waiting');
        const data = await waitRequest.json();
        if (data.status === 'waiting') {
            setWaitingState();
        }
    }
}


async function setWaitingState() {
    sessionStorage.setItem('status', 'waiting');
    setTimeout(() => {
        let popupHTML = `
                        <div class="popup">
                            <div class="lottie-container">
                                <lottie-player src="../animations/Animation - 1747318843609.json" background="transparent" speed="1"
                                    style="width: 150px; margin: auto;" loop autoplay></lottie-player>
                            </div>
                            <h2>Thanks for your Patience !</h2>
                            <p>Your order is with the restaurant. Don’t refresh the page they’re checking it now.</p>
                        </div>`;
        generatePopup(popupHTML, true);
        const stateBtn = document.querySelector('.statechanger');
        if (stateBtn) {
            stateBtn.style.display = 'none';
        }
    }, 100);
}

export function generatePopup(popupHTML = '', signal = false) {
    const popupContainer = document.querySelector('.popup-overlay');
    if (signal) {
        popupContainer.style.display = 'flex';
        popupContainer.innerHTML = popupHTML;
    }
    else {
        popupContainer.style.display = 'none';
        popupContainer.innerHTML = popupHTML;
    }
}


export async function orderDetailsForAgent() {
    setTimeout(() => {
        const stateBtn = document.querySelector('.statechanger');
        if (stateBtn) {
            stateBtn.style.display = 'none';
        }
    }, 100);

    connectToServer(true, 'assigned');

    document.querySelector('.ordercontainar').style.display = 'none';
    document.querySelector('.order-details').style.display = 'flex';

    const request = await fetch('data/data-accepted.php');
    const restaurantDetails = await request.json();

    if (restaurantDetails.status === 'picked') {
        getCustomerDetails();
    }
    else if (restaurantDetails.status === 'arrived') {
        paymentMethod();
    }
    else {
        let popupHTML = `<div class="popup">
                                    <div class="lottie-container">
                                        <lottie-player src="../animations/Animation - 1747307351888.json" background="transparent" speed="1"
                                            style="width: 300px; height: 300px; margin: auto;" autoplay>
                                        </lottie-player>
                                    </div>
                                    <h2>Order Accepted by Restaurant !</h2>
                                    <p>Your Order items are preparing by the Restaurant. Please wait for some time to pickup them !</p>
                            </div>`
        generatePopup(popupHTML, true);

        const orderId = restaurantDetails.details.order_id;
        const orderIdPart1 = orderId.substr(0, 13);
        const orderIdPart2 = orderId.substr(13, 16);
        let detailsHTML = `
        <div class="orderid-details">
            <div class="order-id">
                <h2>Order ID : ${orderIdPart1}<strong>${orderIdPart2}</strong></h2>
            </div>
            <div class="resturant-name">
                <div class="restuarnt-name-details">
                    <p>${restaurantDetails.details.res_name}</p>
                </div>
                <div class="resturant-locations">
                    <a class="resturant-loction-button" href="${restaurantDetails.details.res_location}" value="resturant-location" target="_blank">
                    <img src="../img/place.png" alt="customer-image" width="20">Location
                    </a>
                </div>
            </div>
        </div>
        <div class="food-details">
            <div class="items-banner">
                <h4>Items</h4>
            </div>
            <div class="food-items-details">
                
            </div>
            <div class="payment-details">
                <div class="order-totalmoney">
                    <h4>Total : </h4>
                    <h3>₹${restaurantDetails.details.total}</h3>
                </div>
                <div class="order-delivery-status">
                    <button class="delivery-status">Picked</button>
                </div>
            </div>
        </div>
        `;
        document.querySelector('.order-details').innerHTML = detailsHTML;

        let orderDetailsItemsInnerHTML = '';
        restaurantDetails.items.forEach((item) => {
            orderDetailsItemsInnerHTML += `
            <div class="items-names-details">
                <p>${item.item_name}&nbsp;&nbsp;&nbsp;(${item.quantity})</p>
                <input type="checkbox" name="" class="check-items">
            </div>
        `;
        });
        if (document.querySelector('.food-items-details'))
            document.querySelector('.food-items-details').innerHTML = orderDetailsItemsInnerHTML;
        const pickBtn = document.querySelector('.delivery-status');
        pickBtn.addEventListener('click', () => {
            checkItems();
        });

        const resRequest = await fetch('data/data-accepted.php?ready=1');
        const resResponse = await resRequest.json();
        if (resResponse.status === 'ready') {
            generatePopup('', false);
        }
    }
}

async function checkItems() {
    const items = document.querySelectorAll('.check-items');
    let itemsChecked = false;

    for (const item of items) {
        if (item.checked) {
            itemsChecked = true;
        }
        else {
            itemsChecked = false;
            break;
        }
    }

    if (itemsChecked) {
        const request = await fetch('data/data-picked.php?status=pickedup');
        const response = await request.json();
        if (response === 'picked') {
            getCustomerDetails();
        }
    }
    else {
        let popupHTML = `<div class="popup">
                            <div class="lottie-container">
                                <lottie-player src="../animations/Animation - 1747320405248.json" background="transparent" speed="1"
                                style="width: 300px; height: 300px; margin: auto;" autoplay></lottie-player>
                            </div>
                            <h2>Please Verify your Pickup !</h2>
                            <p>Double-check all items before you leave the restaurant—ensuring every dish reaches our customer just as they ordered is your top priority.</p>
                        </div>`;
        generatePopup(popupHTML, true);
        setTimeout(() => {
            generatePopup('', false);
        }, 5000)
    }
}

async function getCustomerDetails() {
    const request = await fetch('data/data-picked.php');
    const customerData = await request.json();
    console.log(customerData);
    if (customerData) {
        orderPicked();
    }
    let customerHTML = `<div class="customer-details">
                            <div class="customer-information">
                                <div class="customer-banner">
                                    <h3>${customerData.username}</h3>
                                </div>
                                <a href="${customerData.location}" class="customer-location" target="_blank">
                                    <button>Location</button>
                                </a>
                            </div>
                            <div class="address-container">
                                <h4>Address:&nbsp;&nbsp;</h4>
                                <p>${customerData.room_no}, ${customerData.area}, ${customerData.landmark}.</p>
                            </div>
                            <div class="food-reached-status">
                                <a href="tel:+91 ${customerData.mobile}" class="customer-contact" target="_blank">
                                    <button>Call Now</button>
                                </a>
                                <div class="customer-payment">
                                    <h4>Total :&nbsp;&nbsp;</h4>
                                    <h3>₹${customerData.total}</h3>
                                </div>
                                <div class="customer-status">
                                    <button>Arrived</button>
                                </div>
                            </div>
                        </div>`;
    const detailsContainer = document.querySelector('.customer-deatils-container');
    if (document.querySelector('.order-details'))
        document.querySelector('.order-details').style.display = 'none';

    if (detailsContainer) {
        detailsContainer.style.display = 'flex';
        detailsContainer.innerHTML = customerHTML;
    }

    const arriveBtn = document.querySelector('.customer-status');
    arriveBtn.addEventListener('click', async () => {
        const request = await fetch('data/data-arrived.php?status=arrived');
        const response = await request.json();
        console.log(response);
        if (response === 'arrived') {
            paymentMethod();
        }
    });
}

async function paymentMethod() {
    const detailsContainer = document.querySelector('.customer-deatils-container');
    if (detailsContainer) {
        if (document.querySelector('.order-details'))
            document.querySelector('.order-details').style.display = 'none';
        detailsContainer.style.display = 'flex';
        detailsContainer.innerHTML = `
                <div class="payment-method-container">
                    <h2>Choose a Payment Method</h2>
                    <div class="payment-btns">
                        <button class="cash-btn">Collect Cash</button>
                        <button class="upi-btn">UPI</button>
                    </div>
                </div>
        `;
    }
    const cashBtn = document.querySelector('.cash-btn');
    const upiBtn = document.querySelector('.upi-btn');

    cashBtn.addEventListener('click', async () => {
        await fetch('data/data-delivered.php');
        await fetch('data/data-ptype.php?mode=cash');
        await confirmPayment(detailsContainer);
    });

    upiBtn.addEventListener('click', async () => {
        await fetch('data/data-delivered.php');
        await fetch('data/data-ptype.php?mode=upi');
        await generateQR(detailsContainer);
    });
}

async function generateQR(detailsContainer) {
    const request = await fetch('data/data-picked.php?details=1');
    const paymentDetails = await request.json();

    detailsContainer.innerHTML = `
        <div class="qrcode-container">
            <h2>Scan through any UPI App</h2>
            <canvas id="qrcode"></canvas>
            <img src="../img/upi-apps.png" alt="upi-apps">
            <button class="confirm-btn">Confirm</button>
        </div>
    `;
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        size: 350,
        value: `upi://pay?pa=9014709040@axl&am=${paymentDetails.total}&cu=INR&tn=${encodeURIComponent(paymentDetails.orderId)}`
    });

    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', () => {
        confirmPayment(detailsContainer);
    });
}

async function confirmPayment(detailsContainer) {
    let umobile = await delivered(); //to send the message to user as delivered
    console.log(umobile);

    const request = await fetch('data/data-arrived.php?status=delivered');
    const response = await request.json();

    if (response === 'delivered') {
        let ws = getSocket();
        ws.send(JSON.stringify({ mobile: umobile, status: 'delivered' }));

        detailsContainer.innerHTML = `
                <div class="confirm-container">
                    <h2>Order Successfully Delivered !</h2>
                </div>
            `;

        setTimeout(() => {
            sessionStorage.setItem('status', 'active');
            location.href = 'activepage.php';
        }, 3000);
    }
}

async function orderPicked() {
    const request = await fetch(`data/data-order.php?confirm=picked`);
    const response = await request.json();
    let umobile = response.mobile;
    let ws = getSocket();
    ws.send(JSON.stringify({ mobile: umobile, status: 'picked' }));
}

async function delivered() {
    const request = await fetch(`data/data-order.php?confirm=delivered`);
    const response = await request.json();
    return response.mobile;
}