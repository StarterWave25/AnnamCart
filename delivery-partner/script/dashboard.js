import {
    getOrder
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
            stateBtn.style.background = 'green';
            agentState = 'active';
        }

        else if (agentState === 'assigned') {
            if (location.href != 'http://localhost/AnnamCart/delivery-partner/activepage.php') {
                location.href = 'activepage.php';
            }
        }

        else if (agentState === 'requested') {
            connectToServer(true, 'requested');
            if (location.href != 'http://localhost/AnnamCart/delivery-partner/activepage.php') {
                location.href = 'activepage.php';
            }
        }

        stateBtn.addEventListener('click', () => {
            if (agentState === 'inactive') {
                stateBtn.textContent = 'Active';
                stateBtn.style.background = 'green';
                agentState = 'active';
                connectToServer(true, 'active');
                location.href = 'activepage.php';
            } else {
                stateBtn.textContent = 'Inactive';
                stateBtn.style.background = 'red';
                agentState = 'inactive';
                connectToServer(false, 'inactive');
            }
        });

    }, 100);
}


function connectToServer(choice, status) {
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
            sessionStorage.setItem('status', 'requested');
            getOrder();
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