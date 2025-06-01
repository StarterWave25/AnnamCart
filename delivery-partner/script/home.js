async function getRecentOrders() {
  let response = await fetch('data/data-recent-orders.php?mode=recent');
  let orders = await response.json();
  console.log(orders);
  let ordersHTML = '';
  if (orders.length > 0) {
    orders.forEach(order => {
      ordersHTML += `<div class="order1">
      <p>${order.res_name}</p>
      <p>${order.username}</p>
      <div class="ordermoney">
        <p>Total: </p>
        <h2> ₹${order.total}</h2>
      </div>
    </div>`
    });
  }
  else {
    ordersHTML = '<p>No recent orders found !</p>'
  }

  let ordersContainer = `
    <div class="today">
      <p>Recent Orders</p>
    </div>
    <div class="ordersdasbord">
                
    </div>
  `;
  document.querySelector('.prsentorders').innerHTML = ordersContainer;
  setTimeout(() => {
    document.querySelector('.ordersdasbord').innerHTML = ordersHTML;
  }, 100);
}

async function getTodayActivity() {

  let response = await fetch('data/data-recent-orders.php?mode=cash');
  let orders = await response.json();

  let total = 0;
  orders.forEach(order => {
    total += parseInt(order.total);
  });

  let timeResponse = await fetch('data/data-recent-orders.php?mode=time');
  let time = await timeResponse.json();

  let numberResponse = await fetch('data/data-recent-orders.php');
  let Orders = await numberResponse.json();
  let noOrders = 0;
  Orders.forEach(order => {
    noOrders++;
  });

  console.log(Orders);

  let activityHTML = `
    <div class="todayhead">
       <p>Today Activities</p>
    </div>
    <div class="agentactivites">
      <div class="orders">
        <div class="workname1">
            <p>Orders :</p>
        </div>
        <div class="workvalue">
            <h2>${noOrders}</h2>
        </div>
      </div>
      <div class="orders">
        <div class="workname1">
            <p>Time :</p>
        </div>
        <div class="workvalue">
            <h2>${time}</h2>
        </div>
      </div>
      <div class="orders">
        <div class="workname1">
            <p>Colleted Cash :</p>
        </div>
        <div class="workvalue">
            <h2>₹${total}</h2>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.querySelector('.todaydasbord').innerHTML = activityHTML;
  }, 100);
}

getTodayActivity();
getRecentOrders();