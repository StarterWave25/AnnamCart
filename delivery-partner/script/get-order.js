async function getOrder() {
    const request = await fetch('data/data-order.php');
    const orderDetails = await request.json();
    console.log(orderDetails);
    let orderHTML = `
        <div class="resutrantname-order">
            <div class="resturant-name-location">
                <p>${orderDetails.res_name}</p>
            </div>
            <a href="${orderDetails.res_location}" class="resturant-name-location-button">
                <button>Get Location</button>
            </a>
        </div>
        <div class="customername-order">
            <div class="Coustomer-Name-Location">
                <p>${orderDetails.username}</p>
            </div>
            <a href="${orderDetails.location}" class="Coustomer-Name-Location-button">
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
    document.querySelector('.ordercontainar').innerHTML = orderHTML;
}