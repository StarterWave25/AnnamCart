async function getOrderDetails() {
    let response = await fetch(`data/data-get-orders.php?order-id=${orderId}`);
    let orderedDetails = await response.json();
    console.log(orderedDetails);
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
            <p>Delivered on: xxxxxxxxxxx</p>
            </div>
            <div class="delivery-agent">
            <p>Delivered by: John Doe</p>
            </div>
        </div>
        </div>
        <div class="right-section">
        <div class="upper-section">
            <div class="tracking-status">
                <div class="status-circle status-ordered">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Order Received</p>
                </div>
                <span class="tracking-route pickup"></span>
                <div class="status-circle status-preparing">
                    <span class="status-border"></span>
                    <img src="img/check.png">
                    <p>Food is Preparing</p>
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
                    <p>Order delivered</p>
                </div>
            </div>
            <div class="map">
                <div class="restaurant">
                    <div class="image">
                    <img src="img/place.png" alt="map-symbol">
                    </div>
                    <p>${orderedDetails.restaurant.res_name}</p>
                </div>

                <div class="user">
                    <div class="image">
                    <img src="img/place.png" alt="map-symbol">
                    </div>
                    <p>${orderedDetails.address.area}</p>
                </div>
            </div>

            <div class="buttons-container">
                <button>Reorder</button>
                <button>Help</button>
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