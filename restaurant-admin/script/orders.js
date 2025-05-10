async function generateCompleteOrders() {
  let request = await fetch('data/data-complete-orders.php');
  console.log(request);
  let response = await request.json();
  console.log(response);
  let completedOrders = '';
  response.forEach(order => {
    completedOrders += `
    <tr>
      <td>${order.order_id}</td>
      <td>${order.username}</td>
      <td>${order.dname}</td>
      <td>${order.dmobile}</td>
      <td>₹${order.total}</td>
      <td>${order.Time}</td>
    </tr>
  `;
  });

  document.querySelector('.orders').innerHTML = completedOrders;
}

generateCompleteOrders();