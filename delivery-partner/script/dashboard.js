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
            connectToServer(true);
            stateBtn.textContent = 'Active';
            stateBtn.style.background = 'green';
            agentState = 'active';
        }

        stateBtn.addEventListener('click', () => {
            if (agentState === 'inactive') {
                stateBtn.textContent = 'Active';
                stateBtn.style.background = 'green';
                agentState = 'active';
                sessionStorage.setItem('status', 'active');
                connectToServer(true);
                location.href = 'activepage.php';
            } else {
                stateBtn.textContent = 'Inactive';
                stateBtn.style.background = 'red';
                agentState = 'inactive';
                sessionStorage.setItem('status', 'inactive');
                connectToServer(false);
            }
        });

    }, 50);

    function connectToServer(choice) {
        if (choice) {
            ws = new WebSocket('ws://localhost:8080');
            ws.addEventListener('open', () => {
                console.log('connected');
                ws.send(JSON.stringify({
                    mobile: dMobile,
                    role: 'agent'
                }));
            });

            ws.addEventListener('close', () => {
                console.log('connection closed');
            });

            ws.addEventListener('message', (event) => {
                console.log(event.data);
                getOrder();
            });

        } else {
            ws.close();
        }
    }
}

async function getState() {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`data/data-status.php?dmobile=${dMobile}`);
        const response = await request.json();
        resolve(response.status);
    });
}

export function getSocket(){
    if(ws){
        return ws;
    }
}