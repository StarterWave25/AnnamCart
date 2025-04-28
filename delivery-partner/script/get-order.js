import { getSocket, getState } from './dashboard.js';

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
    else if (agentState === 'assigned') {
        orderDetailsForAgent();
    }
    else {
        if (document.querySelector('.ordercontainar')) {
            document.querySelector('.ordercontainar').innerHTML = 'You are waiting for orders !';
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
                <p>${orderDetails.res_name}</p>
            </div>
            <a href="${orderDetails.res_location}" target="_blank" class="resturant-name-location-button">
                <button>Get Location</button>
            </a>
        </div>
        <div class="customername-order">
            <div class="Coustomer-Name-Location">
                <p>${orderDetails.username}</p>
            </div>
            <a href="${orderDetails.location}" target="_blank" class="Coustomer-Name-Location-button">
                <button>Get Location</button>
            </a>

        </div>
        <div class="orderdetails">
            <div class="moneyfororder">
                <p>₹${orderDetails.total} for Order</p>
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
            document.querySelector('.ordercontainar').innerHTML = 'You are waiting for orders !';
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
        sessionStorage.setItem('status', 'assigned');
        let ws = getSocket();
        ws.send(JSON.stringify({ mobile: response.mobile, status: 'accept' }));
        orderDetailsForAgent();
    }
}

async function orderDetailsForAgent() {
    setTimeout(() => {
        const stateBtn = document.querySelector('.statechanger');
        if (stateBtn) {
            stateBtn.style.display = 'none';
        }
    }, 100);

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
        foodPreparing();
        let detailsHTML = `
        <div class="orderid-details">
            <div class="order-id">
                <p>Order_Id :</p>
                <p>${restaurantDetails.details.order_id}</p>
            </div>
            <div class="resturant-name">
                <div class="restuarnt-name-details">
                    <p>${restaurantDetails.details.res_name}</p>
                </div>
                <div class="resturant-locations">
                    <a class="resturant-loction-button" href="${restaurantDetails.details.res_location}" value="resturant-location" target="_blank">Location</a>
                </div>
            </div>
        </div>
        <div class="food-details">
            <div class="items-banner">
                <p>Items</p>
            </div>
            <div class="food-items-details">
                
            </div>
            <div class="payment-details">
                <div class="order-totalmoney">
                    <p>Total : </p>
                    <h1>₹${restaurantDetails.details.total}</h1>
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
                <p>${item.item_name}(${item.quantity})</p>
                <input type="checkbox" name="" class="check-items">
            </div>
        `;
        });
        if (document.querySelector('.food-items-details'))
            document.querySelector('.food-items-details').innerHTML = orderDetailsItemsInnerHTML;

        setTimeout(() => {
            const pickBtn = document.querySelector('.delivery-status');
            pickBtn.addEventListener('click', () => {
                checkItems();
            });
        }, 1500);
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
}

async function getCustomerDetails() {
    const request = await fetch('data/data-picked.php');
    const customerData = await request.json();
    if(customerData){
        orderPicked();
    }
    let customerHTML = `<div class="customer-details">
                            <div class="customer-information">
                                <div class="customer-banner">
                                    <p>${customerData.username}</p>
                                </div>
                                <a href="${customerData.location}" class="customer-location" target="_blank">
                                    <button>Location</button>
                                </a>
                            </div>
                            <div class="food-reached-status">
                                <a href="tel:+91 ${customerData.mobile}" class="customer-contact" target="_blank">
                                    <button>Call Now</button>
                                </a>
                                <div class="customer-payment">
                                    <p>Total : </p>
                                    <h1>₹${customerData.total}</h1>
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
                    <h2>Choose Payment method</h2>
                    <button class="cash-btn">Collect Cash</button>
                    <button class="upi-btn">UPI</button>
                </div>
        `;
    }
    const cashBtn = document.querySelector('.cash-btn');
    const upiBtn = document.querySelector('.upi-btn');

    cashBtn.addEventListener('click', async () => {
        await confirmPayment(detailsContainer);
    });

    upiBtn.addEventListener('click', async () => {
        await generateQR(detailsContainer);
    });
}

async function generateQR(detailsContainer) {
    const request = await fetch('data/data-picked.php?details=1');
    const paymentDetails = await request.json();

    detailsContainer.innerHTML = `
        <div class="qrcode-container">
            <h2>Scan through any UPI app</h2>
            <canvas id="qrcode" width="200" height="200"></canvas>
            <button class="confirm-btn">Confirm Payment</button>
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
    const request = await fetch('data/data-arrived.php?status=delivered');
    const response = await request.json();
    if (response === 'delivered') {
        detailsContainer.innerHTML = `
                <div class="confirm-container">
                    <h2>Order Successfully Delivered !</h2>
                </div>
            `;
        delivered();
        setTimeout(() => {
            sessionStorage.setItem('status', 'active');
            location.href = 'activepage.php';
        }, 3000);
    }
}

async function foodPreparing() {
    const request = await fetch(`data/data-order.php?confirm=prepare`);
    const response = await request.json();
    let umobile = response.mobile;
    let ws = getSocket();
    ws.send(JSON.stringify({ mobile: umobile, status: 'prepare' }));
}

async function orderPicked() {
    const request = await fetch(`data/data-order.php?confirm=picked`);
    const response = await request.json();
    let umobile = response.mobile;
    let ws = getSocket();
    ws.send(JSON.stringify({ mobile: umobile, status: 'picked' }));
}

async function delivered(){
    const request = await fetch(`data/data-order.php?confirm=delivered`);
    const response = await request.json();
    let umobile = response.mobile;
    let ws = getSocket();
    ws.send(JSON.stringify({ mobile: umobile, status: 'delivered' }));
}