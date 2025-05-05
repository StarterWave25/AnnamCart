async function fetchOrders() {
  const request = await fetch(`data/data-get-active-orders.php`);
  const response = await request.json();

  let ordersContaniner = '';
  console.log(response);

  response.forEach(async (order) => {

    ordersContaniner += `
      <div class="order-card">
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
          <button class="reject-btn">Reject</button>
          <button class="accept-btn">Accept</button>
        </div>
      </div>
    `;

     const itemsRequest = await fetch(`data/data-get-active-orders.php?order-id=${order.order_id}`);
     const itemsResponse = await itemsRequest.json();
     let itemsContainer = '';
     itemsResponse.forEach((item) => {
      itemsContainer += `
        <h5>${item.item_name}</h5>
      `;

      document.querySelector('.order-items').innerHTML = itemsContainer;
     });
  });

  document.querySelector('.active-body').innerHTML = ordersContaniner;

}

fetchOrders();