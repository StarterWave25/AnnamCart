import {
    getOrder, orderDetailsForAgent, generatePopup
} from './get-order.js';


let dMobile = sessionStorage.getItem('dmobile');

generateDash();
let ws;

async function generateDash() {
    let agentState = sessionStorage.getItem('status') || await getState();
    console.log(agentState);
    let stateBtn;

    setTimeout(() => {
        stateBtn = document.querySelector('.statechanger');

        if (agentState === 'active') {
            connectToServer(true, 'active');
            stateBtn.textContent = 'Active';
            stateBtn.style.background = 'var(--brown)';
            agentState = 'active';
        }

        else if (agentState === 'waiting') {
            if (location.href != 'http://localhost/AnnamCart/tirumala-food-delivery/delivery-partner/activepage.php') {
                location.href = 'activepage.php';
            }
        }

        else if (agentState === 'assigned') {
            if (location.href != 'http://localhost/AnnamCart/tirumala-food-delivery/delivery-partner/activepage.php') {
                location.href = 'activepage.php';
            }
        }

        else if (agentState === 'requested') {
            connectToServer(true, 'requested');
            if (location.href != 'http://localhost/AnnamCart/tirumala-food-delivery/delivery-partner/activepage.php') {
                location.href = 'activepage.php';
            }
        }

        stateBtn.addEventListener('click', async () => {
            if (agentState === 'inactive') {
                stateBtn.textContent = 'Active';
                stateBtn.style.background = 'var(--brown)';
                agentState = 'active';
                connectToServer(true, 'active');
                location.href = 'activepage.php';
                await fetch('data/data-dactivity.php?mode=active');
            } else {
                stateBtn.textContent = 'Inactive';
                stateBtn.style.background = 'var(--orange)';
                agentState = 'inactive';
                connectToServer(false, 'inactive');
                await fetch('data/data-dactivity.php?mode=inactive');
            }
        });

    }, 100);
}

export function connectToServer(choice, status) {
    if (choice) {
        ws = new WebSocket('ws://localhost:8080');
        ws.addEventListener('open', () => {
            console.log('connected');
            ws.send(JSON.stringify({
                mobile: dMobile,
                role: 'agent',
                status
            }));
            sessionStorage.setItem('status', status);
        });

        ws.addEventListener('close', () => {
            console.log('connection closed');
        });

        ws.addEventListener('message', (event) => {
            console.log(event.data);
            if (event.data == 'accept') {
                sessionStorage.setItem('status', 'assigned');
                orderDetailsForAgent();
            }
            else if (event.data == 'reject') {
                sessionStorage.setItem('status', 'active');
                let popupHTML = `<div class="popup">
                                    <div class="lottie-container">
                                        <lottie-player src="../animations/Animation - 1747320405248.json" background="transparent" speed="1"
                                        style="width: 300px; height: 300px; margin: auto;" autoplay></lottie-player>
                                    </div>
                                    <h2>Oops, Order Declined !</h2>
                                    <p>This restaurant couldn’t take your order. Try another one nearby it’s just a click away.</p>
                                </div>`;
                generatePopup(popupHTML, true);
                setTimeout(() => {
                    location.href = 'activepage.php';
                }, 5000);
            }
            else if (event.data == 'life set') {
                sessionStorage.setItem('status', 'requested');
                getOrder();
            }
            else if (event.data == 'ready') {
                orderDetailsForAgent();
            }
        });

    } else {
        ws.close();
        sessionStorage.setItem('status', 'inactive');
    }
}

export async function getState() {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`data/data-status.php?dmobile=${dMobile}`);
        const response = await request.json();
        resolve(response.status);
    });
}

export function getSocket() {
    if (ws) {
        return ws;
    }
}