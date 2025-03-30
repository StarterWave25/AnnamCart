async function getOrdersData() {
    const response = await fetch('data/data-get-orders.php');
    const ordersData = await response.json();

    console.log(ordersData);

    let ordersHTML = '';
    ordersData.forEach((order) => {
        ordersHTML += `
            <div class="order">
                <div class="order-details">
                    <h2>${order.res_name}</h2>
                    <p>Order id : ${order.order_id}</p>
                    <p>Ordered on : ${order.Time}</p>
                    <p>Total Paid : ₹${order.total}</p>
                </div>

                <div class="reorder-options">
                    <div class="delivered-date">
                        <p>Delivery on : (comes from delivery partner)</p>
                    </div>
                    <div class="reorder-button">
                        <a href=""><button class="reorder-btn">Reorder</button></a>
                        <a href="orderedDetails.php?order-id=${order.order_id}"><button class="viewmore-btn">View More</button></a>
                    </div>
                </div>
            </div>
        `;
    });

    const orderContainer = document.querySelector('.orders-container');
    orderContainer.innerHTML = ordersHTML;

}

getOrdersData();