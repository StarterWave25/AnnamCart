import { sendStatus } from "./active-orders.js";
async function getAcceptedOrders() {
    const request = await fetch('data/data-get-accepted-orders.php');
    const data = await request.json();
    if (!data.error) {

        const orders = data.orders;
        const items = data.items;
        let itemsHTML = [];
        let ordersHTML = '';
        orders.forEach((order) => {
            ordersHTML += `
            <div class="order-card accepted-card order-card-${order.order_id}">
                <div class="order-id">
                    <h3>Order ID : ${order.order_id}</h3>
                </div>
                <div class="order-names">
                    <h4>🤵 ${order.username}</h4>
                    <h4>🚚 ${order.dname}</h4>
                </div>

                <div class="order-items order-items-${order.order_id}">
    
                </div>

                <div class="order-total">
                    <h3>Total: ₹${order.total}</h3>
                </div>

                <div class="order-btns">
                    <a href="tel: +91 ${order.dmobile}"><button class="reject-btn call-btn">Call Agent</button></a>
                    <button class="accept-btn ready-btn" data-order-id=${order.order_id}>Ready</button>
                </div>
            </div>
        `;

            let itemHTML = '';
            items.forEach((item) => {
                if (order.order_id == item.order_id) {
                    itemHTML += `
                    <h5>${item.item_name} (${item.quantity})</h5>
                `;
                }
            });
            itemsHTML.push({ orderId: order.order_id, itemHTML });
        });

        const acceptedBody = document.querySelector('.accepted-body');
        if (acceptedBody) {
            acceptedBody.innerHTML = ordersHTML;
        }
        itemsHTML.forEach((item) => {
            const itemContainer = document.querySelector(`.order-items-${item.orderId}`);
            itemContainer.innerHTML += item.itemHTML;
        });

        setReadyListener();
    }
    else {
        const acceptedBody = document.querySelector('.accepted-body');
        acceptedBody.innerHTML = '<h2>No Accepted Orders Found !</h2>';
    }
}

getAcceptedOrders();


async function setReadyListener() {
    const readyBtns = document.querySelectorAll('.ready-btn');
    readyBtns.forEach((btn) => {
        const orderId = btn.dataset.orderId;
        btn.addEventListener('click', async () => {
            const request = await fetch(`data/data-order-status.php?order-id=${orderId}&status=ready`);
            const response = await request.json();
            if (response.status == 'ready') {
                sendStatus(response.status, response.agentMobile, response.userMobile, orderId);
            }
        });
    });
}