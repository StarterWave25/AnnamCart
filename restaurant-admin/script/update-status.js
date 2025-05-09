import { fetchOrders } from "./active-orders.js";

let btn;
setTimeout(() => { btn = document.querySelector('.res-active-btn'); }, 100);

let ws;


async function generateDash() {
    let status = sessionStorage.getItem('status') || await checkStatus();
    if (status === 'active') {
        sessionStorage.setItem('status', 'active');
        setTimeout(() => {
            connectToServer();
        }, 150);
    }
    else if (status === 'inactive') {
        sessionStorage.setItem('status', 'inactive');
        setTimeout(() => {
            generateBtnDOM(status);
        }, 150);
    }
}


function connectToServer() {
    ws = new WebSocket('ws://localhost:8080');
    ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ rid, role: 'restaurant' }));
        generateBtnDOM('active');
        if (location.href != 'http://localhost/AnnamCart/restaurant-admin/active-orders.php' && location.href != 'http://localhost/AnnamCart/restaurant-admin/accepted-orders.php') {
            location.href = 'active-orders.php';
        }
    });
    ws.addEventListener('error', (error) => {
        console.log(error);
    });
    ws.addEventListener('message', () => {
        fetchOrders();
    });
}

export function getWebSocket() {
    return ws;
}


function generateBtnDOM(status) {
    const newBtn = btn.cloneNode(true);
    btn.replaceWith(newBtn);
    btn = newBtn;

    if (status === 'active') {
        btn.style.background = 'green';
        btn.textContent = 'Active';
    }
    else {
        btn.style.background = 'red';
        btn.textContent = 'Inactive';
    }

    btn.addEventListener('click', () => {
        if (status === 'active') {
            sessionStorage.setItem('status', 'inactive');
            ws.close();
            generateBtnDOM('inactive');
        }
        else {
            sessionStorage.setItem('status', 'active');
            connectToServer();
            generateBtnDOM('active');
        }
    });
}


async function checkStatus() {
    const request = await fetch('data/data-status.php?check=1');
    const data = await request.json();
    return await data.status;
}

generateDash();









