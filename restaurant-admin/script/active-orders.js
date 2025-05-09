import { getWebSocket } from "./update-status.js";

export async function fetchOrders() {
  const request = await fetch(`data/data-get-active-orders.php`);
  const orders = await request.json();

  if (orders.length > 0) {
    let ordersHTML = '';
    orders.forEach(async (order) => {

      ordersHTML += `
      <div class="order-card-${order.order_id} order-card">
        <div class="order-names">
          <h4>${order.username}</h4>
          <h4>${order.dname}</h4>
        </div>

        <div class="order-items">

        </div>

        <div class="order-total">
          <h3>Total: ₹${order.total}</h3>
        </div>

        <div class="order-btns">
          <button class="reject-btn-${order.order_id} reject-btn">Reject</button>
          <button class="accept-btn-${order.order_id} accept-btn">Accept</button>
        </div>
      </div>
    `;

      const itemsRequest = await fetch(`data/data-get-active-orders.php?order-id=${order.order_id}`);
      const itemsResponse = await itemsRequest.json();
      let itemsHTML = '';
      itemsResponse.forEach((item) => {
        itemsHTML += `
        <h5>${item.item_name}</h5>
      `;
        if (document.querySelector('.order-items'))
          document.querySelector('.order-items').innerHTML = itemsHTML;
      });
    });
    if (document.querySelector('.active-body'))
      document.querySelector('.active-body').innerHTML = ordersHTML;

    setBtnListeners(orders);
  }
  else {
    if (document.querySelector('.active-body'))
      document.querySelector('.active-body').innerHTML = '<h2>No Active Orders Found !</h2>';
  }

}

fetchOrders();

function setBtnListeners(orders) {
  orders.forEach((order) => {

    const acceptBtn = document.querySelector(`.accept-btn-${order.order_id}`);
    const rejectBtn = document.querySelector(`.reject-btn-${order.order_id}`);

    acceptBtn.addEventListener('click', async () => {
      const request = await fetch(`data/data-order-status.php?order-id=${order.order_id}&status=accept`);
      const response = await request.json();
      if (response.status == 'accept') {
        sendStatus(response.status, response.agentMobile, response.userMobile, order.order_id);
      }
    });

    rejectBtn.addEventListener('click', async () => {
      const request = await fetch(`data/data-order-status.php?order-id=${order.order_id}&status=reject`);
      const response = await request.json();
      if (response.status == 'reject') {
        sendStatus(response.status, response.agentMobile, response.userMobile, order.order_id);
      }
    });

  });
}


export async function sendStatus(status, agentMobile, userMobile, orderId) {
  let ws = getWebSocket();
  ws.send(JSON.stringify({ agentMobile, userMobile, status, from: 'restaurant' }));
  document.querySelector(`.order-card-${orderId}`).remove();
}



