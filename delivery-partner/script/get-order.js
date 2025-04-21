import { getSocket } from './dashboard.js';

export async function getOrder() {
    console.log('called');
    const request = await fetch('data/data-order.php');
    const orderDetails = await request.json();
    if (orderDetails) {
        let orderHTML = `
        <div class="resutrantname-order">
            <div class="resturant-name-location">
                <p>${orderDetails.res_name}</p>
            </div>
            <a href="${orderDetails.res_location}" target="_blank" class="resturant-name-location-button">
                <button>Get Location</button>
            </a>
        </div>
        <div class="customername-order">
            <div class="Coustomer-Name-Location">
                <p>${orderDetails.username}</p>
            </div>
            <a href="${orderDetails.location}" target="_blank" class="Coustomer-Name-Location-button">
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
        const rejectBtn = document.querySelector('.reject-button');
        rejectBtn.addEventListener('click', () => {
            setOrderStatus('reject');
        });

        const acceptBtn = document.querySelector('.Accept-button');
        acceptBtn.addEventListener('click', () => {
            setOrderStatus('accept');
        });
    }
    else {
        document.querySelector('.ordercontainar').innerHTML = 'You are waiting for orders';
    }

    async function setOrderStatus(status) {
        const request = await fetch(`data/data-order.php?confirm=${status}`);
        const response = await request.json();
        if (response.status == 'reject') {
            let ws = getSocket();
            ws.send(JSON.stringify({mobile: response.mobile, status: 'reject'}));
            getOrder();
        }
        else if (response == 'accept') {
            console.log('accepted');
        }
    }
}

getOrder();