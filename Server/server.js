const websocket = require('ws');

const wss = new websocket.Server({ port: 8080 });
const users = new Map();
const agents = new Map();
const restaurants = new Map();

wss.on('connection', (ws) => {
    console.log('client connected');
    let data;

    ws.addEventListener('message', (event) => {
        data = JSON.parse(event.data);
        console.log(data);
        
        if (data.role === 'user') {
            users.set(data.mobile, { ws, mobile: data.mobile });
        }

        else if (data.role === 'agent') {
            agents.set(data.mobile, { ws, mobile: data.mobile });
            setStatus(data.status, data.mobile);
        }

        else if (data.role === 'restaurant') {
            restaurants.set(data.rid, { ws, rid: data.rid });
            setRestaurantStatus('active', data.rid);
        }

        else if (data.from == 'restaurant') {
            agents.forEach((agent) => {
                if (agent.mobile == data.agentMobile) {
                    agent.ws.send(data.status);
                }
            });
            users.forEach((user) => {
                if (user.mobile == data.userMobile) {
                    user.ws.send(data.status);
                }
            });
        }

        else if (data.status == 'accept' || data.status == 'reject') {
            if (data.rid) {
                restaurants.forEach((res) => {
                    if (res.rid == data.rid) {
                        res.ws.send('take order');
                    }
                });
            }
        }

        else if (data.status == 'prepare' || data.status == 'picked' || data.status == 'delivered') {
            setTimeout(() => {
                users.forEach((user) => {
                    if (user.mobile == data.mobile) {
                        user.ws.send(data.status);
                    }
                });
            }, 2000);
        }

        else {
            agents.forEach((agent) => {
                if (agent.mobile == data) {
                    agent.ws.send('life set');
                }
            });
        }

    });

    ws.addEventListener('close', () => {
        agents.forEach((agent) => {
            if (agent.ws === ws) {
                checkStatus(agent.mobile);
                agents.delete(agent);
            }
        });

        restaurants.forEach((res) => {
            if (res.ws === ws) {
                setRestaurantStatus('inactive', res.rid);
                restaurants.delete(res);
                console.log('res disconnected');
            }
        });

    });
});

console.log('Socket started');

async function checkStatus(mobile) {
    const request = await fetch(`http://localhost/AnnamCart/delivery-partner/data/data-status.php?dmobile=${mobile}`);
    const response = await request.json();
    if (response.status == 'active') {
        await fetch('http://localhost/AnnamCart/delivery-partner/data/data-dactivity.php?mode=inactive');
        setStatus('inactive', mobile);
    }
}


async function setStatus(status, mobile) {
    const request = await fetch(`http://localhost/AnnamCart/delivery-partner/data/data-status.php?dmobile=${mobile}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
    });
    const response = await request.json();
}


async function setRestaurantStatus(status, rid) {
    const request = await fetch(`http://localhost/AnnamCart/restaurant-admin/data/data-status.php?rid=${rid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
    });
}