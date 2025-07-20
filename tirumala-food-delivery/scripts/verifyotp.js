window.addEventListener('pageshow', function (event) {
    if (event.persisted || (window.performance && performance.navigation.type === 2)) {
        // Force reload if user navigated back to login page
        window.location.reload();
    }
});

const inputOTP = document.getElementById('input-otp');
const submitBtn = document.querySelector('.submit-btn');
const prevLink = sessionStorage.getItem('prev-link');
let otpValue;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = prevLink;
});

inputOTP.addEventListener('input', () => {
    if (inputOTP.value.length > 4) {
        inputOTP.value = otpValue;
    }
    otpValue = inputOTP.value;
});



