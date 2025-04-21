const websocket = require('ws');

const wss = new websocket.Server({ port: 8080 });
const users = new Map();
const agents = new Map();
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
            setStatus('active', data.mobile);
        }
        else if(data.status === 'reject'){
            users.forEach((user) => {
                console.log(data.mobile);
                if(user.mobile == data.mobile){
                    user.ws.send('reject');
                }
            });
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