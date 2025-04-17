const websocket = require('ws');

const wss = new websocket.Server({ port: 8080 });
const users = new Map();
const agents = new Map();
wss.on('connection', (ws) => {
    console.log('client connected');
    let data;

    ws.addEventListener('message', (event) => {
        data = JSON.parse(event.data);
        if (data.role === 'user') {
            users.set(data.mobile, { ws, mobile: data.mobile });
            users.forEach((user) => {
                console.log(user.mobile);
            });
        }
        else if (data.role === 'agent') {
            agents.set(data.mobile, { ws, mobile: data.mobile });
            agents.forEach((agent) => {
                console.log(agent.mobile);
            });
            setStatus('active', data.mobile);
        }
        else {
            agents.forEach((agent) => {
                if (agent.mobile === data) {
                    agent.ws.send('life set');
                }
            });
        }
    });


    ws.addEventListener('close', () => {
        agents.forEach((agent) => {
            if (agent.ws === ws) {
                setStatus('inactive', agent.mobile);
                agents.delete(agent);
            }
        });
    });
});

console.log('Socket started');


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