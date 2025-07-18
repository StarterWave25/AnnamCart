async function getOrderDetails() {
    let response = await fetch(`data/data-get-orders.php?order-id=${orderId}`);
    let orderedDetails = await response.json();

    let dTime = '';
    if (orderedDetails.restaurant.Time !== orderedDetails.restaurant.delivered_time) {
        dTime = orderedDetails.restaurant.delivered_time;
    }
    else {
        dTime = 'not delivered yet';
    }
    let orderHTML = '';
    orderHTML = `
        <div class="left-section">
            <div class="heading">
                Order ID: ${orderedDetails.restaurant.order_id}
            </div>
            <div class="food-details">
                <div class="restaurant-name">
                <h2>${orderedDetails.restaurant.res_name}</h2>
                </div>
                <div class="date-time">
                <p>Ordered on : ${orderedDetails.restaurant.Time}</p>
                </div>
                <div class="order-items-container">
                
                </div>
                <div class="delivery-date">
                <p>Delivered on: ${dTime}</p>
                </div>
                <div class="delivery-agent">
                <p>Delivered by: ${orderedDetails.restaurant.dname}</p>
                </div>
            </div>
        </div>
        <div class="right-section">
            <div class="upper-section">
            <div class="tracking-status">
                    <div class="status-circle status-ordered status-active">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Order Received</p>
                </div>
                <span class="tracking-route pickup active"></span>
                <div class="status-circle status-preparing">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Food Prepared</p>
                </div>
                <span class="tracking-route prepare"></span>
                <div class="status-circle status-pickup">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Order Picked up</p>
                </div>
                <span class="tracking-route delivered"></span>
                <div class="status-circle status-delivered">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Order Delivered</p>
                </div>
            </div>

            <div class="buttons-container">
                <button onclick="location.href = 'cart.php?order-id=${orderedDetails.restaurant.order_id}'" class="reorder-btn">Re-order</button>
                <button onclick="location.href = 'order-help.php?order-id=${orderedDetails.restaurant.order_id}'" class='help-btn'>Help</button>
                <a href="tel: +91 ${orderedDetails.restaurant.dmobile}"><button class="call-btn">Call&nbsp;Agent</button></a>
            </div>

        </div>
        <div class="bill-container">
        <div class="bill-details">
            <div class="total">
            <p>Total: </p>
            <p>₹${orderedDetails.restaurant.dtotal}</p>
            </div>

            <div class="hotel">
            <p>Hotel Charges: </p>
            <p>₹50</p>
            </div>

            <div class="discount">
            <p>Discounts: </p>
            <p>₹-${orderedDetails.restaurant.dtotal - orderedDetails.restaurant.total}</p>
            </div>

            <div class="delivery">
            <p>Delivery Charges: </p>
            <p>FREE</p>
            </div>

            <div class="total-bill">
            <p>Total Bill: </p>
            <p>₹${orderedDetails.restaurant.total}</p>
            </div>
        </div>

    </div>
    `;

    let orderItemsHTML = '';
    orderedDetails.orderedItems.forEach((item) => {
        orderItemsHTML += `
        <div class="order-item">
            <p>${item.item_name} x ${item.quantity}</p>
            <p>₹${item.quantity * item.price}</p>
        </div>
    `;
    });

    const orderedContainer = document.querySelector('.ordered-details');
    orderedContainer.innerHTML = orderHTML;

    const orderItemsContainer = document.querySelector('.order-items-container');
    orderItemsContainer.innerHTML = orderItemsHTML;
}

getOrderDetails();

function forStatus() {
    const trackingRoute = document.querySelectorAll('.tracking-route');
    let usermobile = JSON.parse(sessionStorage.getItem('userMobile'));
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('open', () => {
        socket.send(JSON.stringify({
            mobile: usermobile,
            role: 'user'
        }));
    });

    socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.status === 'ready') {
            document.querySelector('.status-preparing').classList.add('status-active');
            trackingRoute[0].classList.add('active');
        }
        else if (data.status === 'picked') {
            document.querySelector('.status-pickup').classList.add('status-active');
            trackingRoute[1].classList.add('active');
        }
        else if (data.status === 'delivered') {
            sessionStorage.removeItem('orderId');
            document.querySelector('.status-delivered').classList.add('status-active');
            trackingRoute[2].classList.add('active');
        }
    });
}

async function statusFromBase() {
    const trackingRoute = document.querySelectorAll('.tracking-route');
    if (orderId !== '') {
        let request = await fetch(`data/data-order-status.php?status-id=${orderId}`);
        let response = await request.json();
        if (response.res_status === 'ready') {
            document.querySelector('.status-preparing').classList.add('status-active');
            trackingRoute[0].classList.add('active');
            forStatus();
        }
        else if (response.status === 'picked') {
            document.querySelector('.status-preparing').classList.add('status-active');
            trackingRoute[0].classList.add('active');
            setTimeout(() => {
                document.querySelector('.status-pickup').classList.add('status-active');
                trackingRoute[1].classList.add('active');
            }, 1000);
            forStatus();
        }
        else if (response.status === 'delivered') {
            sessionStorage.removeItem('orderId');
            document.querySelector('.status-preparing').classList.add('status-active');
            trackingRoute[0].classList.add('active');
            setTimeout(() => {
                document.querySelector('.status-pickup').classList.add('status-active');
                trackingRoute[1].classList.add('active');
            }, 1000);
            setTimeout(async () => {
                document.querySelector('.status-delivered').classList.add('status-active');
                trackingRoute[2].classList.add('active');

                request = await fetch(`data/data-review.php?order-id=${orderId}`);
                response = await request.json();
                if (response.count == 0) {
                    document.querySelector('.popup-overlay').style.display = 'block';
                    document.querySelector('.container').style.opacity = '1';
                    document.querySelector('.container').style.visibility = 'visible';
                }
            }, 1000);
            forStatus();
        }
        else if(response.status === 'cancelled'){
            const trackingStatus = document.querySelector('.tracking-status');
            trackingStatus.innerHTML = "<h3 class='order-cancle'>Your Order is Cancelled !</h3>";
            document.querySelector('.call-btn').style.display = 'none';
            document.querySelector('.help-btn').style.display = 'none';
        }
        else {
            forStatus();
        }
    }
}

setTimeout(() => {
    statusFromBase();
}, 1000);

async function giveReveiw() {
    const request = await fetch(`data/data-review.php?order-id=${orderId}`,);
    const response = await request.json();

    if (response.count == 0 && response.status == 'delivered') {
        setTimeout(() => {
            document.querySelector('.container').style.opacity = '0';
            document.querySelector('.container').style.visibility = 'hidden';
            document.querySelector('.popup-overlay').style.display = 'block';
        }, 4000);
    }
}

