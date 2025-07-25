async function getOrdersData() {
    const response = await fetch('data/data-get-orders.php');
    const ordersData = await response.json();
    let ordersHTML = '';
    ordersData.forEach((order) => {
        let dTime = '';
        if (order.Time !== order.delivered_time) {
            dTime = order.delivered_time;
        }
        else {
            dTime = 'not delivered yet';
        }
        ordersHTML += `
            <div class="order">
                <div class="order-cont">
                    <div class="order-details">
                        <h2>${order.res_name}</h2>
                        <p>Order id : ${order.order_id}</p>
                        <p>Ordered on : ${order.Time}</p>
                        <p>Total Paid : ₹${order.total}</p>
                    </div>

                    <div class="reorder-options">
                        <div class="delivered-date">
                            <p>Delivered on : ${dTime}</p>
                        </div>
                        <div class="reorder-button">
                            <a href="cart.php?order-id=${order.order_id}"><button class="reorder-btn">Reorder</button></a>
                            <a href="order-details.php?order-id=${order.order_id}"><button class="viewmore-btn">View More</button></a>
                        </div>
                    </div>
                </div>

                <div class="order-help">
                    <button onclick="location.href = 'order-help.php?order-id=${order.order_id}'" class="help-button">
                        Need Help with this Order ?
                    </button>
                </div>
            </div>
        `;
    });

    const orderContainer = document.querySelector('.orders-container');
    if (ordersData.length > 0) {
        orderContainer.innerHTML = ordersHTML;
    }
    else{
        orderContainer.innerHTML = `
        <h2>No Orders found !</h2>
        <a href="restaurants-in-tirumala-food-delivery/"><button>Browse Restaurants</button></a>`;
    }

    if (document.querySelector('.reorder-btn')) {
        document.querySelector('.reorder-btn').addEventListener('click', async () => {
            const userMobile = sessionStorage.getItem('userMobile');
            localStorage.removeItem(`storedItems-${userMobile}`);
        });
    }
}

getOrdersData();