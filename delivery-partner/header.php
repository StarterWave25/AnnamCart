<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">


<div class="logo-container">
    <a href="index.php">
        <h1 class="for-gradient">AnnamCart</h1>
    </a>
</div>
<div class="Aent-navbar">
    <ul class="Options">
        <li class="Option1"><a href="activepage.html">Home</a></li>
        <li class="Option2"><a href="index.php">Earning</a></li>
        <li class="Option3"><button class="statechanger">Inactive</button></li>
    </ul>
    <script type="module">
        import {
            getOrder
        } from './script/get-order.js';

        let dMobile = <?php
                        session_start();
                        if (isset($_SESSION['dmobile'])) echo $_SESSION['dmobile'];
                        ?>;
        let ws;

        const stateBtn = document.querySelector('.statechanger');
        let agentState = sessionStorage.getItem('status') || 'inactive';

        if (agentState === 'active') {
            stateBtn.textContent = 'Active';
            stateBtn.style.background = 'green';
            agentState = 'active';
        }

        stateBtn.addEventListener('click', () => {
            if (agentState === 'inactive') {
                stateBtn.textContent = 'Active';
                stateBtn.style.background = 'green';
                agentState = 'active';
                connectToServer(true);
                sessionStorage.setItem('status','active');
            } else {
                stateBtn.textContent = 'Inactive';
                stateBtn.style.background = 'red';
                agentState = 'inactive';
                connectToServer(false);
                sessionStorage.setItem('status','inactive');
            }
            
        });

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

                ws.addEventListener('message', () => {
                    getOrder();
                });

            } else {
                ws.close();
            }
        }
    </script>
</div>