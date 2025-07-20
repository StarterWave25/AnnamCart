let JSmodalId;

async function getOrderDetails() {
    const request = await fetch(`data/data-order-status.php?status-id=${orderId}`);
    const response = await request.json();
    let orderHTML = `<div class="order-header">
                        <div class="order-id">
                            <h2>Order ID:</h2>
                            <span class="order-number">${orderId}</span>
                        </div>
                        <div class="order-status">
                            <div class="status-dot"></div>
                            <span>${response.status}</span>
                        </div>
                    </div>`;
    let orderSection = document.querySelector('.order-section');
    orderSection.innerHTML = orderHTML;
}
getOrderDetails();


function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
    JSmodalId = modalId;
}



// Form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        sendDataTodB(JSmodalId, formData);
        //Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Submitted ✓';
            submitBtn.style.background = '#28a745';

            setTimeout(() => {
                closeModal(this.closest('.modal'));
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                this.reset();

                // Show success message
                showNotification('Your report has been submitted successfully! We\'ll contact you soon.');
            }, 1500);
        }, 2000);
    });
});


async function sendDataTodB(modalId, formData) {
    let desc = {};
    for (let [name, value] of formData.entries()) {
        desc[name] = value;
    }
    desc = JSON.stringify(desc);

    let tokenId = String(Math.round(Math.random() * 100) + ' ' + orderId);
    const request = await fetch('data/data-help.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ tokenId, orderId, modalId, desc })
    });
    const response = await request.json();

    callVasuki(tokenId, orderId, modalId, desc);
}

async function callVasuki(tokenId, orderId, modalId, desc) {
    const request = await fetch('http://localhost:5678/webhook-test/660f46ba-a1c2-4d3c-8e4f-dd4968faec14', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ tokenId, orderId, modalId, desc })
    });
}


function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal functionality
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function () {
        closeModal(this.closest('.modal'));
    }
});

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(130deg, var(--brown), #ff520271);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0.4; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
document.head.appendChild(style);
